import Hero from "./_components/_Hero";
import {
  Text, Stack, Button, Center
} from '@chakra-ui/react';
import Obra from "./_components/_Obra";
import ObrasDestacadas from "./_components/_ObrasDestacadas";
import { useEffect } from "react";
import Exposiciones from "./_components/_Exposiciones";
import Link from "next/link";
import { GetStaticProps } from "next";
import Contacto from "../components/Contacto";
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

const epocas = [
  { title: "Figurativa", image: "/img/fig1.jpeg" },
  { title: "Subjetiva", image: "/img/sub1.jpeg" },
  { title: "Abstracta", image: "/img/abs1.jpeg" }
];

const Card = ({ children }: { children: React.ReactNode }) => (
  <Stack
    className={"wow fadeIn"}
    borderRadius="lg"
    bg="#FFFFFF60"
    filter="drop-shadow(2px 4px 6px black)"
    padding={5}
    w="full"
  >
    <Text
      fontSize="24px"
      fontFamily="Dancing Script"
      color="white"
    >
      {children}
    </Text>
  </Stack>

)
export default function Home() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return <>
    <Hero />
    <Stack
      justify="center"
      align="center"
      bgImage="/img/Figurativa/images/110-140x190.jpg"
      bgSize="cover"
      mt="10px"
      minH="500px"
      p={{ base: 5, md: 10 }}
      spacing={{ base: 5, md: 10 }}
    >
      <Card >
        Todo lo que un pintor puede hacer para comunicar su arte a los demás es intentar sugerirlo o indicarlo.
        <br /><br />
        Una pintura verdadera, creativa, hace sentir una transformación, un choque espiritual intuitivo, la emoción que libera al alma de su capa de convicciones plagistas y creencias ajenas a su pureza natural.
      </Card>
    </Stack>
    <Obra />
    <ObrasDestacadas />
    <Exposiciones />
    <Center py={4} px={6} className={"wow fadeInUp"}>

      <Link href="exposiciones">
        <Button
          size={'lg'}
          w={{ base: "full", sm: "fit-content" }}
        >
          Ver todas las exposiciones
        </Button>
      </Link>
    </Center>
    <Contacto />
  </>
}

export const getStaticProps: GetStaticProps = async (_context) => { return { props: {} } }