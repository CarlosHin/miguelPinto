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
    // 'ArgandadelRey.jpg',
    // 'BuitragodeLozoya.jpg', 'CadalsodelosVidrios.jpg',
    // 'CampoReal.jpg', 
    'Carabaña.jpg', 'Cenicientos.jpg',
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
    {
        nombre: "Arganda del Rey",
        img: "ArgandadelRey",
        formato: "jpg",
        text: `
        Población de la Comunidad de Madrid pertenece a la Comarca de la Cuenca de Henares casi la mitad de su término municipal se encuentra dentro del Parque Regional del Sureste.
        <br><br>Dentro de su patrimonio histórico- cultural destacar la Iglesia de San Juan Bautista construida a final del siglo XVII donde cuelgan una importante colección de pinturas de los siglos XVII y XVIII.
        <br><br>La Casa del Obispo Sancho Granado data del siglo XVIII, destacar también La Casa del Rey un palacete de final del Siglo XVI y la Ermita de la Soledad edificio barroco del siglo XVII.
        <br><br>En Arganda se inicia la vía verde del Tajuña, finalizando en Ambite, un total de 49 KM bordeando la vega del río Tajuña.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "https://www.ayto-arganda.es",
            "http://www.parqueregionalsureste.org/es/",
            "http://www.viasverdes.com"
        ]
    },
    {
        nombre: "Buitrago de Lozoya",
        img: "BuitragodeLozoya",
        formato: "jpg",
        text: `
        Buitrago población de la Comunidad de Madrid situada en la Comarca Sierra Norte en el Valle Medio del Lozoya.
        <br><br>Buitrago fue declarada en 1993 Conjunto Histórico-Artístico y Bien de Interés Cultural, por su espectacular recinto amurallado de origen árabe y rodeado por el río Lozoya, el mejor conservado de la Comunidad de Madrid. Su Castillo junto a la Iglesia María del Castillo, la Torre del Reloj y sus murallas le dan una aire medieval formando parte del programa de promoción turística Villas de Madrid, y por alzarse con el titulo de mejor rincón en 2015 en el concurso convocado por la Guía Repsol en el que competian 17 municipios turísticos. 
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "https://www.buitrago.org",
            "https://www.turismomadrid.es/es/portada/10374-villas-de-madrid.html"
        ]
    },
    {
        nombre: "Cadalso de los Vidrios",
        img: "CadalsodelosVidrios",
        formato: "jpg",
        text: `
        Cadalso de los vidrios, situado en la comarca de la Sierra Oeste de la Comunidad de Madrid. Su nombre hace referencia a la industria vidriera instalada hasta principios del siglo XX. Esta incluido en una Zona de Especial Protección para las Aves (ZEPA)
        <br><br>Destacar en el patrimonio artístico de Cadalso la Iglesia de Nuestra Señora de la Asunción, construida en 1498 con parte del a muralla árabe de Cadalso,.El Palacio de Villena construido con sillares de piedra den el siglo XV, catalogado como Bien de Interés Cultural. La Casa de los Salvajes o el Casón de los Austrias es un edificio solariego con estilo renacentista y la Fuente de los Álamos de origen musulmán es una antiguo manantial.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "http://www.cadalsodelosvidrios.es/%C3%A1reas-de-gobierno/turismo",
            "https://www.comunidad.madrid/servicios/urbanismo-medio-ambiente/espacios-protegidos-red-natura-2000"
        ]
    },
    {
        nombre: "CampoReal",
        img: "CampoReal",
        formato: "jpg",
        text: `
        Pueblo de la comunidad de Madrid situado en la comarca de la Cuenca de Henares, famoso por sus aceitunas, citadas por Cervantes y consideradas un manjar digno de reyes en la Corte de Felipe II.
        <br><br>Dentro del patrimonio artístico del municipio se encuentra la Iglesia de Santa María del Castillo, declarada Monumento Histórico Artístico Provincial en 1981. Los elementos más antiguos están datados entre los siglos XII y XIII. Otros ejemplos de su arquitectura son; la Ermita de la Virgen de los Remedios, la Ermita de la Virgen de las Angustias y la Ermita del Santisímo Cristo de la Peña.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "http://www.camporeal.es",
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
            <SimpleGrid columns={{ base: 1, md: 4 }} w="full" gap={1}>
                {pueblos.map((pueblo: Pueblo) => (
                    <Box
                        key={pueblo.nombre}
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
                    </Box>
                ))}
            </SimpleGrid>
        </Stack >
        <PuebloModal isOpen={isOpen} onClose={onClose} pueblo={puebloOpened} />

    </>
}

export const getStaticProps: GetStaticProps = async (_context) => { return { props: {} } }