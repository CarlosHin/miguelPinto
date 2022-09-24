import {
    Text, Stack, Heading, Box, Center, Button
} from '@chakra-ui/react';
const epocas = [
    { title: "Figurativa", image: "/img/fig1.jpeg" },
    { title: "Subjetiva", image: "/img/sub1.jpeg" },
    { title: "Abstracta", image: "/img/abs1.jpeg" }]

export default function Obra() {
    return <>
        <Center mt={10}>
            <Heading>Obra</Heading>
        </Center>
        <Stack p={6} spacing={6} direction={{ base: "column", md: "row" }}>
            {
                epocas.map(epoca => (
                    <Box
                        key={epoca.title}
                        className={"wow fadeInUp"}
                        w="full"
                        h="300px"
                        sx={{
                            transition: "all 0.1s ease-out",
                            _hover: {
                                "& .epoca": {
                                    transform: "scale(1.5)"
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
                            transition="all 3s ease-out"
                        >
                        </Box>

                        <Text
                            position="absolute"
                            zIndex={99999}
                            top={0}
                            bottom={0}
                            right={0}
                            left={0}
                            w="fit-content"
                            h="fit-content"
                            fontSize="30px"
                            bgColor="#FFFFFFED"
                            mixBlendMode="screen"
                            fontWeight={500}
                            borderRadius="8px"
                            margin="auto"
                            p={4}
                        >
                            {epoca.title}
                        </Text>
                    </Box>
                )
                )
            }
        </Stack>
        <Center mt={0} px={6} className={"wow fadeInUp"}>
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
