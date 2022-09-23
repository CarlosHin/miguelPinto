import { Hero } from "../components/Hero";
import { Header } from "../components/Header";
import {
  Text, Stack
} from '@chakra-ui/react';
import { Obra } from "./_components/Obra";
import ObrasDestacadas from "./_components/ObrasDestacadas";
import { useEffect } from "react";
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

const epocas = [
  { title: "Figurativa", image: "/img/fig1.jpeg" },
  { title: "Subjetiva", image: "/img/sub1.jpeg" },
  { title: "Abstracta", image: "/img/abs1.jpeg" }]

const Card = ({ children }: { children: React.ReactNode }) => (
  <Stack
    className={"wow fadeIn"}
    borderWidth="1px"
    borderRadius="lg"
    bg="#FFFFFFBB"
    filter="drop-shadow(2px 4px 6px black)"
    padding={10}
    w="80%"
  >
    <Text >
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
    <Header />
    <Hero />
    <Stack justify="center" align="center" bgImage="/img/fig1.jpeg" bgSize="cover" mt="10px" p={10} >
      <Card >
        Todo lo que un pintor puede hacer para comunicar su arte a los demás es intentar sugerirlo o indicarlo.
      </Card>
      <Card>
        Todo lo que un pintor puede hacer para comunicar su arte a los demás es intentar sugerirlo o indicarlo.
      </Card>
      <Card>
        Una pintura verdadera, creativa, hace sentir una transformación, un choque espiritual intuitivo, la emoción que libera al alma de su capa de convicciones plagistas y creencias ajenas a su pureza natural.
      </Card>
    </Stack>
    <Obra />
    <ObrasDestacadas />
    <Stack h="300px"></Stack>

  </>
}
