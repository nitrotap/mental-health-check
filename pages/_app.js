import '../styles/globals.css'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline';

import ResponsiveAppBar from '../components/AppBar';

function App({ Component, pageProps }) {

  return (

    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Mental Health Check" />

      </Head>


      <CssBaseline />
      <ResponsiveAppBar />
      <Component {...pageProps} />
    </>
  )
}

export default App
