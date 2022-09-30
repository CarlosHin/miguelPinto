import "../styles/animate.min.css";
import "../styles/marquee.css";
import '@fontsource/nunito-sans/600.css'
import '@fontsource/dancing-script/700.css'
import { ChakraProvider } from "@chakra-ui/react";
import Head from 'next/head'
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Miguel Pinto</title>
        <meta name='description' content='Página oficial de Miguel Pinto Gallego' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=1" />
      </Head>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
