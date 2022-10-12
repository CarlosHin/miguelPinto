import SectionHero from "./_components/_SectionHero";
import {
    Stack,
} from '@chakra-ui/react';
import { useEffect } from "react";
import { GetStaticProps } from "next";
import ObrasDestacadas from "./_components/_ObrasDestacadas";
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null


export default function ObrasDestacadasPage() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return <>
        <SectionHero title="Obras destacadas" />
        <Stack px={{ base: 5, md: 20 }} py={10} align="center" >
            <ObrasDestacadas showTitle={false} />
        </Stack >

    </>
}

export const getStaticProps: GetStaticProps = async (_context) => { return { props: {} } }