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
            title: 'Morata',
            text: "Descripción exposición",
            image: "/img/pueblos1.jpeg",
            date: "Julio 2021"
        },
        {
            title: 'Madrid',
            text: "Descripción exposición",
            image: "/img/abs1.jpeg",
            date: "Septiembre 2021"

        },
        {
            title: 'Perales',
            text: "Descripción exposición",
            image: "/img/porra1.jpeg",
            date: "Noviembre 2022"
        },
        {
            title: 'Valdelaguna',
            text: "Descripción exposición",
            image: "/img/fig1.jpeg",
            date: "Mayo 2021"
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