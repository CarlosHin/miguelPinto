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
    const speed = useBreakpointValue({ base: 500, md: 2000 })


    return (
        <Box className={"wow fadeIn"}>
            <Center mt={10} mb={5}>
                <Heading>Exposiciones</Heading>
            </Center>
            <ExposicionesCarousel items={exposiones} speed={speed} />
        </Box>

    );
}