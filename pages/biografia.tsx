import SectionHero from "./_components/SectionHero";
import { Header } from "../components/Header";
import {
    Stack, Text, Center, Heading, Circle, Flex
} from '@chakra-ui/react';
import { useEffect } from "react";
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null


const items = [
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
    }
]
/*




1956 Expone en Bilbao, Sala Marcos.


1957 Hace el servicio militar. Aprovecha las tardes libres para imponerse en la cerámica. La Escuela de Cerámica de Madrid, le queda a disposición en plena libertad, por orden de su director Sr. Alcántara.

1958 Marcha a Paris, enfrentándose a las grandes obras del Arte Contemporáneo. Viaja a las Islas Baleares. Visita como un intruso a Miró, recibe muy mal, y es la señora quién enseña sus obras. Camilo José Cela comprando sus pinturas y haciendo comprar a sus amistades, permitiéndole conocer el archipiélago.

1959-63 Trata de vivir para siempre como un anacoreta en una casa de campo. No lo consigue pero le vale para encontrarse a sí mismo, y el verdadero sentir del arte que quiere hacer.

1960 Exposición en la galería Fortuny de Madrid.

1963 Tiene estudio compartido en la calle Duque de Alba y hace cerámica y tapiz. Cambia el estudio a la calle Doctor Fourquet. Forma el grupo de pintores Castilla 63.. Se interesa por el grupo, el crítico de Arte, Carlos Areán y ayuda económicamente D. Luis Agosti Romero.
El Grupo Castilla 63 lo forman, Onésimo Anciones, Elena Asín, Luís García Núñez (Lugán), Manuel Prior, Victor Ventura, Julio Plaza y Miguel Pinto. Se hacen exposiciones: Sala Amadís, Ateneo, Galería Biosca, Segovia, Hospital Santa María, Casino Algeciras, Círculo Artístico Sant Llue.


1964 Exposición en Sala Atril.
1965 Exposición en Sala Fortuny.

1966 Exposición en la Galería Grifé & Escoda.

1967 Estando interesado siempre por el teatro Los Amigos de la UNESCO representa, tres obras cortas en Santander.
Se casa con María del Carmen López.

1968 El Concilio Vaticano II, le despierta toda su problemática religiosa y social buscando a grupos. Se interesa en mayor medida en el Arte Sacro.

1969 Se deshace del grupo Castilla y decide trabajar solo.

1970-83 Trabaja la pintura compartiéndola con todos los movimientos ciudadanos, en la esperanza de un cambio.

1984 Exposición en la Sala Editora Nacional.
Exposición en la Galería de Arte Manzanares.
1985 Exposición en Caja Madrid, Centro Cultural, Morata de Tajuña.
1986 Exposición en la Hemeroteca Nacional.
1988 Exposición itinerante:
            TOLEDO, Plaza de Zocodover, s/n. 
            CUENCA, Fermín Caballero, 2.

2020 Actualmente sigue ampliando su obra

*/
export default function Biografia() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return <>
        <Header />
        <SectionHero title="Biografía" />
        <Center px={{ base: 5, md: 10 }} className={"wow fadeIn"}>
            <Stack>
                {items.map((el, index) => (
                    <Flex key={index} align="start" className={"wow fadeIn"}>
                        < Circle
                            mt="6px"
                            mr={1}
                            sx={{
                                w: 3,
                                h: 3,
                                border: "1px solid black"
                            }}
                        >
                            < Circle
                                sx={{
                                    w: 1,
                                    h: 1,
                                    bg: "black"
                                }}
                            ></Circle>
                        </Circle>
                        <Text mr={4} fontWeight="700">{el.year}</Text>
                        <Text >{el.text}</Text>
                    </Flex>
                ))}
            </Stack>

        </Center >
        <Stack h="300px"></Stack>

    </>
}
