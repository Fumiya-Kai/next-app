import { useState, useEffect } from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const title = "Top page"
  const message = "React Next.js sample page"

  const url = './data.json'
  const [data, setData] = useState({message: '', data: []})

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(res => setData(res))
  }, [])

  return (
    <>
      <Layout header="Next.js" title={title}>
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">{data.message}</h5>
          <table className="table bg-white">
            <thead className="table-dark">
              <tr><th>Name</th><th>Mail</th><th>Age</th></tr>
            </thead>
            <tbody>
              {data.data.map((value, key) => (
                <tr key={key}>
                  <th>{value.name}</th>
                  <th>{value.mail}</th>
                  <th>{value.age}</th>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="h5">{message}</p>
          <Link href="/other">
            <p className="text-black">go to other page &gt;&gt;</p>
          </Link>
        </div>
      </Layout>
    </>
  )
}
