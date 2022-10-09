import SectionHero from "./_components/SectionHero";
import {
    AspectRatio,
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


const exposionesActuales = [
    {
        title: 'CartelIEA2021',
        text: "",
        image: "CartelIEA2021.png",
        date: ""
    },
    {
        title: 'Cid 2021',
        text: "",
        image: "CartelCid2021.jpeg",
        date: ""
    },
    {
        title: 'MAC CROHOM 2021',
        text: "",
        image: "CartelMACCROHON2021.png",
        date: ""

    },
    {
        title: 'Perales 2022',
        text: "",
        image: "CartelPerales2022.png",
        date: ""
    },


    {
        title: 'Valdelaguna 2022',
        text: "",
        image: "CartelValdelaguna2022.png",
        date: ""
    },

    {
        title: 'Paco de Lucía 2022',
        text: "",
        image: "CartelPacodeLucia2022.png",
        date: ""
    },

    {
        title: 'Cid 2022',
        text: "",
        image: "CartelCid2022.png",
        date: ""
    },


];

const exposionesAntiguas = [
    {
        title: 'CartelIEA2021',
        text: "",
        image: "CartelIEA2021.png",
        date: ""
    },
    {
        title: 'Cid 2021',
        text: "",
        image: "CartelCid2021.jpeg",
        date: ""
    },
    {
        title: 'MAC CROHOM 2021',
        text: "",
        image: "CartelMACCROHON2021.png",
        date: ""

    },
    {
        title: 'Perales 2022',
        text: "",
        image: "CartelPerales2022.png",
        date: ""
    },


    {
        title: 'Valdelaguna 2022',
        text: "",
        image: "CartelValdelaguna2022.png",
        date: ""
    },

    {
        title: 'Paco de Lucía 2022',
        text: "",
        image: "CartelPacodeLucia2022.png",
        date: ""
    },

    {
        title: 'Cid 2022',
        text: "",
        image: "CartelCid2022.png",
        date: ""
    },


];


export default function Exposiciones() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])
    const speed = useBreakpointValue({ base: 500, md: 2000 })

    return <>
        <SectionHero title="Exposiciones" />
        <Stack px={{ base: 5, md: 20 }} py={10} align="center" >
            <Stack maxW={{ base: "full", md: "800px", lg: "1100px" }}>
                <Center pt={10} pb={8}>
                    <Heading>Exposiciones Actuales</Heading>
                </Center>
                <ExposicionesCarousel items={exposionesActuales} speed={speed} />
                <Center pt={10} pb={8}>
                    <Heading>Exposiciones Antiguas</Heading>
                </Center>

                <SimpleGrid columns={{ base: 2, md: 5 }} spacing={5}>
                    {exposionesAntiguas.map((card, index) => (
                        <Img
                            key={index}
                            src={`/img/exposiciones/${card.image}`}
                            border="1px solid #00000044"
                            borderRadius="5px"
                            cursor="pointer"
                            zIndex={10}
                            transition="all .4s ease-out"
                            _hover={{
                                transform: "scale(1.1)",
                                zIndex: 20

                            }}
                        />
                    ))}
                </SimpleGrid>
            </Stack >
        </Stack >
    </>
}
export const getStaticProps: GetStaticProps = async (_context) => { return { props: {} } }
