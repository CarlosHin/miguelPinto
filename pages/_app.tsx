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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=1" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
