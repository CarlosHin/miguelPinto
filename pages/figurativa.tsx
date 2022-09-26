import SectionHero from "./_components/SectionHero";
import { Header } from "../components/Header";
import {
    Stack, Text, Grid, GridItem, Img, useBreakpointValue, transform
} from '@chakra-ui/react';
import React, { useEffect } from "react";
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

export const obrasFigurativa = [
    "1-59x80.jpg", "153-73x92.jpg", "187-90x110.jpg", "268-75x100.jpg", "34-59x79.jpg", "380-22x27.jpg", "416-80x100.jpg", "61-45x95.jpg",
    "106-57x68.jpg", "155-92x73.jpg", "188-81x100.jpg", "269-81x100.jpg", "340-65x81.jpg", "381-22x27.jpg", "417-81x100.jpg", "63-60x73.jpg",
    "11-60x81.jpg", "156-92x73.jpg", "190-81x100.jpg", "274-81x100.jpg", "342-55x95.jpg", "382-22x27.jpg", "418-81x100.jpg", "64-60x73.jpg",
    "110-140x190.jpg", "157-87x116.jpg", "191-95x146.jpg", "275-81x100.jpg", "343-55x95.jpg", "384-60x73.jpg", "419-81x100.jpg", "65-60x73.jpg",

    /*
    12-60x81.jpg    158-81x116.jpg  193-65x162.jpg  277-73x100.jpg  344-55x95.jpg   39-60x81.jpg    42-60x81.jpg    66-60x73.jpg
    121-45x116.jpg  159-85x116.jpg  194-70x160.jpg  280-73x100.jpg  345-55x95.jpg   390-65x81.jpg   420-81x100.jpg  67-54x81.jpg
    122-45x116.jpg  160-81x116.jpg  196-70x150.jpg  285-81x100.jpg  346-55x95.jpg   391-100x150.jpg 428-95x145.jpg  7-65x81.jpg
    123-60x100.jpg  162-81x118.jpg  197-70x150.jpg  288-81x100.jpg  347-55x95.jpg   392-90x100.jpg  43-60x81.jpg    70-54x80.jpg
    126-60x100.jpg  163-81x116.jpg  198-70x150.jpg  289-81x100.jpg  348-55x95.jpg   393-43x60.jpg   433-70x110.jpg  71-54x81.jpg
    127-51x98.jpg   165-81x116.jpg  199-94x148.jpg  29-58x80.jpg    349-55x95.jpg   394-60x70.jpg   434-70x110.jpg  72-54x80.jpg
    128-54x108.jpg  167-61x116.jpg  2-59x80.jpg     290-81x100.jpg  350-55x95.jpg   397-50x73.jpg   435-90x100.jpg  74-54x81.jpg
    129-70x100.jpg  168-61x116.jpg  200-97x148.jpg  291-81x100.jpg  351-55x95.jpg   398-50x73.jpg   436-90x100.jpg  75-54x81.jpg
    130-70x100.jpg  169-81x116.jpg  203-100x150.jpg 293-81x100.jpg  352-55x95.jpg   4-75x95.jpg     438-50x73.jpg   77-54x81.jpg
    131-70x100.jpg  170-81x116.jpg  205-162x114.jpg 294-81x100.jpg  354-55x95.jpg   40-60x81.jpg    439-50x73.jpg   78-54x81.jpg
    133-73x100.jpg  172-60x120.jpg  21-65x81.jpg    295-81x100.jpg  355-55x95.jpg   401-60x81.jpg   44-55x95.jpg    79-60x73.jpg
    134-73x100.jpg  173-60x120.jpg  218-80x120.jpg  296-80x100.jpg  357-65x90.jpg   402-54-x81.jpg  440-50x73.jpg   80-54x73.jpg
    137-81x100.jpg  174-60x120.jpg  219-81x116.jpg  298-81x100.jpg  358-65x92.jpg   403-54x80.jpg   441-50x72.jpg   81-60x73.jpg
    139-73x100.jpg  175-60x120.jpg  220-105x112.jpg 299-81x116.jpg  359-65x92.jpg   404-60x80.jpg   442-50x73.jpg   82-60x73.jpg
    141-81x100.jpg  176-60x120.jpg  237-81x100.jpg  3-75x95.jpg     362-72x100.jpg  405-60x80.jpg   443-50x72.jpg   83-60x73.jpg
    142-76x100.jpg  177-60x120.jpg  240-80x97.jpg   31-60x81.jpg    363-72x100.jpg  407-70x80.jpg   444-50x73.jpg   87-50x73.jpg
    143-75x95.jpg   178-60x120.jpg  242-81x100.jpg  312-81x116.jpg  364-72x100.jpg  408-60x92.jpg   445-50x73.jpg   90-54x64.jpg
    143.jpg         179-60x120.jpg  244-81x100.jpg  32-60x81.jpg    366-95x146.jpg  409-70x90.jpg   447-60x81.jpg   91-54x65.jpg
    145-68x96.jpg   180-58x124.jpg  247-81x100.jpg  324-81x116.jpg  37-60x81.jpg    41-60x81.jpg    46-55x94.jpg    92-54x64.jpg
    147-73x100.jpg  181-58x120.jpg  250-81x100.jpg  325-81x116.jpg  370-60x81.jpg   410-70x90.jpg   47-60x100.jpg   94-54x64.jpg
    15-60x81.jpg    182-60x120.jpg  257-81x100.jpg  330-81x54.jpg   374-80x181.jpg  411-70x90.jpg   51-55x95.jpg    95-54x65.jpg
    150-73x92.jpg   183-65x140.jpg  258-81x100.jpg  332-65x81.jpg   376-114x162.jpg 412-70x100.jpg  53-65x80.jpg    96-54x65.jpg
    151-73x92.jpg   184-81x116.jpg  260-81x100.jpg  334-55x95.jpg   379-22x27.jpg   413-72x100.jpg  57-65x81.jpg    Burgos.jpg
    152-65x95.jpg   185-80x130.jpg  261-81x100.jpg  338-65x81.jpg   38-60x81.jpg    415-80x100.jpg  60-59x79.jpg    Isa-102x190.jpg
    */

]
export const obrasFigurativaPath = "/img/Figurativa/images/"

function chunckArrayInGroups(arr, size) {
    var chunk = [], i; // declara array vacio e indice de for
    for (i = 0; i <= arr.length; i += size) // loop que recorre el array 
        arr.slice(i, i + size).length > 0 && chunk.push(arr.slice(i, i + size)); // push al array el tramo desde el indice del loop hasta el valor size + el indicador 
    return chunk
}

export default function Figurativa() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])
    const columns = useBreakpointValue({ base: 2, md: 5, lg: 6 });
    const imagesInColumns = chunckArrayInGroups(obrasFigurativa, obrasFigurativa.length / columns)
    return <>
        <Header />
        <SectionHero title="Época Figurativa" />
        <Stack spacing={10} pt={{ md: 10 }} px={{ base: 5, md: 20 }}>
            <Text>
                Me expreso con temas de tipos y paisajes Castellanos en estructuras muy delimitadas y sobrias con fuerte colorido neofauve. Las formas se encuentran o alejan, para formar una topografía de soledades y movimientos. Los espacios se cierran en geometrías para producir más fuerza en los ambientes y no tenga lugar el engaño. Los paisajes tienen alma depositada en los equilibrios de sus cielos; limpios y totales.
            </Text>
            <Grid
                templateColumns={`repeat(${imagesInColumns.length}, 1fr)`}
                gap={2}
                alignItems="flex-start"
            >
                {imagesInColumns.map((images, index) => (
                    <GridItem key={index} w='100%' >
                        <Stack>
                            {images.map((el, index) => (
                                <Img
                                    key={index}
                                    src={`${obrasFigurativaPath}${el}`}
                                    _hover={{
                                        transform: "scale(1.3)",
                                        border: "3px solid white",
                                        transition: "transform 0.4s ease-out"
                                    }}
                                />
                            ))
                            }

                        </Stack>
                    </GridItem>
                ))}
            </Grid>
        </Stack >
        <Stack h="300px"></Stack>

    </>
}
