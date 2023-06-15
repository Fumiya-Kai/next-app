import { useState, useEffect } from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Link from 'next/link'
import '../../components/fire'

const db = getFirestore()

export default function Home() {
  const title = "Firebase page"
  const mydata = []
  const [data, setData] = useState(mydata)
  const [message, setMessage] = useState('wait...')

  useEffect(() => {
    getDocs(collection(db, 'mydata'))
    .then((snapshot) => {
      snapshot.forEach((document) => {
        const doc = document.data()
        data.push(
          <tr key={document.id}>
            <td>
              <a href={'/fire/del?id=' + document.id}>
                {document.id}
              </a>
            </td>
            <td>{doc.name}</td>
            <td>{doc.mail}</td>
            <td>{doc.age}</td>
          </tr>
        )
      })
      setData(data)
      setMessage('Firebase data.')
    })
  }, [])

  return (
    <>
      <Layout header="Next.js" title={title}>
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">
            {message}
          </h5>
          <Link href="/fire/add">
            <button className="btn btn-primary mb-4">Add data</button>
          </Link>
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
