import { useState } from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import Layout from '../components/Layout'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Other() {
  const title = "Other page"
  const message = "React Next.js other sample page"

  const fetcher = (url) => fetch(url).then(res => res.json())
  const [ address, setAddress ] = useState('/api/hello')
  const { data, err } = useSWR(address, fetcher)

  const onChange = (e) => {
    setAddress('/api/hello?id=' + e.target.value)
  }

  return (
    <>
      <Layout header="Next.js" title={title}>
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">
            { JSON.stringify(data) }
          </h5>
          <input type="number" className="form-control" onChange={onChange} />
          <p className="h5">{message}</p>
          <Link href="/">
            <p className="text-black">&lt;&lt;go to home page</p>
          </Link>
        </div>
      </Layout>
    </>
  )
}
