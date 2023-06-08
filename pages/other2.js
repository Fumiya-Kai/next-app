import { useState } from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import Layout from '../components/Layout'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Other() {
  const title = "Other2 page"
  const message = "React Next.js other2 sample page"

  const fetcher = (url) => fetch(url).then(res => res.json())
  const [pref, setPref] = useState({id:0, item:'name'})
  const [ address, setAddress ] = useState('/api/hello/' + pref.id + '/' + pref.item)
  const { data, err } = useSWR(address, fetcher)

  const onChange = (e) => {
    pref.id = e.target.value
    setPref(pref)
    setAddress('/api/hello/' + pref.id + '/' + pref.item)
  }

  const onSelect = (e) => {
    pref.item = e.target.value
    setPref(pref)
    setAddress('/api/hello/' + pref.id + '/' + pref.item)
  }

  return (
    <>
      <Layout header="Next.js" title={title}>
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">
            { JSON.stringify(data) }
          </h5>
          <input type="number" className="form-control" onChange={onChange} />
          <select onChange={onSelect} className="form-control form-control-sm">
            <option value="name">Name</option>
            <option value="mail">Mail</option>
            <option value="age">Age</option>
          </select>
          <p className="h5">{message}</p>
          <Link href="/other">
            <p className="text-black">&lt;&lt;go to other page</p>
          </Link>
        </div>
      </Layout>
    </>
  )
}
