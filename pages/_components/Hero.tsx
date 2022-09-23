import {
    Container,
    Stack,
    Flex,
    Box,
    Text,
    Button,
    Img,
    Icon,
    createIcon,
    IconProps,
    useColorModeValue,
} from '@chakra-ui/react';

export default function Hero() {
    return (
        <Container maxW={{ lg: '7xl' }}>
            <Stack
                maxW="full"
                overflow="hidden"
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: 'column-reverse', md: 'row' }}>
                <Stack flex={1} spacing={{ base: 5, md: 10 }} px={{ base: 4, md: 2 }} className={"wow fadeIn"}>
                    <Img src="/img/logoBig.png" alt="logo" />
                    <Text color={'gray.500'} textAlign="center" fontFamily="cursive" >
                        El camino para llegar al arte; a su comprensión, anteponiendo a la razón, sensitividad; a la lógica, intuición; a la metafísica, la conciencia. Primer valor del arte. Sensibilizar.
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: 'column', sm: 'row' }}>
                        <Button
                            rounded={'full'}
                            size={'lg'}
                            w={{ base: "full", sm: "fit-content" }}
                            fontWeight={'normal'}
                            px={6}
                            bg={'orange.200'}
                        >
                            Biografía
                        </Button>
                    </Stack>
                </Stack>
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    className={"wow fadeInRight"}
                    w={'full'}>
                    <Blob
                        w={'150%'}
                        h={'150%'}
                        position={'absolute'}
                        top={'-20%'}
                        left={0}
                        zIndex={-1}
                        color={useColorModeValue('orange.50', 'red.400')}
                    />
                    <Box
                        position={'relative'}
                        height={'300px'}
                        rounded={'2xl'}
                        boxShadow={'2xl'}
                        overflow={'hidden'}>

                        <Img
                            alt={'Hero Image'}
                            w={'100%'}
                            h={'100%'}
                            src={"https://www.miguelpinto.com/wp-content/uploads/2020/03/miguel.png"}
                        />
                    </Box>
                </Flex>
            </Stack>
        </Container >
    );
}


export const Blob = (props: IconProps) => {
    return (
        <Icon
            width={'100%'}
            viewBox="0 0 578 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                fill="currentColor"
            />
        </Icon>
    );
};