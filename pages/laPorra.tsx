import SectionHero from "./_components/SectionHero";
import {
    Stack,
    Text,
    Img,
    Box,
    Center,
    Heading,
    Flex,
    Link
} from '@chakra-ui/react';
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { GetStaticProps } from "next";
import { ImgLoad } from "../components/ImgLoad";

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

const path = "/img/la-porra/thumbs/";
const pathHQ = "/img/la-porra/images/";
export default function LaPorra() {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [imagesLoadedHQ, setImagesLoadedHQ] = useState(false);

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
        setTimeout(() => {
            checkLoaded()
        }, 1500);
        // eslint-disable-next-line 
    }, [])
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <Img
                        src={`${imagesLoadedHQ ? pathHQ : path}laPorra${i + 1}.png`}
                    />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    const CUADROS_COUNT = 8;
    const cuadros = Array.from({ length: CUADROS_COUNT }).map((el: number, index: number) => (
        `laPorra${index + 1}`
    ))

    const checkLoaded = () => {
        const loaded = document.getElementsByClassName("img-loaded");
        if (loaded.length >= cuadros.length) {
            setImagesLoaded(true);
            setTimeout(() => {
                checkLoadedHQ()
            }, 1500);
        } else {
            setTimeout(() => {
                checkLoaded()
            }, 500);
        }
    }

    const checkLoadedHQ = () => {
        const loaded = document.getElementsByClassName("imgHQ-loaded");
        if (loaded.length >= cuadros.length) {
            setImagesLoadedHQ(true)
        } else {
            setTimeout(() => {
                checkLoadedHQ()
            }, 500);
        }
    }



    return <>
        <SectionHero title="La Porra" />

        {!isServer && (
            cuadros.map(el =>
                <Box key={el} display="none !important" id="AAA">
                    <ImgLoad
                        src={`${path}${el}.png`}
                        className="img-loaded"
                    />
                </Box>
            )
        )}
        {imagesLoaded && !isServer && (
            cuadros.map(el =>
                <Box key={el} display="none !important">
                    <ImgLoad
                        src={`${pathHQ}${el}.png`}
                        className="imgHQ-loaded"
                    />
                </Box>
            )
        )}
        <Stack px={{ base: 5, md: 20 }} pb={10} align="center" >
            <Stack maxW="1000px">
                <Text>
                    Buscando un paisaje para pintar y memorizar en un cuadro, me encuentro con un paraje llamado LA PORRA.
                    <br /><br />
                    LA PORRA es una gran montaña aislada, con la cima en forma de balcón circular, desde donde se divisan grandes perspectivas.
                    Todo su paisaje me transformo, hasta inquietarme con ensoñaciones que me empujaron a pintarlo para recordar y memorizar las fuentes que me proporcionaron emociones tan intensas.
                    Su vista en forma circular en panorámicas abiertas, Me empujo a visualizar que se podrían exponer en ocho cuadros o partes, que pudieran vivir juntos o separados.
                    Para pintar LA PORRA pase muchos amaneceres en su cima, esperando la luz del día poder trabajar. Los milagros de la luz me despertaron colores y matices fecundaron con ternura y amores a la naturaleza tan sensitiva como inexplicable.
                    Las dificultades del trabajo las asumí con suplicas de constancia, retos de perfección y alegrías; riquezas de asombro. La exuberante panorámica movía mi cuerpo y alma transformando con pinceladas para encontrar la belleza de equilibrios de las austeras quebradas, veredas, llanos y barrancos.
                    <br /><br />
                    Según evolucionaba mi trabajo la infinita variedad de matices y silencios;
                    creo en mi un estado en donde me movía en una nube de purezas con tan intensa imaginación que
                    me siento volar dentro del cuadro; ser parte de sus transformaciones;
                    mis miradas se hicieron cómplices de logros y milagros.
                    Ocho lienzos realizados con las aventuras de distintos días y los giros de distintos cielos
                    con movimientos de tierras como mares extremos, los pude terminar armonizando su totalidad de
                    equilibrios ayudando por cielos limpios con sutilezas intangiblemente desconocidas;
                    ocho estados creativos sin ser repetitivos, pudiendo vivir juntos o separados.
                    Los cuadros de LA PORRA no son indiferentes a ninguna mirada; abrazan realidades, despiertan lenguajes, arrastrando a ser cómplices de las soledades del campo,
                    sensibilizando con las entrañas mentirosas de su alma.
                    <br /><br />
                    Miguel Pinto ( Febrero 2011)
                </Text>
                <Center mt={10}>
                    <Heading>Cuadros</Heading>
                </Center>
                <Text pb={5}>La obra esta compuesta por 8 lienzos al oleo de 3,00mX1,50m haciendo un total de 24,00mx1,5m</Text>
                <Flex w="full" justify="center">

                    <Box w={{ base: "350px", sm: "400px", md: "700px", lg: "900px" }}
                        sx={{
                            ".slick-slide": {
                                w: "full",
                            },
                            "li.slick-active": {
                                filter: "drop-shadow(1px 2px 3px black)"
                            },
                            "li": {
                                w: {
                                    base: "20px !important",
                                    sm: "40px !important",
                                    md: "60px !important",
                                    lg: "100px !important"
                                }
                            }

                        }}
                    >
                        <Slider {...settings}>
                            {cuadros?.map(el =>
                                <Img
                                    key={el}
                                    src={`${imagesLoadedHQ ? pathHQ : path}${el}.png`}
                                />
                            )}
                        </Slider>
                    </Box>
                </Flex>

                <Center pt={{ base: 10, md: 20 }}>
                    <Heading>Ubicación</Heading>
                </Center>
                <Text>
                    Cabeza de la Porra situada en la localidad de Valdelaguna, con una altura de 752 metros,
                    uno de los mas altos de la comarca, es un montículo situado en la Comunidad de Madrid, en la Comarca de Las Vegas,
                    desde donde se puede contemplar los términos de Morata de Tajuña, Perales de Tajuña , Chinchón y Valdelaguna.
                </Text>

                <Box h="400px" w="full" maxW="full" position="relative">
                    <iframe
                        width="100%"
                        height="100%"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=40%C2%B011'45.0%22N%203%C2%B023'41.0%22W&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        scrolling="no"
                    ></iframe>
                    <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a><br />

                </Box>
                <Center pt={10}>
                    <Heading>Enlaces de interés</Heading>
                </Center>
                <Text>
                    <Link href="https://valdelaguna.org/">
                        Sitio web de Valdelaguna
                    </Link>
                    <br />
                    <Link href="https://www.emcvillarejo.com/senderismo-cultural/1381-cabezas-de-valdelaguna">
                        Ruta Cabezas de Valdelaguna
                    </Link>
                    <br />
                    <Link href="https://es.slideshare.net/aljubarrota/el-ferrocarril-del-tajua-y-la-llegada-del-tren-a-chinchn-i-el-trazado-ferroviario">
                        El Ferrocarril del Tajuña y la llegada del tren a Chinchón
                    </Link>
                </Text>

            </Stack>
        </Stack >

    </>
}

export const getStaticProps: GetStaticProps = async (_context) => { return { props: {} } }