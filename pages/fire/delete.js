import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import { getFirestore, doc, getDoc, deleteDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import Link from 'next/link'
import '../../components/fire'
import { RequestCookiesAdapter } from 'next/dist/server/web/spec-extension/adapters/request-cookies'

const db = getFirestore()

export default function Delete(props) {
  const title = "Firebase delete page"
  const [message, setMessage] = useState('wait.')
  const [data, setData] = useState(null)
  const router = useRouter()

  useEffect(() => {
    if(router.query.id != undefined) {
      setMessage('Delete id = ' + router.query.id)
      getDoc(doc(db, 'mydata', router.query.id))
      .then(res => {
        setData(res.data())
      })
    } else {
      setMessage(message + '.')
    }
  }, [router])

  const doAction = (e) => {
    deleteDoc(doc(db, 'mydata', router.query.id))
    .then(res => {
      router.push('/fire')
    })
  }

  return (
    <>
      <Layout header="Next.js" title={title}>
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">{message}</h5>
          <pre className="card p-3 m-3 h5 text-left">
            Name: {data != null ? data.name : '...'}<br/>
            Mail: {data != null ? data.mail : '...'}<br/>
            Age: {data != null ? data.age : '...'}<br/>
          </pre>
          <button onClick={doAction} className="btn btn-primary">
            Delete
          </button>
        </div>
      </Layout>
    </>
  )
}