import SectionHero from "./_components/_SectionHero";
import {
    Box,
    Center,
    Container,
    Heading,
    SimpleGrid,
    Stack,
    useBreakpointValue,
    Img
} from '@chakra-ui/react';
import { useEffect } from "react";
import ExposicionesCarousel from "../components/ExposicionesCarousel";
import { GetStaticProps } from "next";
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null



const exposionesAntiguas = [
    {
        title: 'CartelIEA2021',
        text: "",
        image: "CartelIEA2021.png",
        date: "Octubre 2021-Noviembre 2021",
        href: "https://expo.miguelpinto.com/iea"
    },
    {
        title: 'Cid 2021',
        text: "",
        image: "CartelCid2021.jpeg",
        date: "Agosto 2021-Enero 2022",
        href: "https://expo.miguelpinto.com/cid"
    },
    {
        title: 'MAC CROHOM 2021',
        text: "",
        image: "CartelMACCROHON2021.png",
        date: "Diciembre 2021-Enero 2022",
        href: "https://expo.miguelpinto.com/Mac-Crohon-Nov-2021"
    },
    {
        title: 'Perales 2022',
        text: "",
        image: "CartelPerales2022.png",
        date: "Abril 2022",
        href: "https://expo.miguelpinto.com/Perales-2022"
    },


    {
        title: 'Valdelaguna 2022',
        text: "",
        image: "CartelValdelaguna2022.png",
        date: "Abril 2022",
        href: "https://expo.miguelpinto.com/Valdelaguna-2022"
    },

    {
        title: 'Paco de Lucía 2022',
        text: "",
        image: "CartelPacodeLucia2022.png",
        date: "Mayo 2022",
        href: "https://expo.miguelpinto.com/Paco-de-Lucia-2022"
    },

    {
        title: 'Cid 2022',
        text: "",
        image: "CartelCid2022.png",
        date: "Agosto 2022",
        href: "https://expo.miguelpinto.com/Cid-2022"
    },


];

const exposionesActuales = [
    {
        title: 'MAC CROHOM 2022',
        text: "",
        image: "CartelMACCROHON2021.png",
        date: "Noviembre 2022-Diciembre 2022",
        href: "https://expo.miguelpinto.com/Mac-Crohon-Nov-2022/"
    },
];


export default function Exposiciones() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])
    const speed = useBreakpointValue({ base: 500, md: 1000 })

    return <>
        <SectionHero title="Exposiciones" />
        <Stack px={{ base: 5, md: 10 }} py={10} align="center" >
            <Stack maxW={{ base: "full", md: "800px", lg: "1300px" }}>
                <Center pt={10} pb={8}>
                    <Heading
                        sx={{
                            fontSize: { base: "30px", md: "50px" },
                            textAlign: "center",
                            "background": "-webkit-linear-gradient( #FBD38D,#FEEBC8)",
                            "-webkit-background-clip": "text",
                            "-webkit-text-fill-color": "transparent",
                            fontFamily: ""
                        }}
                        fontWeight={800}
                    >
                        Pulsa en cada cartel para acceder a su exposición virtual
                    </Heading>
                </Center>
                <Center pt={10} pb={8}>
                    <Heading fontSize="50px" textAlign="center">Exposiciones Actuales</Heading>
                </Center>
                {exposionesActuales.length > 0 ?
                    <ExposicionesCarousel items={exposionesActuales} speed={speed} />
                    :
                    <Center >
                        <Heading fontSize="20px" textAlign="center">No hay exposiciones actualmente</Heading>
                    </Center>
                }
                <Center pt={10} pb={8}>
                    <Heading fontSize="50px" textAlign="center">Exposiciones Antiguas</Heading>
                </Center>

                <SimpleGrid columns={{ base: 2, md: 5 }} spacing={5}>
                    {exposionesAntiguas.map((card, index) => (
                        <Box
                            key={index}
                            position="relative"
                            zIndex={10}
                            transition="all .4s ease-out"
                            _hover={{
                                transform: "scale(1.1)",
                                zIndex: 20
                            }}
                            border="1px solid #00000044"
                            borderRadius="5px"
                            cursor="pointer"
                        >
                            <Box
                                position="absolute"
                                top={2}
                                left={2}
                                bg="brand.primary"
                                zIndex={30}
                                p={2}
                                borderRadius={10}
                                fontWeight={600}
                                fontSize={10}
                                opacity={0.9}
                                maxW="100px"

                            >
                                {card.date}
                            </Box>
                            <a href={card.href} target="_blank" rel="noreferrer">
                                <Img src={`/img/exposiciones/${card.image}`} />
                            </a>
                        </Box>
                    ))}
                </SimpleGrid>
            </Stack >
        </Stack >
    </>
}
export const getStaticProps: GetStaticProps = async (_context) => { return { props: {} } }
