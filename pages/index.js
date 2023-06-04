import Image from 'next/image'
import Layout from '../components/Layout'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const title = "Top page"
  const message = "React Next.js sample page"

  return (
    <>
      <Layout header="Next.js" title={title}>
        <div className="alert alert-primary text-center">
          <p className="h5">{message}</p>
          <Link href="/other">
            <p className="text-black">go to other page &gt;&gt;</p>
          </Link>
        </div>
      </Layout>
    </>
  )
}
