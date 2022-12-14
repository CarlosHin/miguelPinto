import SectionHero from "./_components/_SectionHero";
import {
    Stack, Text, Box, Heading, Button, Flex
} from '@chakra-ui/react';
import React, { useEffect } from "react";
import { Marquee } from "../components/Marquee";
import Link from "next/link";
import { GetStaticProps } from "next";
import Waves from "../components/Waves";
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

const Section = ({ title, children, srcList1, srcList2, path, duration, route }:
    {
        title: string,
        children: React.ReactNode,
        srcList1?: string[],
        srcList2?: string[],
        path?: string,
        duration: string
        route: string,
    }
) => {
    return (
        <Stack pb={10}>
            <Heading color="orange.200">{title}</Heading>
            {children}
            <Box
                className="marquee__section"
                sx={{
                    _hover: {
                        ".marquee": {
                            opacity: 0.6
                        },
                        "& .button-container": {
                            display: "flex"
                        }
                    }
                }}
                position="relative"
            >
                <Flex
                    className="button-container"
                    display="none"
                    position="absolute"
                    zIndex="10"
                    h="full"
                    w="full"
                    align="center"
                    justify="center"
                >
                    <Link href={route}>
                        <Button
                            w="fit-content"
                            position="absolute"
                            h="80px"
                            border="1px solid"
                        >
                            Ver {title}
                        </Button>
                    </Link>
                </Flex>

                <Marquee
                    srcList={srcList1?.map(el => `${path}${el}`)}
                    duration={duration}
                />
                <Box h={{ base: "10px", md: "10px" }}></Box>
                <Marquee
                    reverse={true}
                    srcList={srcList2?.map(el => `${path}${el}`)}
                    duration={duration}
                />
            </Box>
        </Stack >
    )
};
export default function Obra() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return <Box position="relative">
        <SectionHero title="Obra" />
        <Stack px={{ base: 5, md: 20 }} py={0} pb={{ base: 0, md: 16 }} align="center" >
            <Stack maxW={{ md: "1000px" }}>
                <Stack>
                    <Text>
                        La pintura de Miguel Pinto ha ido evolucionando buscando nuevos caminos de expresi??n, manteni??ndose dentro de una figuraci??n y desarrollando en toda su trayectoria un estilo propio y diferenciador. En sus cuadros vac??a sus emociones y expresa sus sentimientos representados por su juego crom??tico donde plasma colores imposibles y sus formas topogr??ficas. Sus colores, formas y espacios hacen de ??l, un pintor intenso e independiente.
                    </Text>
                    <Text>
                        Podemos establecer tres ??pocas en su trayectoria art??stica: Figurativa, Subjetiva y Abstracta.
                    </Text>
                </Stack>
                <Section
                    title="??poca Figurativa"
                    srcList1={[
                        "1-59x80.jpg", "153-73x92.jpg", "187-90x110.jpg", "268-75x100.jpg", "34-59x79.jpg", "380-22x27.jpg", "416-80x100.jpg", "61-45x95.jpg",
                        "106-57x68.jpg", "155-92x73.jpg", "188-81x100.jpg", "269-81x100.jpg", "340-65x81.jpg", "381-22x27.jpg", "417-81x100.jpg", "63-60x73.jpg",
                    ]}
                    srcList2={[
                        "11-60x81.jpg", "156-92x73.jpg", "190-81x100.jpg", "274-81x100.jpg", "342-55x95.jpg", "382-22x27.jpg", "418-81x100.jpg", "64-60x73.jpg",
                        "110-140x190.jpg", "157-87x116.jpg", "191-95x146.jpg", "275-81x100.jpg", "343-55x95.jpg", "384-60x73.jpg", "419-81x100.jpg", "65-60x73.jpg",
                    ]}
                    path="/img/Figurativa/images/"
                    duration="200s"
                    route="/epocas/figurativa"
                >
                    <Text>
                        Me expreso con temas de tipos y paisajes Castellanos en estructuras muy delimitadas y sobrias con fuerte colorido neofauve. Las formas se encuentran o alejan, para formar una topograf??a de soledades y movimientos. Los espacios se cierran en geometr??as para producir m??s fuerza en los ambientes y no tenga lugar el enga??o. Los paisajes tienen alma depositada en los equilibrios de sus cielos; limpios y totales.
                    </Text>
                </Section>
                <Section
                    title="??poca Subjetiva"
                    // TODO: Change 
                    srcList1={[
                        '10-60x81.jpg', '100-50x64.jpg', '101-50x64.jpg', '102-50x64.jpg', '103-50x64.jpg', '104-50x64.jpg', '105-50x64.jpg', '106-50x64.jpg', '124-60x100.jpg', '125-65x95.jpg',
                    ]}
                    srcList2={[
                        '13-60x81.jpg', '131-60x81.jpg', '135-73x100.jpg', '136-73x100.jpg', '138-81x100.jpg', '144-71x100.jpg', '146-73x100.jpg', '148-73x92.jpg', '149-73x92.jpg', '16-60x81.jpg',
                    ]}
                    path="/img/Subjetiva/images/"
                    duration="100s"
                    route="/epocas/subjetiva"

                >
                    <Text>
                        Mi mundo se exterioriza simbolizando las escenas cotidianas con formas y colores. Lo misterioso se descubre por evocaciones de texturas y contrastes. Las respuestas de la vida o la muerte; alegr??a y la pena, se encuentran en una sutil organizaci??n de todas las partes del cuadro que arrastran a una transformaci??n. Mi mirada subjetiva se limpia con un mundo real pero de cosechas po??ticas.                </Text>
                </Section>
                <Section
                    title="??poca Abstracta"
                    srcList1={[
                        '14-60x81.jpg', '212-102x190.jpg', '221-65x81.jpg', '230-60x81.jpg', '232-60x73.jpg', '233-60x73.jpg', '279-73x100.jpg', '303-81x100.jpg', '521-81x100.jpg', '522-81x100.jpg', '523-81x100.jpg', '524-60x81.jpg', '526-65x81.jpg',
                    ]}
                    srcList2={[
                        '304-81x100.jpg', '31.jpg', '322-81x116.jpg', '421-90x180.jpg', '422-105x190.jpg', '451-60x81.jpg', '459-81x60.jpg', '463-60x85.jpg', '464-65x81.jpg', '466-65x81.jpg', '494-82x116.jpg', '496-81x116.jpg', '497-81x116.jpg', '499-81x116.jpg',
                    ]}
                    path="/img/Abstracta/images/"
                    duration="100s"
                    route="/epocas/abstracta"
                >
                    <Text>
                        Trabajando, trato de llegar a los pozos oscuros de mi ser. Atrapar sutiles caricias, choque y golpes que no veo pero siento; llegar al estado m??s puro de las cosas, a trav??s de una comuni??n abierta al todo. Encontrarme con la perfecci??n de lo m??s peque??o y ef??mero; a lo m??s grande y sublime. Mi pasado es un ca??amazo con infinitos agujeros y el futuro un fantasma que sue??a ajeno a realidades. Mi presente es barroco emocional, con vigor de siembra y nuevos significados.                </Text>
                </Section>
            </Stack >
        </Stack >

        <Waves />

    </Box >
}

export const getStaticProps: GetStaticProps = async (_context) => { return { props: {} } }