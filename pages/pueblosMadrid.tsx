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
    // 'Carabaña.jpg', 'Cenicientos.jpg',
    // 'Cercedilla.jpg', 'Ciempozuelos.jpg', 'ColmenarViejo.jpg',
    // 'ColmenardeOreja.jpg', 'Chinchon.jpg', 'Estremera.jpg',
    // 'FuendidueñadelTajo.jpg', 'Getafe.jpg', 'Humanes.jpg',
    // 'Loeches.jpg', 'Madrid.jpg', 'Manzanareselreal.jpg',
    // 'MirafloresdelaSierra.jpg', 'MontejodelaSierra.jpg',
    // 'MoratadeTajuña.jpg', 'Navacerrada.jpg', 'Navalcarnero.jpg',
    // 'NuevoBaztan.jpg', 'PeralesdeTajuña.jpg', 'Quijorna.jpg',
    // 'Rascafria.jpg', 'San-Lorenzo-Escorial.jpg', 'SanAgustindeGuadalix.jpg',
    // 'SanMartinVega.jpg', 'SanMartindeValdeIglesias.jpg', 'Santorcaz.jpg',
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
    {
        nombre: "Carabaña",
        img: "Carabaña",
        formato: "jpg",
        text: `
        Carabaña municipio que forma parte de la comarca de las Vegas de la Comunidad de Madrid. Famosa por su agua, fueron declaradas aguas minero-medicinales, embotellándose para su comercialización.
        <br><br>Lo mas destacado de su patrimonio artístico en la Iglesia de Nuestra Señora de la Asunción del siglo XVI, la Ermita de Santa Lucia y la Ermita de Santa Barbara. Nos podemos encontrar también el Palacio del Virrey, el Palacio de la Plaza España.
        <br><br>Desde esta localidad parte la Vía verde del tren de los 40 días, recorrido de 14 km que termina en el pueblo de Estremera. Esta vía de tren se construyo en el año 1938, durante la guerra Civil en tan solo 40 días, para abastecer a la población de Madrid durante la contienda, entre Torrejón de Ardoz(Madrid) y Tarancón (Cuenca).
        <br><br>También forma parte de otra vía verde, La Vía Verde del Tajuña, con 49Km, partiendo de Arganda y terminando en Ambite.`,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "http://www.xn--ayuntamientocarabaa-d4b.es/",
            "http://www.viasverdes.com"
        ]
    },
    {
        nombre: "Cenicientos",
        img: "Cenicientos",
        formato: "jpg",
        text: `
        Cenicientos población situada en la comarca de la Sierra Oeste de la Comunidad de Madrid. Rodeada de montañas de una gran riqueza natural esta incluida en una zona de Especial Protección de las Aves (ZEPA), denominada Encinares del río Alberche y Río Cofio.
        <br><br>Como muestra de su patrimonio artístico destacamos La Iglesia de San Esteban Protomartir del siglo XV-XVI , la Ermita de Nuestra Señora del Roble del siglo XV y la Piedra Escrita es un monumento megalítico del siglo III ó IV, es una roca de granito de siete metros de altura y nueve de circunferencia, en una de sus caras se aprecian tres figuras humanas.`,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "http://cenicientos.net/",
            "https://www.comunidad.madrid/servicios/urbanismo-medio-ambiente/espacios-protegidos-red-natura-2000"
        ]
    },
    {
        nombre: "Cercedilla",
        img: "Cercedilla",
        formato: "jpg",
        text: `
        Cercedilla población de la Comunidad de Madrid situada en la Comarca de la cuenca de Guadarrama en el corazón del Parque Nacional de la Sierra de Guadarrama, es un hermosos pueblo serrano rodeado de vegetación, y piscinas naturales.
        <br><br>El patrimonio artístico cultural destacar sus puentes y calzada romana, que atraviesa el puerto de Fuenfría. La Iglesia de San Sebastián y la Ermita de Santa María del siglo XVII.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "http://www.cercedilla.es",
            "https://www.parquenacionalsierraguadarrama.es"
        ]
    },
    {
        nombre: "Ciempozuelos",
        img: "Ciempozuelos",
        formato: "jpg",
        text: `
        Ciempozuelos pueblo de la comunidad de Madrid, perteneciente a la comarca de las Vegas e incluido en el Parque Regional del Sureste.
        <br><br>Llamada Ischadia en su época romana, se localizan las Salinas Espartinas, una de las explotaciones de sal mas antiguas de la Península. Una de las principales muestras de su patrimonio artístico en la Iglesia Parroquial de Santa María Magdalena, construida sobre un templo mudéjar en varias etapas. Destacar la Ermita de Nuestra Señora del Consuelo y la plaza de la Constitución del siglo XVI, de tradición castellana renacentista.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "https://www.ayto-ciempozuelos.org",
            "http://www.parqueregionalsureste.org/es/"
        ]
    },
    {
        nombre: "Colmenar Viejo",
        img: "ColmenarViejo",
        formato: "jpg",
        text: `
        Colmenar Viejo Es un municipio situado en la Cuenca Alta del Manzanares, dentro de la comunidad de Madrid. Gran parte de su territorio se encuentra en el Parque Regional de la Cuenca Alta del Manzanares.
        <br><br>Dentro del patrimonio artístico de Colmenar destacar la Basílica de la Asunción de Nuestra Señora es un templo gótico con elementos renacentistas con un impresionante campanario y un magnífico retablo mayor, fue levantada en el siglo XV, bajo el patronazgo de los Mendoza, señores de Colmenar Viejo. La Ermita de la Virgen de los Remedios y las capillas de Santa Ana y San Francisco de Asís. Dentro de su casco histórico señalar su Plaza Mayor y la Plaza de Luis Gutiérrez.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "https://www.colmenarviejo.com/",
            "http://www.parqueregionalcamanzanares.org/"
        ]
    },
    {
        nombre: "Colmenar de Oreja",
        img: "ColmenardeOreja",
        formato: "jpg",
        text: `
        Colmenar Oreja, municipio de la Comarca de las Vegas, al sureste de la Comunidad de Madrid. Situado en la meseta hidrográfica de los ríos Tajo y Tajuña. Forma parte del programa de promoción turística Villas de Madrid.
        <br><br>Su plaza Mayor, una de las mas bellas de la comunidad de Madrid declarada Bien de interés cultural en la categoría de conjunto Histórico. Su iglesia De Santa María la Mayor, fue construida por la Orden de Santiago en el siglo XIII y ampliada durante el siglo XVI no pasando desapercibida por su imponente aire de fortaleza.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "https://aytocdo.com/",
            "https://www.turismomadrid.es/es/portada/10374-villas-de-madrid.html"
        ]
    },
    {
        nombre: "Chinchón",
        img: "Chinchon",
        formato: "jpg",
        text: `
        Chinchón situado al sureste de la Comunidad de Madrid en la comarca de las Vegas. Su casco urbano o fue declarado Conjunto Histórico-Artístico y en 2008 su Plaza Mayor fue declarada la 4º Maravilla de la comunidad de Madrid. En la actualidad la localidad forma parte de la asociación Los pueblos más bonitos de España, siendo la única localidad de la comunidad de Madrid de la asociación. Forma parte del parque regional del sureste. Forma parte del programa de promoción turística Villas de Madrid.
        <br><br>Destacar, sin duda alguna, su Plaza Mayor, ejemplo de arquitectura popular, las primeras casas con soportales y balcones se construyeron en el siglo xv. El castillo de los Condes de Chinchón construido en el siglo XV responde a las características de la arquitectura renacentista.
        <br><br>La Torre del reloj, lo único que quedo en pie de la Iglesia de Ntra Sra de Gracia del siglo XIV, después de la guerra de la independencia. Existe un dicho polular: “Chinchón tiene una torre sin iglesia y una iglesia sin torre”.
        <br><br>Destacar la Iglesia de Nuestra señora de la Asunción, se inicia su construcción en 1534 como capilla adosada al palacio condal. Destacar en el centro del retablo principal el magnifico cuadro de la Asunción de la Virgen, pintado por Francisco de Goya, por encargo de su hermano Camillo, capellán de los condes de Chinchón.
        <br><br>Mencionar, también, el Convento de San Agustín actualmente Parador Nacional de Turismo y el Castillo de Casasola del siglo XV próximo al río Tajuña.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "http://www.ciudad-chinchon.com",
            "http://www.parqueregionalsureste.org/es/",
            "https://www.turismomadrid.es/es/portada/10374-villas-de-madrid.html"
        ]
    },
    {
        nombre: "Estremera",
        img: "Estremera",
        formato: "jpg",
        text: `
        Estremera pueblo perteneciente a la comarca de las Vegas de la comunidad de Madrid.
        <br><br>Estremera muestra un patrimonio artístico de gran valor como la Iglesia de nuestra Señora de los Remedios siglo XVII y las cuevas de Pedro Fernández que data de la Edad de Bronce, formada por unas galería con aproximadamente ocho kilómetros de longitud.
        <br><br>En esta localidad termina la Vía verde del tren de los 40 días, recorrido de 14 km que empieza en el pueblo de Carabaña. Esta via de tren se construyo en el año 1938, durante la guerra Civil en tan solo 40 días, para abastecer a la población de Madrid durante la contienda ,entre Torrejón de Ardoz(Madrid) y Tarancón (Cuenca).  
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "http://www.viasverdes.com",
        ]
    },
    {
        nombre: "FuendidueñadelTajo",
        img: "FuendidueñadelTajo",
        formato: "jpg",
        text: `
        Fuentidueña pueblo de la comunidad de Madrid, sitiado en la Comarca de las Vegas.
        <br><br>Situada en la orilla del río Tajo, la historia de Fuentidueña está relacionada con dos castillos, uno el de Alharilla, desaparecido, pero tuvo gran importancia durante la dominación musulmana y otro el de Santiago que se le conoce como torre de los Piquillos. Destacar la Iglesia de San Andrés, barroca del siglo XVII. Otro ejemplo patrimonial es la Torre del Reloj.
`,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "http://www.fuentiduenadetajo.org/",
        ]
    },
    {
        nombre: "Getafe",
        img: "Getafe",
        formato: "jpg",
        text: `
        Getafe población de la Comunidad de Madrid y pertenece al área metropolitana de la capital de Madrid, forma parte del Parque regional del Sureste, en su término se halla el Cerro de los Ángeles, centro geográfico de la Península Ibérica.
        <br><br>Destacar dentro de su patrimonio artístico la Iglesia Catedral de Santa María Magdalena, construcción renacentista construida en 1549 sobre una iglesia mudéjar del siglo XIV, fue declarado Bien de interés Cultural en 1958. En el Cerro de los Ángeles podemos ver la Ermita de Nuestra Señora de los Ángeles, El sagrado Corazón de Jesús y el convento de las Carmelitas.      
        `,
        imgCount: 2,
        links: [
            "https://www.getafe.es/",
            "https://www.turismomadrid.es",
            "http://www.parqueregionalsureste.org/es/ ",
        ]
    },
    {
        nombre: "Humanes de Madrid",
        img: "Humanes",
        formato: "jpg",
        text: `
        Humanes es una población de la Comunidad de Madrid situada en la Comarca Sur.
        <br><br>El ejemplo más destacado de su patrimonio artístico en la Iglesia Parroquial de Santo Domingo de Guzmán construida entre los siglos XIII y XVIII, parte de ella tubo que ser reconstruida tras la Guerra Civil española.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "http://ayto-humanesdemadrid.es",
        ]
    },
    {
        nombre: "Loeches",
        img: "Loeches",
        formato: "jpg",
        text: `
        Loeches población situada en la comarca de la Cuenca de Henares en el este de la Comunidad de Madrid.
        <br><br>Loeches muy ligada al Conde-Duque de Olivares impulsor del conocido como Convento Grande, el Monasterio de Inmaculada Concepción, que alberga el panteón familiar de sus descendientes, actual Casa de Alba, construido en el siglo XVII. Destacar también la Iglesia de nuestra Señora de Asunción construida en el siglo XVI.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "https://loeches.es/turismo/",
        ]
    },
    {
        nombre: "Madrid",
        img: "Madrid",
        formato: "jpg",
        text: `
        Madrid como núcleo urbano se inicia en el siglo IX promovida por el emir Mohamed I, todavía conservando algunos vestigios de una murralla musulmana, declarada Monumento Histórico-Artístico en 1954.
        <br><br>En 1561, Felipe II marca como sede de la Corte la Villa de Madrid. Actualmente como capital de España, alberga las más importantes instituciones del Estado ya que es sede del gobierno Central.
        <br><br>Con un inmenso patrimonio cultural y artístico, podemos destacar; El Palacio Real, la Biblioteca Nacional, El Templo de Debod, La Plaza Mayor, el Museo del Prado, El Círculo de Bellas Artes, La Puerta de Alcalá, El Parque del Retiro, Las Fuentes la Cibeles y Neptuno, la Catedral de la Almudena, una larga lista lugares y rincones que poder visitar.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "https://www.patrimonionacional.es/",
            "https://www.esmadrid.com",
        ]
    },
    {
        nombre: "Manzanareselreal",
        img: "Manzanareselreal",
        formato: "jpg",
        text: `
        Manzanares El Real población ubicada en la zona centro-norte de la Comunidad de Madrid en la Comarca Cuenca Alta del Manzanares, a los pies de la sierra de Guadarrama y en la orilla del embalse de Santillana. Localidad situada en el Camino de Santiago de Madrid. En su superficie Se encuentra situado en el parque Nacional de Sierra de Guadarrama y el Parque Regional de la Cuenca Alta del Manzanares, se hallan espacios naturales tan significativos como la Pedriza, el Ventisquero de la Condesa donde nace el río Manzanares. Forma parte del programa de promoción turística Villas de Madrid.
        <br><br>Dentro de su patrimonio artístico destacamos el Castillo de los Mendoza construido a final del siglo XV el mejor conservado de la Comunidad de Madrid, incluido en el itinerario turístico de la Ruta de los Castillos y atalayas de la Comunidad de Madrid. Destacar también el castillo Viejo, hoy en ruinas, la iglesia de Nuestra Señora de las Nieves fechada en el siglo XIV bajo la tutela del primer marqués de Santillana y la Ermita de Nuestra Señora de la Peña Sacra del siglo XVI.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "https://manzanareselreal.es/",
            "http://www.parqueregionalcamanzanares.org/",
            "https://www.parquenacionalsierraguadarrama.es",
            "https://www.turismomadrid.es/es/portada/10374-villas-de-madrid.html",
        ]
    },
    {
        nombre: "MirafloresdelaSierra",
        img: "MirafloresdelaSierra",
        formato: "jpg",
        text: `
        Miraflores de la Sierra población de la Comunidad de Madrid ubicada en el extremo norte de en la Comarca de la Cuenca alta del Manzanares. Situado en el entorno del parque Nacional de la Sierra de Guadarrama, Parque regional de la cuenca Alta del Manzanares y zona de protección de aves (ZEPA). Es además Reserva de la Biosfera declara por la UNESCO
        <br><br>Dentro de su patrimonio artístico destacar la Iglesia y la Gruta de Nuestra Señora de Begoña. La iglesia del siglo XV. Otra muestras patrimoniales del municipio es el ayuntamiento y sus numerosas fuentes.   
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "https://www.turismomirafloresdelasierra.es/",
        ]
    },
    {
        nombre: "MontejodelaSierra",
        img: "MontejodelaSierra",
        formato: "jpg",
        text: `
        Montejo de la Sierra población de la Comunidad de Madrid situada en la Comarca de la Sierra Norte
        <br><br>El hayedo de Montejo uno delo bosques más sigulares de la región de Madrid, patrimonio Natural del Humanidad por la UNESCO, forma parte de una candidatura conjunta de Hayedos Europeos.
        <br><br>Destacar del patrimonio artístico de Montejo La iglesia de San Pedro construida en los siglos XVI y XVII, la Ermita de la Soledad del siglo XVI y la Ermita de Nuestra Señora de Nazaret del siglo XIV.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "https://www.montejodelasierra.net/",
        ]
    },
    {
        nombre: "MoratadeTajuña",
        img: "MoratadeTajuña",
        formato: "jpg",
        text: `
        Morata situada al sureste de la Comunidad de Madrid en la comarca de las Vegas, próximo al río Tajuña. Las aguas del río se usan para el riego de su vega por la que discurre, a través de numerosa acequias, también proporciona energía hidráulica a los molinos harineros, por ejemplo el Molino de la Huerta de Angulo, referente turístico de la comarca. El espacio protegido por el parque Regional del Sureste esta dentro de su término municipal
        <br><br>Morata dispone de interesantes ejemplos de patrimonio artístico como la iglesia Parroquial de la Inmaculada Concepción del siglo XVI, la Ermita de la Virgen de la Antigua, La Ermita de la Soledad y de Fátima y la Ermita del Cristo de la Sala.
        <br><br>Forma parte de la Via Verde del Tajuña con 49 km de recorrido partiendo de Arganda y terminando en Ambite.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "https://www.ayuntamientodemorata.es/",
            "http://www.parqueregionalsureste.org/es/",
            "http://www.viasverdes.com",
        ]
    },
    {
        nombre: "Navacerrada",
        img: "Navacerrada",
        formato: "jpg",
        text: `
        Navacerrada población de la Comunidad de Madrid ubicado en la Comarca de la Cuenca de Guadarrama., junto a el embalse del mismo nombre. Forma parte del Camino de Santiago de Madrid
        <br><br>Dentro de su patrimonio artístico destacar la Parroquia de Nuestra Señora de la Natividad del siglo XVI, la Ermita de San Antonio y las Fuentes de San Antonio, del Nogal y de los Ángeles.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "https://www.aytonavacerrada.org/",
        ]
    },
    {
        nombre: "Navalcarnero",
        img: "Navalcarnero",
        formato: "jpg",
        text: `
        Navalcarnero es un municipio del sur de la Comunidad de Madrid enmarcado dentro de la Comarca Sur. Forma parte del programa villas de Madrid
        <br><br>Destacar dentro de su patrimonio artístico la iglesia de Nuestra Señora de la Asunción del siglo XVI, declarada Monumento Histórico artístico Nacional y Bien de Interés Cultural en la categoría de Conjunto Histórico- Artístico es el símbolo más notable del municipio. Tiene también numerosas Ermitas y la plaza de Segovia del siglo XVI, completamente empedrada con pórticos en tres de sus cuatro lados.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "http://www.turismo-navalcarnero.com/navalcarnero/turismo/",
            "https://www.turismomadrid.es/es/portada/10374-villas-de-madrid.html ",
        ]
    },
    {
        nombre: "Nuevo Baztan",
        img: "NuevoBaztan",
        formato: "jpg",
        text: `
        Es un municipio perteneciente a la Comunidad de Madrid situado en la comarca de la Cuenca de Henares. Geográficamente Nuevo Baztán, está situado en la zona Sureste de la Comunidad de Madrid.
        <br><br>El conjunto formado por el Palacio de Juan De Goyeneche y la Iglesia de San Francisco Javier anexa a la edificación y las dos plazas situadas en la parte delantera y trasera recibió la declaración de Monumento Histórico Artístico en el año 1941 . En el año 2000 el conjunto monumental fue catalogado como Bien de Interés Cultural por parte de la Comunidad de Madrid. Forma parte del programa de promoción turística villas de Madrid.
        <br><br>El Palacio de Goyeneche es un edificio de principios del siglo XVIII, que fue levantado en estilo barroco a partir de un diseño del arquitecto José de Churriguera. Era el núcleo central de un complejo industrial, ideado, promovido y desarrollado por el editor, periodista y político Juan de Goyeneche, que posteriormente dio origen al actual municipio de Nuevo Baztán.
        `,
        imgCount: 2,
        links: [
            "http://turismo.ayto-nuevobaztan.es/",
            "https://www.turismomadrid.es/es/portada/10374-villas-de-madrid.html",
            "https://www.turismomadrid.es",
        ]
    },
    {
        nombre: "Perales de Tajuña",
        img: "PeralesdeTajuña",
        formato: "jpg",
        text: `
        Es un municipio del sureste de la Comunidad de Madrid, enmarcado en la comarca de las Vegas.
        <br><br>Es destacable el conjunto de cuevas “Risco de las cuevas” que pudieron ser escavadas en el Neolítico , situadas cerca del margen derecho del Tajuña y declaradas Monumento Nacional en 1931. Se conservan 50 cuevas, donde se encontraron materiales de distintas épocas que están expuestos en el Museo Arqueológico Regional de Alcalá de Henares.
        <br><br>El lugar, tuvo antaño un castillo, del que apenas quedan restos de un torreón. La iglesia parroquial, templo barroco del siglo XVII, está dedicada a Santa María del Castillo, fue construida sobre los cimientos de una anterior iglesia medieval que sirvió de capilla y posteriormente iglesia para la población.
        <br><br>Forma La Vía Verde del Tajuña, con 49Km, partiendo de Arganda y terminando en Ambite.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "https://www.ayto-peralestajuna.org/",
            "http://www.viasverdes.com",
        ]
    },
    {
        nombre: "Quijorna",
        img: "Quijorna",
        formato: "jpg",
        text: `
        Quijorna población ubicada en la zona oeste de la Comunidad de Madrid situada en la comarca Cuenca del Guadarrama. La mitad de su termino municipal esta protegido dentro de la denominada zona de protección para las Aves (ZEPA)
        <br><br>El patrimonio artístico de Quijorna esta formado por la Iglesia de San Juan Evangelista del siglo XV. También podemos visitar un horno de cal que refleja la importancia de la calera municipal.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "http://aytoquijorna.org/nuestro-pueblo/",
            "https://www.comunidad.madrid/servicios/urbanismo-medio-ambiente/espacios-protegidos-red-natura-2000",
        ]
    },
    {
        nombre: "Rascafria",
        img: "Rascafria",
        formato: "jpg",
        text: `
        Rascafría Población situada al noroeste de la Comunidad de Madrid en el Valle del Lozoya en la Comarca de La Sierra Norte. Es el municipio que mas terreno aporta al Parque Nacional de la Sierra de Guadarrama. Forma parte del programa de promoción turística villas de Madrid.
        <br><br>Forma pare de su patrimonio artístico el Monasterio de Santa María del Paular fundada en 1390 regido por la orden de La Cartuja, desde 1954 es una abadía Benedictina. Lo mando construir Enrique II de Castilla. La Iglesia de San Andrés Apóstol del siglo XV.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "https://www.rascafria.org/",
            "https://www.turismomadrid.es/es/portada/10374-villas-de-madrid.html",
        ]
    },
    {
        nombre: "San Lorenzo de elEscorial",
        img: "San-Lorenzo-Escorial",
        formato: "jpg",
        text: `
        Población de la Comunidad de Madrid perteneciente a la Comarca de la Cuenca de Guadarrama.
        <br><br>Sin duda alguna, dentro de su patrimonio artístico-cultural destacar El Monasterio de San Lorenzo de El Escorial en el siglo XVI construido durante el reinado de Felipe II para conmemorar la Batalla de San Quintín, según proyectos de Juan Bautista de Toledo y Juan Herrera. A finales del siglo XVI, fue considerado la Octava Maravilla del Mundo por su tamaño y complejidad. En 1984, la UNESCO declaró el Monasterio y Sitio de El escorial como Patrimonio de la Humanidad, es una de las principales atracciones turísticas de la Comunidad de Madrid.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "https://www.sanlorenzoturismo.es/",
            "https://www.patrimonionacional.es/real-sitio/real-sitio-de-san-lorenzo-de-el-escorial",
        ]
    },
    {
        nombre: "San Agustín de Guadalix",
        img: "SanAgustindeGuadalix",
        formato: "jpg",
        text: `
        San Agustín de Guadalix es una localidad de la Comunidad de Madrid ubicada en la Comarca de la Cuenca Media del Jarama, situada en las estribaciones de la Sierra de Guadarrama y entorno al río Guadalix encontramos espacios de interés natural como el Monte de Moncalvillo, declarado Monte de Utilidad Pública en 1926 y La Laguna de los Patos, parque recreativo con flora y fauna autóctona.
        <br><br>La Iglesia Parroquial de San Agustín es el ejemplo mas destacado del patrimonio artístico de la localidad construido en el siglo XVI.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "https://www.sanagustindelguadalix.net/",
        ]
    },
    {
        nombre: "San Martín de la Vega",
        img: "SanMartinVega",
        formato: "jpg",
        text: `
        San Martín de la Vega es un municipio situado en el Sur de la Comunidad de Madrid, perteneciente a la comarca de las Vegas, bañado por el río Jarama, su termino municipal esta incluido en el ámbito del Parque Regional del Sureste, dado su interés ecológico y medioambiental. En 2002 se abre, el Parque Warner, el parque temático más grande e importante del mundo de los dedicados a la compañía Warner Bros.
        <br><br>Dentro de su patrimonio artístico destaca la Iglesia de la Natividad de nuestra Señora declarada Bien de interés Cultural empezó su construcción en el siglo XVI. Señalar también la cas Palacio de Góquez de Arriba, mandado construir por Felipe II, incluido en el sistema de conjuntos y elementos conexos con el monasterio del Escorial, construcción de aparejo toledano dedicado a la elaboración de vino.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "https://ayto-smv.es/",
            "http://www.parqueregionalsureste.org/es/",
        ]
    },
    {
        nombre: "San Martín de ValdeIglesias",
        img: "SanMartindeValdeIglesias",
        formato: "jpg",
        text: `
        San Martín de Valdeiglesias, pueblo de la Comunidad de Madrid, situado en la comarca de la Sierra Oeste, es conocido por estar a los pies del Embalse de San Juan. Forma parte del programa de promoción turística villas de Madrid.
        <br><br>Su castillo de la Coracera forma parte de la Red de Castillos y declarado Bien de Interés Cultural. Se construyo a principios del siglo XV por Don Álvaro de Luna, valido de Juan II.
        <br><br>La Iglesia de San Martín se empezó a construir en 1634 pero nunca se llego a terminar, solo se construyo una tercera parte de lo proyectado.
        <br><br>De las muchas Iglesias que existieron en la zona, que le dieron el nombre de Valle de Las Iglesias se pueden observar seis: Ermita del Cristo, Ermita del Ecce Homo, Ermita de la Sangre, Ermita de la Salud, Ermita de la Virgen nueva y Ermita del Rosario.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "https://www.sanmartindevaldeiglesias.es/",
            "https://www.turismomadrid.es/es/portada/10374-villas-de-madrid.html",
        ]
    },
    {
        nombre: "Santorcaz",
        img: "Santorcaz",
        formato: "jpg",
        text: `
        Municipio de la comarca de la cuenca de Henares situado dentro de la comunidad de Madrid, muchos declaran que es el municipio más antiguo de la Comunidad de Madrid.
        <br><br>Destacar el Castillo de Torremocha fechado en el siglo XIII, tuvo diferentes usos; defensivo, residencial y cárcel. Junto a las murallas se erige la Iglesia de San Torcuato también del siglo XIII
        <br><br>Su arquitectura urbana mantiene el espíritu tradicional , viviendas, lavadero, las fuentes de la plaza y del Caño Alto.
        `,
        imgCount: 2,
        links: [
            "https://www.turismomadrid.es",
            "http://ayuntamientosantorcaz.com",
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
                            transform: { md: "scale(1.1)" },
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