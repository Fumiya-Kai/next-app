import { useState, useEffect } from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import Link from 'next/link'
import '../../components/fire'

const db = getFirestore()

const auth = getAuth()
const provider = new GoogleAuthProvider()

signOut(auth)

export default function Home() {
  const title = "Firebase page"
  const mydata = []
  const [data, setData] = useState(mydata)
  const [message, setMessage] = useState('wait...')

  useEffect(() => {
    signInWithPopup(auth, provider)
    .then(result => {
      setMessage('logined: ' + result.user.displayName)
    })
    .catch((error) => {
      setMessage('not logined.')
    })
  }, [])

  useEffect(() => {
    if(auth.currentUser != null) {
      getDocs(collection(db, 'mydata'))
      .then((snapshot) => {
        snapshot.forEach((document) => {
          const doc = document.data()
          mydata.push(
            <tr key={document.id}>
              <td>
                <a href={'/fire/delete?id=' + document.id}>
                  {document.id}
                </a>
              </td>
              <td>{doc.name}</td>
              <td>{doc.mail}</td>
              <td>{doc.age}</td>
            </tr>
          )
        })
        setData(mydata)
      })
    } else {
      mydata.push(
        <tr key="1"><th colSpan="4">can't get data.</th></tr>
      )
    }
  }, [message])

  return (
    <>
      <Layout header="Next.js" title={title}>
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">
            {message}
          </h5>
          <div className="flex gap-3 justify-end">
            <Link href="/fire/add">
              <button className="btn btn-primary mb-4">Add data</button>
            </Link>
            <Link href="/fire/find">
              <button className="btn btn-secondary mb-4">Find data</button>
            </Link>
          </div>
          <table className="table bg-white">
            <thead className="table-dark">
              <tr><th>ID</th><th>Name</th><th>Mail</th><th>Age</th></tr>
            </thead>
            <tbody>
              { data }
            </tbody>
          </table>
          <Link href="/">
            <p className="text-black">&lt;&lt;go to home page</p>
          </Link>
        </div>
      </Layout>
    </>
  )
}
