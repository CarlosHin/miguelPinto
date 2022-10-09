import React from 'react';
import {
    Box,
    useBreakpointValue,
    Heading,
    Center,
} from '@chakra-ui/react';
import ExposicionesCarousel from '../../components/ExposicionesCarousel';



export default function Exposiones() {
    const exposiones = [
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
    const speed = useBreakpointValue({ base: 500, md: 100 })


    return (
        <Box className={"wow fadeIn"}>
            <Center mt={10} mb={5}>
                <Heading>Exposiciones</Heading>
            </Center>
            <ExposicionesCarousel items={exposiones} speed={speed} />
        </Box>

    );
}