import Layout from '../components/Layout'
import Calc from '../components/Calc'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Calculator() {
  const title = "Top page"
  const message = "React Next.js calculator page"

  return (
    <>
      <Layout header="Next.js" title={title}>
        <div className="alert alert-primary text-center">
          <Calc />
          <p className="h5">{message}</p>
          <Link href="/other2">
            <p className="text-black">&lt;&lt; go to other2 page</p>
          </Link>
        </div>
      </Layout>
    </>
  )
}
