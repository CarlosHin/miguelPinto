import SectionHero from "./_components/_SectionHero";
import {
    Stack,
    Box
} from '@chakra-ui/react';
import { useEffect } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null


export default function ContactoPage() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return <>
        <Stack px={{ base: 5, md: 2 }} py={10} align="center" >
            <Link href="https://www.carlosh.es/admin/miguelPinto" >
                VER WEB
            </Link>
            <Box
                as="iframe"
                w="full"
                minH="70vh"
                src="https://www.carlosh.es/admin/miguelPinto"
                title="Mensajes"
            >
            </Box>

        </Stack >

    </>
}

export const getStaticProps: GetStaticProps = async (_context) => { return { props: {} } }