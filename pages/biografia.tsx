import SectionHero from "./_components/_SectionHero";
import {
    Stack, Text, Img, Circle, Flex, Box
} from '@chakra-ui/react';
import { useEffect } from "react";
import { GetStaticProps } from "next";
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

type Year = {
    year: number | string;
    text: string;
    img?: string;
}
const items: Year[] = [
    {
        year: 1936,
        text: "Nace en el pueblo de Morata de Tajuña, Comunidad de Madrid (España)"
    },
    {
        year: 1942,
        text: "Sus aficiones más tempranas son, la pintura y el dibujo."
    },
    {
        year: 1945,
        text: "Visita por primera vez el Museo del Prado, lo encuentra frío, silencioso y triste. Intuitivo busca un nuevo arte, mas cerca de su tiempo."
    },
    {
        year: 1946,
        text: "Conoce al pintor F. Odriozola, enseñándole todos los movimientos del Arte Moderno, ala vez que presenta a los pintores Barandiarán, San José, García  Ochoa, Lugán, Miguel Abril, Castelo y Manuel Ortega, algunos de ellos hoy amigos.. Adquiere una nueva forma de ver el arte y la pintura.",
    },
    {
        year: 1947,
        text: "Marcha a Madrid, haciendo de la capital su residencia.",
    },
    {
        year: 1950,
        text: "Primera exposición en la Sala Abril, Madrid. Tiene los primeros encuentros  con los poetas y poesía; coincidiendo con varios recitales dados en la sala. Escribe poesía animado por poetas, Manuel Molina y Ángel Crespo.",
    },
    {
        year: 1951,
        text: "Dibuja y pinta en la Escuela de San Fernando, con su amigo Aguado. Pierde una beca.",
    },
    {
        year: 1955,
        text: "Expone en la sala Libros de Zaragoza.",
        img: "/img/dibujo_a1p.jpeg"
    },
    {
        year: 1956,
        text: "Expone en Bilbao, Sala Marcos."
    },
    {
        year: 1957,
        text: "Hace el servicio militar. Aprovecha las tardes libres para imponerse en la cerámica. La Escuela de Cerámica de Madrid, le queda a disposición en plena libertad, por orden de su director Sr. Alcántara."
    },
    {
        year: 1958,
        text: "1958 Marcha a Paris, enfrentándose a las grandes obras del Arte Contemporáneo. Viaja a las Islas Baleares. Visita como un intruso a Miró, recibe muy mal, y es la señora quién enseña sus obras. Camilo José Cela comprando sus pinturas y haciendo comprar a sus amistades, permitiéndole conocer el archipiélago."
    },
    {
        year: "1959-1963",
        text: "Trata de vivir para siempre como un anacoreta en una casa de campo. No lo consigue pero le vale para encontrarse a sí mismo, y el verdadero sentir del arte que quiere hacer."
    },
    {
        year: 1960,
        text: "Exposición en la galería Fortuny de Madrid."
    },
    {
        year: 1963,
        img: "/img/dibujo_a2p.jpeg",
        text: `Tiene estudio compartido en la calle Duque de Alba y hace cerámica y tapiz. Cambia el estudio a la calle Doctor Fourquet. Forma el grupo de pintores Castilla 63.. Se interesa por el grupo, el crítico de Arte, Carlos Areán y ayuda económicamente D. Luis Agosti Romero.
        <br><br>El Grupo Castilla 63 lo forman, Onésimo Anciones, Elena Asín, Luís García Núñez (Lugán), Manuel Prior, Victor Ventura, Julio Plaza y Miguel Pinto. Se hacen exposiciones: Sala Amadís, Ateneo, Galería Biosca, Segovia, Hospital Santa María, Casino Algeciras, Círculo Artístico Sant Llue.`
    },
    {
        year: 1964,
        text: "Exposición en Sala Atril."
    },
    {
        year: 1965,
        text: "Exposición en Sala Fortuny."
    },
    {
        year: 1966,
        text: "Exposición en la Galería Grifé & Escoda."
    },
    {
        year: 1967,
        text: `Estando interesado siempre por el teatro Los Amigos de la UNESCO representa, tres obras cortas en Santander.
        <br><br>Se casa con María del Carmen López.`
    },
    {
        year: 1968,
        text: "El Concilio Vaticano II, le despierta toda su problemática religiosa y social buscando a grupos. Se interesa en mayor medida en el Arte Sacro."
    },
    {
        year: 1969,
        text: "Se deshace del grupo Castilla y decide trabajar solo."
    },
    {
        year: "1970-1983",
        text: "Trabaja la pintura compartiéndola con todos los movimientos ciudadanos, en la esperanza de un cambio."
    },
    {
        year: 1984,
        text: `Exposición en la Sala Editora Nacional.
        <br>Exposición en la Galería de Arte Manzanares.`
    },
    {
        year: 1985,
        text: "Exposición en Caja Madrid, Centro Cultural, Morata de Tajuña."
    },
    {
        year: 1986,
        text: "Exposición en la Hemeroteca Nacional."
    },
    {
        year: 1988,
        text: `Exposición itinerante:
        <br>TOLEDO, Plaza de Zocodover, s/n. 
        <br>CUENCA, Fermín Caballero, 2.`
    },
    {
        year: 2021,
        text: "Fallece en Madrid"
    },
]

const YearRow = ({ year, index }: { year: Year, index: number }) => {
    return (
        <Stack
            align={{ md: index % 2 === 0 ? "start" : "end" }}
            className="wow fadeIn"
            width={{ md: "50%" }}
            spacing={0}
            alignSelf={{ md: index % 2 === 0 ? "end" : "start" }}
            paddingX={{ md: 10 }}
        >
            <Text fontSize={34} mr={4} fontWeight="700">{year.year}</Text>
            <Text
                w="full"
                dangerouslySetInnerHTML={{ __html: year.text }}
                textAlign={{ md: index % 2 === 0 ? "left" : "right" }}
            ></Text>
            {year.img && <Flex w="full" justifyContent={{ md: index % 2 === 0 ? "start" : "end" }}
                py={4} className="wow fadeIn">
                <Img src={year.img} w={{ base: "80%", md: "400px" }} />
            </Flex>}
        </Stack >
    )
}
export default function Biografia() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return <>
        <SectionHero title="Biografía" />
        <Stack px={{ base: 5, md: 20 }} mb={10} align="center" position="relative" >
            <Box
                position="absolute"
                height={"full"}
                width={0}
                borderLeft="1px solid #55555533"
                top="0px"
                display={{ base: "none", md: "block" }}

            ></Box>
            <Stack maxW="1000px">
                <Stack>
                    {items.map((el, index) => (
                        <YearRow key={index} year={el} index={index} />
                    ))}
                </Stack>
            </Stack >
        </Stack >
    </>
}
export const getStaticProps: GetStaticProps = async (_context) => { return { props: {} } }
