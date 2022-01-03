import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Shutter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Footer />
    </div>
  )
}
