import {
    Text, Stack, Heading, Box, Center, Button
} from '@chakra-ui/react';
const epocas = [
    { title: "Figurativa", image: "/img/fig1.jpeg" },
    { title: "Subjetiva", image: "/img/sub1.jpeg" },
    { title: "Abstracta", image: "/img/abs1.jpeg" }]

export function Obra() {
    return <>
        <Center mt={10}>
            <Heading>Obra</Heading>
        </Center>
        <Stack p={10} spacing={6} direction={{ base: "column", md: "row" }}>
            {
                epocas.map(epoca => (
                    <Box
                        w="full"
                        h="300px"
                        sx={{
                            transition: "all 0.1s ease-out",
                            _hover: {
                                "& .epoca": {

                                    transform: "scale(1.05)"
                                }
                            }
                        }}
                        overflow="hidden"
                        filter="drop-shadow(2px 4px 6px black)"

                    >
                        <Box
                            className="epoca"
                            bgImage={epoca.image}
                            w="full"
                            h="full"
                            backgroundSize="cover"
                            borderRadius="10px"
                            display="inline-grid"
                            backgroundRepeat="no-repeat"
                            backgroundPosition="center"
                            cursor="pointer"
                            onClick={() => console.log("AAA")}
                            transition="all 0.9s ease-out"
                        >
                            <Text
                                fontSize="30px"
                                bgColor="white"
                                justifySelf="center"
                                alignSelf="center"
                                fontWeight={600}
                                borderRadius="8px"
                                p={4}
                            >
                                {epoca.title}
                            </Text>
                        </Box>
                    </Box>
                )
                )
            }
        </Stack>
        <Center mt={0}>
            <Button
                rounded={'full'}
                size={'lg'}
                w={{ base: "full", sm: "fit-content" }}
                fontWeight={'normal'}
                px={6}
                bg={'orange.200'}
            >
                Obra Completa
            </Button>
        </Center>

    </>
}
