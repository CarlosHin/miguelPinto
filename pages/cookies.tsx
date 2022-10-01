import SectionHero from "./_components/SectionHero";
import {
    Link,
    Stack,
    Text,
} from '@chakra-ui/react';
import { useEffect } from "react";
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null


export default function Cookies() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return <>
        <SectionHero title="Cookies" />
        <Stack px={{ base: 5, md: 20 }} py={10} align="center" >
            <Stack maxW="1000px">
                <Text >
                    Nos reservamos el derecho a modificar esta Política de Cookies en cualquier momento, y en particular, por exigencias legislativas, o para adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos. Se aconseja por tanto a los usuarios que consulten nuestra Política de Cookies de manera periódica.
                    <br /><br />
                    Para cualquier duda relacionada con esta Política de Cookies, por favor, contacta con nosotros en  miguel@miguelpinto.com
                </Text>

                <Text>
                    Política de cookies
                    <br /><br />
                    Les informamos que esta página web puede utilizar cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.
                    <br /><br />
                    Definición y función de las cookies
                    <br />
                    ¿Qué son las cookies?
                    <br />
                    Una cookie es un fichero que se descarga en tu ordenador o terminal al acceder a nuestra página web. Las cookies nos permiten, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
                    <br /><br />
                    ¿Qué tipos de cookies puede utilizar nuestra página web?
                    <br />
                    – Cookies propias: Son aquéllas que enviamos a tu ordenador o terminal desde nuestra página web.
                    <br />
                    – Cookies de sesión: Son un tipo de cookies diseñadas para recabar y almacenar datos mientras accedes a nuestra web.
                    <br /><br />
                    Administración de la cookies Puedes permitir, bloquear o eliminar las cookies instaladas en tu ordenador mediante la configuración de las opciones del navegador instalado en tu ordenador. Por ejemplo puedes encontrar información sobre cómo hacerlo en el caso que uses como navegador:
                    <br /><br />
                    Firefox desde aquí: <Link href="http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we">http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we</Link>
                    <br />Chrome desde aquí: <Link href="http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647">http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647</Link>
                    <br />Explorer desde aquí: <Link href="http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-in-internet-explorer-9">http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-in-internet-explorer-9</Link>
                    <br />Safari desde aquí: <Link href="http://support.apple.com/kb/ph5042">http://support.apple.com/kb/ph5042</Link>
                    <br />Opera desde aquí: <Link href="http://help.opera.com/Windows/11.50/es-ES/cookies.html">http://help.opera.com/Windows/11.50/es-ES/cookies.html</Link>
                </Text>
            </Stack >
        </Stack >

    </>
}
