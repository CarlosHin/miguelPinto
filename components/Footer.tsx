import {
    Box,
    Container,
    Link,
    Stack,
    Text,
    SimpleGrid,
    Img,
    Divider,
} from '@chakra-ui/react';

export default function Footer() {
    return (
        <Box bg="orange.100">
            <Stack
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}
                sx={{
                    textAlign: "center",
                    fontSize: "16px"
                }}
            >
                <Link href={'/'}><Img src="/img/logo.png" /></Link>
                <SimpleGrid columns={{ base: 1, md: 7 }} spacing={{ base: 2, md: 6 }} >
                    <Link href={'/'}>Home</Link>
                    <Link href={'/biografia'}>Biografía</Link>
                    <Link href={'/obra'}>Obra</Link>
                    <Link href={'/poesia'}>Poesia</Link>
                    <Link href={'/obrasDestacadas'}>Obras destacadas</Link>
                    <Link href={'/exposiciones'}>Exposiciones</Link>
                    <Link href={'/contacto'}>Contacto</Link>
                </SimpleGrid>
                <Divider w="80%" borderColor="#00000033" />
                <SimpleGrid columns={3} spacing={{ base: 0, md: 0 }} px={{ base: 10, md: 8 }}>
                    <Link href={'/legal'}>Aviso Legal</Link>
                    <Link href={'/cookies'}>Cookies</Link>
                    <Link href={'/privacidad'}>Política de Privacidad</Link>
                </SimpleGrid>
            </Stack>

            <Box>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>Web realizada por <Link href="https://www.carlosh.es" fontWeight={700}>Carlos Hinojosa Pinto</Link></Text>
                </Container>
            </Box>
        </Box>
    );
}

