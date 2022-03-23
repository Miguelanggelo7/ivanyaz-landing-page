import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactMe from '../components/ContactMe'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div>
      <Head>
        <title>IvanYaz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Banner/>
      </main>

      <footer>
        <ContactMe />
        <Footer />
      </footer>
    </div>
  )
}
