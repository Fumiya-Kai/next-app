import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'
import { useRouter } from 'next/router'
import Link from 'next/link'
import '../../components/fire'

const db = getFirestore()

export default function Find() {
  const title = "Firebase search page"
  const [message, setMessage] = useState('find data')
  const [find ,setFind] = useState('')
  const [data, setData] = useState([])
  const mydata = []

  const onChangeFind = (e) => {
    setFind(e.target.value)
  }

  const doAction = ((e) => {
    const q = query(collection(db, 'mydata'), where('name', '==', find))
    getDocs(q)
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
      setMessage("find: " + find)
    })
  })

  return (
    <>
      <Layout header="Next.js" title={title}>
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">{message}</h5>
          <div className="text-left mb-4">
            <div className="form-group">
              <label>Find:</label>
              <input type="text" onChange={onChangeFind} className="form-control mb-3" />
              <button className="btn btn-primary mb-4" onClick={doAction}>Find data</button>
            </div>
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