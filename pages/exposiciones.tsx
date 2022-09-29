import SectionHero from "./_components/SectionHero";
import {
    AspectRatio,
    Center,
    Container,
    Heading,
    SimpleGrid,
    Stack,
    useBreakpointValue,
    Text
} from '@chakra-ui/react';
import { useEffect } from "react";
import ExposicionesCarousel from "../components/ExposicionesCarousel";
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null


const exposionesActuales = [
    {
        title: 'Morata3',
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

const exposionesAntiguas = [
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


export default function Biografia() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])
    const speed = useBreakpointValue({ base: 500, md: 2000 })

    return <>
        <SectionHero title="Exposiciones" />
        <Stack px={{ base: 5, md: 10 }} pb={10} >
            <Center pt={10} pb={8}>
                <Heading>Exposiciones Actuales</Heading>
            </Center>
            <ExposicionesCarousel items={exposionesActuales} speed={speed} />
            <Center pt={10} pb={8}>
                <Heading>Exposiciones Antiguas</Heading>
            </Center>

            <SimpleGrid columns={{ base: 2, md: 5 }} spacing={10}>
                {exposionesAntiguas.map((card, index) => (
                    <AspectRatio
                        key={index}
                        ratio={4 / 3}
                        w={"full"}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={`url(${card.image})`}>
                        <Container size="container.lg" height="full" position="relative">
                            <Stack
                                spacing={1}
                                w={'full'}
                                maxW={'lg'}
                                position="absolute"
                                bottom="5%"
                                left={2}
                            >
                                <Text color="white"
                                    border="1px solid white"
                                    w="max-content" py="1px" px={2} bg="#00000040"
                                    fontSize="10px"
                                >
                                    {card.date}
                                </Text>
                                <Heading color="white" fontSize="20px">
                                    {card.title}
                                </Heading>
                            </Stack>
                        </Container>
                    </AspectRatio>
                ))}
            </SimpleGrid>
        </Stack >
    </>
}
