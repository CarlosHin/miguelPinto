import SectionHero from "./_components/_SectionHero";
import {
    Stack,
    useBreakpointValue,
    Text,
    Heading,
    Img,
    SimpleGrid,
    Flex
} from '@chakra-ui/react';
import { useEffect } from "react";
import { GetStaticProps } from "next";
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

const Libro = ({ title, subtitle, libro, children }) => {
    return (
        <>
            <Stack py={4}>
                <Heading textAlign="center">
                    {title}
                </Heading>
                <Heading as="h2" fontSize="16px" textAlign="center">{subtitle}</Heading>
            </Stack>
            {children}
            <Flex w="full" justify="center" pt={8}>
                <SimpleGrid maxW="600px" columns={2} gap={2}>
                    <Img src={`/img/poesia/${libro}-portada.png`} h="full" />
                    <Img src={`/img/poesia/${libro}-contraportada.png`} h="full" />
                </SimpleGrid>
            </Flex>
        </>
    )
}
export default function Poesia() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return <>
        <SectionHero title="Poesía" />
        <Stack px={{ base: 5, md: 20 }} py={10} align="center" >
            <Stack maxW="1000px">
                <Text>
                    Los primeros pasos artísticos de Miguel Pinto fueron frecuentando exposiciones, tertulias y encuentros en medios culturales y artísticos. Sus amigos; José Luis Aguado y Angel Crespo son los que le empujan, aplauden para que se exprese con la poesía.
                </Text>
                <Text>
                    CORRETEAR: florilegio de mi adolescencia, son 100 poesías que surgen en distancias de tiempo muy irregular.
                </Text>
                <Text>
                    Un segundo Libro VEREDAS, antología de mi madurez; otros 100 poemas; ayudarán a esclarecer, su trayectoria como poeta. Todos sus poemas están vinculados a su pintura, se complementan, no podría existir la una sin la otra. Ha escrito tres obras de teatro cortas: NEGRURAS, AMAPOLAS y DISFRACES. DISFRACES fue estrenada por un grupo de teatro de Amigos de la Unesco. Estás con el proyecto de un tercer libro de poesía que lleva el título: AGUJEROS; y terminar con su gran obra de teatro; siempre pulimentándola TIERRA DE ALACRANES.
                </Text>

                <Libro
                    title="CORRETEAR Florilegio de mi adolescencia"
                    subtitle="Madrid 2003, dedicado a su padre."
                    libro="corretear"
                >
                    <Text>
                        ”Con una clara sensibilidad de pintor; surgen estos cien poemas a todo lo largo de mi edad adolescente.
                        Sus formas y esencias intimistas, se realizan por impulsos de satisfacciones y angustias;
                        en una constante persecución de mi mismo,
                        por transformar, alcanzar lo que entendía, sentía como perfección.
                        <br /><br />
                        CORRETEAR. Florilegio de mi adolescencia es el título que encontré;
                        que mejor concordaba con la recopilación de estos poemas de temas variados.
                        Al corretear se amontonan criterios, imágenes, sugerencias, sueños y hasta afirmaciones.
                        Al hacer esta selección no he dejado escapar nada que asombrara, motivara mis estados de ánimo.
                        Sus nacimientos surgen en grandes espacios de tiempo, lo que son muchos los estados, por paradas y cambios.
                        Las creaciones de mi adolescencia amontonadas fueron elegidas por su variedad, espontaneidad y frescura;
                        busqué que los poderes de autenticidad fueran obtenidos por vivencias muy directas.
                        Si la lectura de un solo poema puede transformar, sensibilizar, será la recompensa a los esfuerzos de tantas veces desnudarme.”
                    </Text>
                </Libro>
                <Flex h="50px"></Flex>

                <Libro
                    title="VEREDAS Antología de mi madurez"
                    subtitle="Madrid 2005, dedicado a su Mujer."
                    libro="veredas"
                >
                    <Text >
                        “Se produce estos cien poemas a lo largo de veinticinco años; seleccionados sin seguir un determinado tema; considero una compilación antológica de mi edad madura; estado en fase permanente de mirar en el espejo que recuerda mi pasado, sin discutir nunca conmigo mismo lo que pudo haber sido; por ser el principio de estar acabado. Recibo el presente, le vivo, manteniendo con ilusión creativa; trabajando barbechos para siembras del devenir.
                        <br /><br />
                        Elegí el tirulo VEREDAS por descubrir despacio, los espacios alrededor de mi andar; observar el poder de los desarrollos, acontecimientos y silencios. Mi identidad poética, está en la investigación de mi interior, en potenciar el sentir; sugerir hasta descubrir todos los entramados y sus aspectos, con una estética que a su vez es la ética en todo lo que muevo. No me interesó nunca radicalizarme o comulgar con algún grupo; si tengo alguna singularidad característica, se encuentra en el gozo de solitario. Hago un constante esfuerzo por fructificar con claridad; mis insólitas muertes; resurrecciones, mensajes, provocaciones y sueños trato de manifestar; exponer con máxima iluminación.
                        <br /><br />
                        Tengo un pasado de dedicación total a la pintura y no realizaré ninguna servidumbre para su ocultación; muchos de los poemas están dedicados a los colores. Me realizo en poesía por el placer de sentir, confesar las conjeturas de mi existencia, los valores y rasgos diferenciados como curiosos son los que empujan a la necesidad de exteriorizar para compartir”
                    </Text>
                </Libro>
            </Stack>
        </Stack >

    </>
}

export const getStaticProps: GetStaticProps = async (_context) => { return { props: {} } }