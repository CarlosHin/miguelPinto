import "../styles/animate.min.css";
import "../styles/marquee.css";
import { ChakraProvider } from "@chakra-ui/react";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Miguel Pinto</title>
        <meta name='description' content='Página oficial de Miguel Pinto Gallego' />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
