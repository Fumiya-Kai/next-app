import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const title = "Next.js page"
  const message = "React Next.js sample page"

  return (
    <>
      <Head>
        <title>{title}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      </Head>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h2 className="my-3" id="subtitle">{title}</h2>
        <div className="alert alert-primary text-center">
          <p className="h5">{message}</p>
        </div>
      </div>
    </>
  )
}
