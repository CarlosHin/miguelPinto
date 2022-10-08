import {
    Stack, Text, Grid, GridItem, Img, useBreakpointValue, Center, Spinner, Box
} from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { ImageModal } from "./ImageModal";
import SectionHero from '../../_components/SectionHero';
import Waves from '../../../components/Waves';
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null


function chunckArrayInColumns(arr, columns) {
    var chunk = [];
    for (let i = 0; i < columns; i++) chunk.push([]);
    for (let i = 0; i <= arr.length; i++)
        arr[i] && chunk[i % columns].push(arr[i]);
    return chunk
}

const EpocaImage = (props) => {
    const {
        path,
        pathHQ,
        img,
        setModalImage,
        setIsOpen
    } = props;
    const [loaded, setLoaded] = useState(false);
    const [loadedHQ, setLoadedHQ] = useState(false);
    const src = `${loadedHQ ? pathHQ : path}${img}`
    return (
        <Box
            className="wow fadeInUp"
            w="full"
            h="full"
        >
            <Img
                className={loaded ? "img-epoca-loaded" : ""}
                src={src}
                cursor="pointer"
                zIndex={1}
                _hover={{
                    transform: { md: "scale(1.2)" },
                    border: "3px solid white",
                    transition: "transform 0.2s ease-out",
                    zIndex: 10
                }}
                onClick={() => {
                    setModalImage(`${pathHQ}${img}`)
                    setIsOpen(true)
                }}
                onLoad={() => setLoaded(true)}
                h="max-content"
                w="full"
            />
            {!isServer && < Img
                src={`${pathHQ}${img}`}
                display="none"
                onLoad={() => setLoadedHQ(true)}

            />}
        </Box>
    )
}

export default function DetalleEpoca({ path, pathHQ, title, desc }: { path: string, pathHQ: string, title: string, desc: string }) {
    const [images, setImages] = useState<string[]>([]);
    const [modalImage, setModalImage] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const importImages = async () => {
        fetch(path + 'map.txt')
            .then((r) => r.text())
            .then(text => {
                setImages(text.split("\n").filter(el => el.indexOf("jpg") !== -1 || el.indexOf("png") !== -1));
            })
    }
    useEffect(() => {
        new WOW.WOW({
            live: true
        }).init();
        setTimeout(() => {
            checkLoaded()
        }, 1500);
        importImages();
        // eslint-disable-next-line 
    }, [])
    const checkLoaded = () => {
        const loaded = document.getElementsByClassName("img-epoca-loaded");
        if (loaded.length === images.length) {
            setIsLoading(false)
        } else {
            setTimeout(() => {
                checkLoaded()
            }, 500);
        }
    }

    const columns = useBreakpointValue({ base: 2, md: 5, lg: 6 });
    const imagesInColumns = images.length > 0 ? chunckArrayInColumns(images, columns) : [];
    return <Box position="relative">
        <SectionHero title={title} />
        <Stack spacing={10} pt={{ base: 4, md: 10 }} pb={{ base: 4, md: 20 }} px={{ base: 5, md: 20 }}>
            <Text>
                {desc}
            </Text>
            {images.map(el => (
                <>
                    {!isServer && < Img
                        src={`${path}${el}`}
                        display="none"
                    />}
                </>
            ))}
            {(!isLoading && imagesInColumns.length > 0) ? (

                <Grid
                    templateColumns={`repeat(${imagesInColumns.length}, 1fr)`}
                    gap={2}
                    alignItems="flex-start"
                >
                    {imagesInColumns.map((column, index) => (
                        <GridItem key={index} w='100%'>
                            <Stack>
                                {column.map((el, index) => (
                                    <EpocaImage
                                        key={index}
                                        path={path}
                                        pathHQ={pathHQ}
                                        img={el}
                                        setModalImage={setModalImage}
                                        setIsOpen={setIsOpen}

                                    />
                                ))
                                }

                            </Stack>
                        </GridItem>
                    ))}
                </Grid>
            ) : (
                <Center mt={10}>
                    <Spinner w={{ base: "100px", md: '200px' }} h={{ base: "100px", md: '200px' }} thickness='4px' />
                </Center>
            )}
        </Stack >
        <ImageModal images={images.map(el => `${pathHQ}${el}`)} src={modalImage} open={isOpen} close={() => setIsOpen(false)} />
        <Waves />
    </Box>
}
