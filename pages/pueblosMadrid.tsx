import SectionHero from "./_components/_SectionHero";
import {
    SimpleGrid,
    Stack, Text, AspectRatio, Box, Img, useDisclosure
} from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import PuebloModal from "../components/PuebloModal";

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null


const path = "/img/Pueblos"
const pueblos2 = [
    // 'AlcaladeHenares.jpg', 'Alcorcón.jpg',
    // 'Ambite.jpg', 'Aranjuez.jpg', 
    'ArgandadelRey.jpg',
    'BuitragodeLozoya.jpg', 'CadalsodelosVidrios.jpg',
    'CampoReal.jpg', 'Carabaña.jpg', 'Cenicientos.jpg',
    'Cercedilla.jpg', 'Ciempozuelos.jpg', 'ColmenarViejo.jpg',
    'ColmenardeOreja.jpg', 'Chinchon.jpg', 'Estremera.jpg',
    'FuendidueñadelTajo.jpg', 'Getafe.jpg', 'Humanes.jpg',
    'Loeches.jpg', 'Madrid.jpg', 'Manzanareselreal.jpg',
    'MirafloresdelaSierra.jpg', 'MontejodelaSierra.jpg',
    'MoratadeTajuña.jpg', 'Navacerrada.jpg', 'Navalcarnero.jpg',
    'NuevoBaztan.jpg', 'PeralesdeTajuña.jpg', 'Quijorna.jpg',
    'Rascafria.jpg', 'San-Lorenzo-Escorial.jpg', 'SanAgustindeGuadalix.jpg',
    'SanMartinVega.jpg', 'SanMartindeValdeIglesias.jpg', 'Santorcaz.jpg',
    'SantosdelaHumosa.jpg', 'Tielmes.jpg', 'Titulcia.jpg',
    'TorrejóndeArdóz.jpg', 'Torrelaguna.jpg', 'Torrelodones.jpg',
    'Valdelaguna.jpg', 'Valdemorillo.jpg', 'Valdemoro.jpg',
    'Valdilecha.jpg', 'Vallecas.jpg', 'Villaconejos.jpg',
    'VilladelPrado.jpg', 'VillamanriquedeTajo.jpg',
    'VillardelOlmo.jpg', 'VillarejodeSalvanes.jpg', 'VillaviciosadeOdón.jpg'
];
export interface Pueblo {
    nombre: string;
    img: string;
    text: string;
    imgCount: number;
    formato: string;
    links: string[]
}
const pueblos = [
    {
        nombre: "Alcala de Henares",
        img: "AlcaladeHenares",
        formato: "jpg",
        text: `
        Alcalá de Henares ciudad situada en el este de la Comunidad de Madrid, en La comarca del Corredor del Henares.
        <br><br>Es famosa por su Universidad construida gracias al Cardenal Cisneros en 1499. En 1998 su casco histórico y su Universidad fueron declarados Patrimonio de la Humanidad por la UNESCO en reconocimiento a su condición de primera ciudad universitaria, planificada como tal, que ha existido en el mundo. Destaco por ser un conjunto urbano que se desarrollo a partir de la Edad Media y en el que convivían judíos, musulmanes y cristianos en la tolerancia. En el siglo XVI nace en Alcalá el escritor Miguel de Cervantes un hecho importante para las letras y cultura españolas.
        <br><br>Alcalá tiene numerosos monumentos, museos, palacios, iglesias, monasterios, plazas muy destacables de ser visitadas.
        `,
        imgCount: 2,
        links: [
            'https://www.turismomadrid.es/es/descubre/alcala-de-henares.html',
            'https://www.turismoalcala.es/'
        ]
    },
    {
        nombre: "Alcorcón",
        img: "Alcorcón",
        formato: "jpg",
        text: `
        Alcorcón municipio de la Comunidad de Madrid y pertenece al área metropolitana de la capital de Madrid.
        <br><br>Destacar de Alcorcón su impresionantes Castillos de San José de Valderas, estilo neogótico sajón. En el de mayor tamaño, Castillo grande, se encuentra el Museo Municipal de Arte en Vidrio (MAVA). Otro de los castillos hace de sede de la Universidad Popular, ambos castillos se rodean de estanques y surtidores, se puede visitar también el Parque de los Castillos donde se ubica el Centro de las Artes de la Ciudad de Alcorcón, espacio dedicado a nuevos creadores y el Parque Polvoranca que cuenta con un centro de Educación Ambiental que pertenece a la red de la Comunidad de Madrid.
        `,
        imgCount: 2,
        links: [
            'https://www.turismomadrid.es',
            'https://www.alcorcon.org/'
        ]
    },

    {
        nombre: "Ambite",
        img: "Ambite",
        formato: "jpg",
        text: `
        Ambite municipio de la Comarca de las Vegas de la Comunidad de Madrid, en las proximidades del río Tajuña.
        <br><br>Su patrimonio artístico formado por la Iglesia de Nuestra Señora de la Asunción del siglo XVII, el Palacio del Marqués de Legarda, edificio barroco del siglo XVII, y el Monumento a los Ojos.
        <br><br>Ambite forma parte de la ruta de la vía verde del Tajuña con un recorrido de 49 Km. Esta vía verde sale desde en el municipio de Arganda del rey y va bordeando la vega del río Tajuña.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "https://ambite.es/",
            'http://www.viasverdes.com/itinerarios/itinerario.asp?id=84'
        ]
    },

    {
        nombre: "Aranjuez",
        img: "Aranjuez",
        formato: "jpg",
        text: `
        Aranjuez situado en el extremo sur de la comunidad de Madrid pertenece a la comarca de las vegas.
        <br><br>Su termino municipal forma parte de la zona especial de conservación Vegas, cuestas y páramos del sureste de Madrid, espacio protegido asociado a los ríos Tajo, Jarama, Tajuña y Manzanares, se configuran principalmente a partir de dos zonas de especial protección para las aves: la ZEPA de los Carrizales y Soto de Aranjuez, ocupa el curso del Tajo a su paso por Arnjuez y las vegas del Margen izquierdo, y la segunda zona la ZEPA de los Cortados y Cantiles de los ríos Jarama y Manzanares, que abarcan los paramos y vegas de estos dos ríos ,coincidiendo practicamente con el trazado perteneciente al parque regional del sureste creado en junio del 1994
        <br><br>También se incluyen en la zona especial de conservación espacios naturales como la reserva natural del Carrizal de Villamejor, la reserva del Regajal-Mar de Ontígola, además, en su termino municipal se encuentran 28 árboles singulares de la Comunidad de Madrid.
        <br><br>En 2001 fue declarada Paisaje Cultural Patrimonio de la Humanidad por la UNESCO, dentro de su patrimonio artístico destacar el Palacio Real de Aranjuez construido en 1561 por Felipe II, posteriormente se quemo y Felipe V lo volvió a edificar, en su interior deslumbre la escalera balaustrada de estilo rococó, así como el Salón de los Espejos y la Saleta de Porcelana, alberga cuadros, muebles, relojes, lamparas y esculturas que muestran como era la vida cotidiana de las familia reales.
        <br><br>Pero la mayor joya son sus jardines; El jardín del Principe, es el mas grande y alberga el Museo de Falúas y la Real Casa del Labrador, capricho de Carlos IV y María Luisa de Parma, entre sus estancias destacar el gabinete de Platino recubierto de madera con incrustaciones en oro y platino, la sala de billar, el Salón de bailes y el Salón de María Luisa. El jardín de la Isla, muestra única de jardín renacentista español, fue ordenado por Felipe II. El jardín del Parterre, jardín con diseño ingles data de la época de Fernando VII. El Jardín del Rey y el jardín de Isabel II.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "https://www.aranjuez.es/",
            "https://www.patrimonionacional.es/real-sitio/palacio-real-de-aranjuez",
            "https://www.comunidad.madrid/servicios/urbanismo-medio-ambiente/espacios-protegidos-red-natura-2000"
        ]
    },
]

export default function PueblosMadrid() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [puebloOpened, setPuebloOpened] = useState<Pueblo | undefined>(undefined)
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();

    }, [])


    return <>
        <SectionHero title="Pueblos de Madrid" />
        <Stack px={{ base: 5, md: 20 }} py={10} align="center" >
            <Text >
                La comunidad de Madrid me proporciono una variedad infinita de pueblos y paisajes. Aquí nací y viví, admirando constantemente sus tierras y costumbres, enriqueciendo mi sensibilidad.
                <br /><br />
                En mi primera etapa de pintor que denomino FIGURATIVA, me exprese a través de paisajes de sierras contrastadas; llanuras austeras y montes bajos con cielos únicos por limpios. En los desnudos de mujer, recree pintado sus formas ondulantes como campos, sus sutiles bellas posturas, sugerentes perfumes y calores de abrazos.
                <br /><br />
                Con el tiempo, buscando, me encontré con nuevos mensajes de formas y misterios a través de otros mundos de una segunda etapa que denomino SUBJETIVA. Mis pinturas se muestran ante una figuración intangible con una lectura mas intimista armonizando sueños, cataclismos de sombras, silencios y milagros.
                <br /><br />
                Estas dos etapas empezaron a aburrirme, a sentirme repetitivo por lo que me propuse un desafío para cambiar, haciendo un recorrido por todos los pueblos de Madrid y pintar lo más sugerente de su abstracta personalidad.
                <br /><br />
                Nacen 108 cuadros de pueblos; 54 esbozos figurativos y los otros 54 fueron potenciando el descubrimiento de mi tercera etapa ABSTRACTA, en donde he alcanzado la libertad absoluta con desafíos de mi potencia creativa, abriendo nuevas formas y sugiriendo nuevos mundos, transformando mis vivencias en lenguajes topográficos.
                <br /><br />
                Miguel Pinto (Febrero 2011)
            </Text>
            <SimpleGrid columns={{ base: 2, md: 4 }} w="full" gap={1}>
                {[...pueblos, ...pueblos].map((pueblo: Pueblo) => (
                    <AspectRatio
                        key={pueblo.nombre}
                        bgImage={`${path}/${pueblo?.img}.${pueblo?.formato}`}
                        bgSize="contain"
                        ratio={1.6}
                        w="full"
                        transition="all 0.4s ease-out"
                        zIndex="1"
                        cursor="pointer"
                        _hover={{
                            transform: "scale(1.1)",
                            zIndex: "2"
                        }}
                        onClick={() => {
                            setPuebloOpened(pueblo)
                            onOpen();
                        }}
                    >
                        <Box position="relative">
                            <Box
                                position="absolute"
                                bottom="5px"
                                w="max-content"
                                px={2}
                                py={1}
                                borderRadius={"10px"}
                                bg="brand.primary"
                            >
                                <Text>{pueblo.nombre}</Text>
                            </Box>
                        </Box>
                    </AspectRatio>
                ))}
            </SimpleGrid>
        </Stack >
        <PuebloModal isOpen={isOpen} onClose={onClose} pueblo={puebloOpened} />

    </>
}

export const getStaticProps: GetStaticProps = async (_context) => { return { props: {} } }