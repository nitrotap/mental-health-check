import '../styles/globals.css'
import Head from 'next/head'

function App({ Component, pageProps }) {

  return (

    <>
      <Head>
        <meta charset="utf-8" />

        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Mental Health Check" />

      </Head>


      <Component {...pageProps} />
    </>
  )
}

export default App
