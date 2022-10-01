import SectionHero from "./_components/SectionHero";
import {
    Stack,
    Text,
} from '@chakra-ui/react';
import { useEffect } from "react";
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null


export default function Legal() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return <>
        <SectionHero title="Aviso legal" />
        <Stack px={{ base: 5, md: 20 }} py={10} align="center" >
            <Stack maxW="1000px">
                <Text >
                    1.- Objeto.
                    <br /><br />
                    La utilización de este sitio web implica la aceptación por parte del Usuario de las condiciones de uso incluidas en este Aviso Legal.
                    <br /><br />
                    Por otra parte, se advierte que, tanto los contenidos y servicios de esta página web como las propias condiciones de utilización, pueden ser modificados sin notificación previa.
                    <br /><br /><br />
                </Text>

                <Text>
                    2.- Condiciones de utilización.
                    <br /><br />
                    El Usuario se compromete a facilitar datos veraces, exactos y completos sobre su identidad. Además se compromete a mantener actualizados los datos personales que pudieran ser proporcionados, por lo tanto,es el único responsable de las falsedades o inexactitudes que realice.
                    <br /><br />
                    El usuario se obliga a hacer un uso lícito y conforme a las presentes Condiciones Generales de Uso, a No utilizar los servicios del “portal” para la realización de actividades contrarias a las legislación española, a la moral y al orden público, asumiendo por parte del usuario todas las responsabilidades de daños y perjuicios .
                    <br /><br />
                    El usuario no realizara cualquier acto que pueda dañar, inutilizar, sobrecargar, o deteriorar el portal y los servicios y/o impedir el normal uso y utilización por parte de los Usuarios.
                    <br />
                    El usuario no introducirá y/o Utilizar programas de ordenador, datos, archivos defectuosos, virus, código malicioso, equipos informáticos o de telecomunicaciones o cualquier otro, independientemente de su naturaleza que pueda causar daños en el Portal, en cualquiera de los servicios, o en cualesquiera activos (físicos o lógicos) de los sistemas de información de titular del dominio.
                    <br /><br />
                    El usuario no violara los derechos de terceros a la intimidad, la propia imagen, la protección de datos al secreto en las comunicaciones, a la propiedad intelectual e industrial.
                    <br /><br />
                    El usuario no podrá utilizar identidades falsas, suplantar la identidad de otros en la utilización del Portal
                    <br /><br />
                    El usuario no podrá reproducir, distribuir, modificar o copiar el contenido de esta página, salvo que se disponga de la autorización del titular del dominio o esté legalmente autorizado.
                    <br /><br />
                    Los contenidos de la web; textos, imágenes, gráficos o código fuente, están protegidos por derechos de propiedad intelectual e industrial. Tales contenidos no podrán ser reproducidos o transformados sin el permiso previo y explícito del titular. Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial, uso, explotación, distribución y comercialización, requiere en todo caso de la autorización escrita previa por parte del titular
                    <br /><br />
                    El usuario se compromete a no realizar ningún acto en contra de los derechos de propiedad intelectual o industrial del autor.
                    <br /><br />
                    Los litigios que pudieran surgir se regirán únicamente por el derecho español, sometiendose a los juzgados y tribunales competentes de Madrid.
                </Text>
            </Stack >
        </Stack >

    </>
}
