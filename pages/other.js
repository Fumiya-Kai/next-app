import Image from 'next/image'
import Layout from '../components/Layout'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Other() {
  const title = "Other page"
  const message = "React Next.js other sample page"

  return (
    <>
      <Layout header="Next.js" title={title}>
        <div className="alert alert-primary text-center">
          <p className="h5">{message}</p>
          <Link href="/">
            <p className="text-black">&lt;&lt;go to home page</p>
          </Link>
        </div>
      </Layout>
    </>
  )
}
