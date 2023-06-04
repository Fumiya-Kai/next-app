import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const title = "Next.js page"
  const message = "React Next.js sample page"

  const h1 = {
    textAlign: 'right',
    padding: '5px 15px'
  }

  const p = {
    textAlign: 'left',
    margin: '0px 5px',
    color: '#669',
    fontSize: '18pt'
  }

  const subtitle = {
    textAlign: 'center',
    margin: '0px 5px',
    color: '#99d',
    fontSize: '24pt',
    fontWeight: 'bold'
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      </Head>
      <h1 className="bg-primary text-white display-4" style={h1}>React</h1>
      <div className="container">
        <h4 className="my-3" style={subtitle} id="subtitle">{title}</h4>
        <div className="alert alert-primary text-center">
          <p className="h5" style={p}>{message}</p>
        </div>
      </div>
    </>
  )
}
