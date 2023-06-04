import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout(props) {

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      </Head>
      <Header header={props.header} />
      <div className="container">
        <h2 className="my-3 text-primary text-center">{props.title}</h2>
        {props.children}
      </div>
      <Footer footer="copyright FUMIYA-KAI"/>
    </>
  )
}