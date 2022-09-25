import SectionHero from "./_components/SectionHero";
import { Header } from "../components/Header";
import {
    Stack, Text, Box, Heading, Img
} from '@chakra-ui/react';
import { useEffect } from "react";
import { Marquee } from "../components/Marquee";
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

const Section = ({ title, children }) => {
    return (
        <Stack>
            <Heading color="orange.200">{title}</Heading>
            {children}
            <Box
                className="marquee__section"
                sx={{
                    _hover: {
                        opacity: 0.4
                    }
                }}
            >

                <Marquee
                    srcList={["/img/fig1.jpeg", "/img/sub1.jpeg", "/img/porra1.jpeg", "/img/pueblos1.jpeg", "/img/fig1.jpeg", "/img/sub1.jpeg", "/img/porra1.jpeg", "/img/pueblos1.jpeg"]}
                />
                <Box h={{ base: "10px", md: "50px" }}></Box>
                <Marquee
                    reverse={true}
                    srcList={["/img/fig1.jpeg", "/img/sub1.jpeg", "/img/porra1.jpeg", "/img/pueblos1.jpeg", "/img/fig1.jpeg", "/img/sub1.jpeg", "/img/porra1.jpeg", "/img/pueblos1.jpeg"]}
                />
            </Box>
        </Stack>
    )
};
export default function Obra() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return <>
        <Header />
        <SectionHero title="Obra" />
        <Stack spacing={10} pt={{ md: 10 }} px={{ base: 5, md: 20 }}>
            <Stack>
                <Text>
                    La pintura de Miguel Pinto ha ido evolucionando buscando nuevos caminos de expresión, manteniéndose dentro de una figuración y desarrollando en toda su trayectoria un estilo propio y diferenciador. En sus cuadros vacía sus emociones y expresa sus sentimientos representados por su juego cromático donde plasma colores imposibles y sus formas topográficas. Sus colores, formas y espacios hacen de él, un pintor intenso e independiente.
                </Text>
                <Text>
                    Podemos establecer tres épocas en su trayectoria artística: Figurativa, Subjetiva y Abstracta.
                </Text>
            </Stack>
            <Section title="Época Figurativa">
                <Text>
                    Me expreso con temas de tipos y paisajes Castellanos en estructuras muy delimitadas y sobrias con fuerte colorido neofauve. Las formas se encuentran o alejan, para formar una topografía de soledades y movimientos. Los espacios se cierran en geometrías para producir más fuerza en los ambientes y no tenga lugar el engaño. Los paisajes tienen alma depositada en los equilibrios de sus cielos; limpios y totales.
                </Text>
            </Section>
            <Section title="Época Subjetiva">
                <Text>
                    Mi mundo se exterioriza simbolizando las escenas cotidianas con formas y colores. Lo misterioso se descubre por evocaciones de texturas y contrastes. Las respuestas de la vida o la muerte; alegría y la pena, se encuentran en una sutil organización de todas las partes del cuadro que arrastran a una transformación. Mi mirada subjetiva se limpia con un mundo real pero de cosechas poéticas.                </Text>
            </Section>
            <Section title="Época Abstracta">
                <Text>
                    Trabajando, trato de llegar a los pozos oscuros de mi ser. Atrapar sutiles caricias, choque y golpes que no veo pero siento; llegar al estado más puro de las cosas, a través de una comunión abierta al todo. Encontrarme con la perfección de lo más pequeño y efímero; a lo más grande y sublime. Mi pasado es un cañamazo con infinitos agujeros y el futuro un fantasma que sueña ajeno a realidades. Mi presente es barroco emocional, con vigor de siembra y nuevos significados.                </Text>
            </Section>
        </Stack >
        <Stack h="300px"></Stack>

    </>
}
