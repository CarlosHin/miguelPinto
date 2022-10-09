import SectionHero from "./_components/SectionHero";
import {
    Stack,
    Text,
} from '@chakra-ui/react';
import { useEffect } from "react";
import { GetStaticProps } from "next";
import Contacto from "../components/Contacto";
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null


export default function ContactoPage() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return <>
        <SectionHero title="Contacto" />
        <Stack px={{ base: 5, md: 2 }} py={10} align="center" >
            <Contacto styles={{
                container: {
                    bg: "",
                }
            }} />
        </Stack >

    </>
}

export const getStaticProps: GetStaticProps = async (_context) => { return { props: {} } }