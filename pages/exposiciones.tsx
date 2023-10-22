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
import { GetStaticProps } from "next";
import exposiciones from "../data/exposiciones";
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null





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
                    <Heading fontSize="50px" textAlign="center">Exposiciones</Heading>
                </Center>

                <SimpleGrid columns={{ base: 2, md: 5 }} spacing={5}>
                    {exposiciones.map((card, index) => (
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
