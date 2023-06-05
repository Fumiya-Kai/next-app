import useSWR from 'swr'
import Image from 'next/image'
import Layout from '../components/Layout'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const title = "Top page"
  const message = "React Next.js sample page"

  const fetcher = (url) => fetch(url).then(res => res.json())
  const { data } = useSWR('/data.json', fetcher)

  return (
    <>
      <Layout header="Next.js" title={title}>
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">
            { data != undefined ? data.message : 'error...'}
          </h5>
          <table className="table bg-white">
            <thead className="table-dark">
              <tr><th>Name</th><th>Mail</th><th>Age</th></tr>
            </thead>
            <tbody>
              { data != undefined ? data.data.map((value, key) => (
                <tr key={key}>
                  <td>{value.name}</td>
                  <td>{value.mail}</td>
                  <td>{value.age}</td>
                </tr>
              )) : <tr><td></td><td>no data.</td><td></td></tr>}
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
