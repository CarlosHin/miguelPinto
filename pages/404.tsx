import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Obra from './_components/Obra';

export default function NotFound() {
    return (
        <Box textAlign="center" py={10} px={6}>
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bgGradient="linear(to-r, #FEEBC8,orange)"
                backgroundClip="text">
                Error 404
            </Heading>
            <Text fontSize="24px" mt={3} mb={2}>
                Página no encontrada
            </Text>
            <Text color={'gray.500'} mb={6}>
                La página que estas buscando no existe
            </Text>
            <Text fontSize="24px" color={'gray.500'} mt={3} mb={2}>
                Pero quizás alguna de estas te interese:
            </Text>
            <Obra showTitle={false} />
        </Box>
    );
}

export const getStaticProps: GetStaticProps = async (_context) => { return { props: {} } }