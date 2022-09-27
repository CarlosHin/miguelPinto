import {
    Stack, Text, Grid, GridItem, Img, useBreakpointValue, Center, Spinner
} from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { ImageModal } from "./ImageModal";
import SectionHero from '../pages/_components/SectionHero';
import { Header } from './Header';
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null


function chunckArrayInColumns(arr, columns) {
    var chunk = [];
    for (let i = 0; i < columns; i++) chunk.push([]);
    for (let i = 0; i <= arr.length; i++)
        arr[i] && chunk[i % columns].push(arr[i]);
    return chunk
}


export default function DetalleEpoca({ path, pathHQ, title, desc }: { path: string, pathHQ: string, title: string, desc: string }) {
    const [images, setimages] = useState<string[]>([])
    const [modalImage, setModalImage] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const importImages = async () => {
        fetch(path + 'map.txt')
            .then((r) => r.text())
            .then(text => {
                setimages(text.split("\n").filter(el => el.indexOf("jpg") !== -1 || el.indexOf("png") !== -1));
            })
    }
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
        importImages();
        // eslint-disable-next-line 
    }, [])
    const columns = useBreakpointValue({ base: 2, md: 5, lg: 6 });
    const imagesInColumns = images.length > 0 ? chunckArrayInColumns(images, columns) : [];
    return <>
        <Header />
        <SectionHero title={title} />
        <Stack spacing={10} pt={{ md: 10 }} px={{ base: 5, md: 20 }}>
            <Text>
                {desc}
            </Text>
            <Grid
                templateColumns={`repeat(${imagesInColumns.length}, 1fr)`}
                gap={2}
                alignItems="flex-start"


            >
                {imagesInColumns.length > 0 ? imagesInColumns.map((column, index) => (
                    <GridItem key={index} w='100%'>
                        <Stack>
                            {column.map((el, index) => (
                                <Img
                                    key={index}
                                    src={`${path}${el}`}
                                    cursor="pointer"
                                    _hover={{
                                        transform: { md: "scale(1.2)" },
                                        border: "3px solid white",
                                        transition: "transform 0.2s ease-out"
                                    }}
                                    onClick={() => {
                                        setModalImage(`${pathHQ}${el}`)
                                        setIsOpen(true)
                                    }}
                                />
                            ))
                            }

                        </Stack>
                    </GridItem>
                )) : (
                    <Center mt={10}>
                        <Spinner w={{ base: "100px", md: '200px' }} h={{ base: "100px", md: '200px' }} thickness='4px' />
                    </Center>
                )}
            </Grid>
        </Stack >
        <ImageModal images={images.map(el => `${pathHQ}${el}`)} src={modalImage} open={isOpen} close={() => setIsOpen(false)} />
        <Stack h="300px"></Stack>

    </>
}
