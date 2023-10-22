import SectionHero from "./_components/_SectionHero";
import {
    SimpleGrid,
    Stack, Text, AspectRatio, Box, Img, useDisclosure
} from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import PuebloModal from "../components/PuebloModal";
import pueblos from "../data/pueblos"
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null


const path = `${process.env.NEXT_PUBLIC_R2_PATH}/Pueblos`;
export interface Pueblo {
    nombre: string;
    img: string;
    text: string;
    imgCount: number;
    formato: string;
    links: string[]
}


export default function PueblosMadrid() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [puebloOpened, setPuebloOpened] = useState<Pueblo | undefined>(undefined)
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();

    }, [])
    const Item = ({ pueblo }: { pueblo: Pueblo }) => {
        return <Box
            w="full"
            minH={{ md: "150px" }}
            transition="all 0.4s ease-out"
            zIndex="1"
            cursor="pointer"
            _hover={{
                transform: { md: "scale(1.1)" },
                zIndex: "2"
            }
            }
            onClick={() => {
                setPuebloOpened(pueblo)
                onOpen();
            }}
        >
            <Img
                src={`${path}/${pueblo?.img}.${pueblo?.formato}`}
            >
            </Img>
            <Box position="relative">
                <Box
                    position="absolute"
                    bottom="5px"
                    left="10px"
                    right="0px"
                    w="max-content"
                    maxW="70%"
                    px={2}
                    py={1}
                    borderRadius={"10px"}
                    bg="brand.primary"
                >
                    <Text textAlign="center">{pueblo.nombre}</Text>
                </Box>
            </Box>
        </Box >
    }


    return <>
        <SectionHero title="Pueblos de Madrid" />
        <Stack px={{ base: 5, md: 20 }} py={10} align="center" >
            <Text >
                La comunidad de Madrid me proporcionó una variedad infinita de pueblos y paisajes. Aquí nací y viví, admirando constantemente sus tierras y costumbres, enriqueciendo mi sensibilidad.
                <br /><br />
                En mi primera etapa de pintor que denomino FIGURATIVA, me exprese a través de paisajes de sierras contrastadas; llanuras austeras y montes bajos con cielos únicos por limpios. En los desnudos de mujer, recreé pintando sus formas ondulantes como campos, sus sutiles bellas posturas, sugerentes perfumes y calores de abrazos.
                <br /><br />
                Con el tiempo, buscando, me encontré con nuevos mensajes de formas y misterios a través de otros mundos de una segunda etapa que denomino SUBJETIVA. Mis pinturas se muestran ante una figuración intangible con una lectura mas intimista armonizando sueños, cataclismos de sombras, silencios y milagros.
                <br /><br />
                Estas dos etapas empezaron a aburrirme, a sentirme repetitivo por lo que me propuse un desafío para cambiar, haciendo un recorrido por todos los pueblos de Madrid y pintar lo más sugerente de su abstracta personalidad.
                <br /><br />
                Nacen 108 cuadros de pueblos; 54 esbozos figurativos y los otros 54 fueron potenciando el descubrimiento de mi tercera etapa ABSTRACTA, en donde he alcanzado la libertad absoluta con desafíos de mi potencia creativa, abriendo nuevas formas y sugiriendo nuevos mundos, transformando mis vivencias en lenguajes topográficos.
                <br /><br />
                Miguel Pinto (Febrero 2011)
            </Text>
            <SimpleGrid columns={{ base: 1, md: 4 }} w="full" gap={1}>
                {pueblos.map((pueblo: Pueblo) => (
                    <Item key={pueblo.nombre} pueblo={pueblo} />
                ))}
            </SimpleGrid>
        </Stack >
        <PuebloModal isOpen={isOpen} onClose={onClose} pueblo={puebloOpened} />

    </>
}

export const getStaticProps: GetStaticProps = async (_context) => { return { props: {} } }