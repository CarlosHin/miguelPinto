import React from 'react';
import {
    Box,
    useBreakpointValue,
    Heading,
    Center,
} from '@chakra-ui/react';
import ExposicionesCarousel from '../../components/ExposicionesCarousel';
import exposiciones from '../../data/exposiciones';


export default function Exposiones() {

    const speed = useBreakpointValue({ base: 500, md: 1000 })


    return (
        <Box className={"wow fadeIn"}>
            <Center mt={10} mb={5}>
                <Heading>Exposiciones</Heading>
            </Center>
            <ExposicionesCarousel items={exposiciones} speed={speed} />
        </Box>

    );
}