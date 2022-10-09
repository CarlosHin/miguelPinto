import SectionHero from "./_components/_SectionHero";
import {
    Stack,
    Text,
} from '@chakra-ui/react';
import { useEffect } from "react";
import { GetStaticProps } from "next";
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null


export default function Privacidad() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    return <>
        <SectionHero title="Política de privacidad" />
        <Stack px={{ base: 5, md: 20 }} py={10} align="center" >
            <Stack maxW="1000px">
                <Text >
                    En cumplimiento de lo establecido en la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal, así como en el Reglamento General de Protección de Datos (RGPD) (UE) 2016/679 de 25 de mayo de 2016, el Proveedor informa a sus clientes de los siguientes aspectos relativos al tratamiento de sus Datos personales:
                    <br /><br />
                    RESPONSABLE
                    <br /><br />
                    Los datos personales que Ud. nos facilita, a través de los formularios habilitados en nuestra página web, serán incorporados a un fichero denominado “USUARIO”, del que es responsable Miguel Pinto Gallego, con DNI:00517838Q, email:miguelpinto.com .
                    <br /><br />
                    Usted presta su consentimiento para que dichos datos personales sean objeto de tratamiento automatizado para poder prestarle nuestros servicios y con las finalidades detalladas en la presente Política de Privacidad.
                    <br /><br />
                    FINALIDADES
                    <br /><br />
                    La recogida y tratamiento automatizado de los Datos personales que se realiza tiene como finalidad la de atender las solicitudes o peticiones que el usuario realice, a través de los canales de Atención al usuario (formularios de contacto, email…)
                    <br /><br />
                    LEGITIMACION
                    <br /><br />
                    Nos encontramos legitimados para llevar a cabo el tratamiento de los datos personales, en base a que cuando el usuario rellena el formulario de contacto con sus datos y aceptación de la política de privacidad, integrada en los formularios electrónicos de recogida de datos, otorga su consentimiento, inequívoco, libre y revocable a tratar sus datos personales con las finalidades descritas en el presente documento.
                    <br /><br />
                    Los datos personales son facilitados directamente por los Usuarios. En ningún caso se trata de datos especialmente protegidos. Los datos recabados son los mínimos imprescindibles para poder llevar la finalidad con la que se recogen.
                    <br /><br />
                    Existen obligaciones legales que requieren del tratamiento de los datos personales, de acuerdo con los servicios prestados. La base legal para el tratamiento de los datos personales de los Usuarios reside en el Reglamento (UE) 2016/679, de 27 de abril (RGPD).
                    <br /><br />
                    DESTINATARIOS
                    <br /><br />
                    No se cederán los datos personales a terceros, salvo en los casos en que exista una obligación legal para ello
                    <br /><br />
                    DERECHOS DE LOS INTERESADOS
                    <br /><br />
                    En el caso de que el Usuario considere oportuno ejercitar los derechos que le asisten, en concreto los derechos de Acceso, Supresión, Rectificación, Oposición, Portabilidad y Limitación al tratamiento de sus datos, puede contactar con el responsable del fichero, en la siguiente dirección electrónica: Para el ejercicio de estos derechos el Usuario deberá identificarse de forma fehaciente aportando un documento identificativo suficiente (DNI, Pasaporte) e indicar claramente en el email qué derecho quiere ejercer en relación al tratamiento que se hacen de sus datos.
                    <br /><br />
                    DATOS PERSONALES DE TERCEROS
                    <br /><br />
                    En el caso de que nos aporte Datos Personales de terceros, usted se responsabiliza de haber informado y haber obtenido el consentimiento de estos para ser aportados con las finalidades indicadas en los apartados correspondientes de la presente Política de Privacidad y Cookies. Igualmente garantiza que los datos aportados son exactos y actualizados, siendo responsable de cualquier daño o perjuicio, directo o indirecto, que pudiera ocasionarse como consecuencia del incumplimiento de tal obligación.
                    <br /><br />
                    PLAZOS DE CONSERVACION DE LOS DATOS PERSONALES
                    <br /><br />
                    Conservaremos tus datos personales mientras sigas siendo usuario nuestro, ya que los necesitamos para prestarte los servicios de la página.
                    <br /><br />
                    Si tu relación con la página termina, tus datos serán cancelados. No obstante, debemos conservarlos el tiempo necesario para cumplir con diferentes obligaciones legales y por si en algún momento nos fueran solicitados por un juez o tribunal o una autoridad administrativa o para la formulación, ejercicio y defensa de reclamaciones. Durante este tiempo de conservación no utilizaremos tus datos para ninguna otra finalidad diferente a las mencionadas y, una vez que terminen los plazos legales de conservación y los plazos de prescripción de acciones aplicables en cada caso, borraremos tus datos personales de forma definitiva.
                    <br /><br />
                    DATOS DE NAVEGACION
                    <br /><br />
                    Desde el momento en que el visitante accede a nuestro sitio web, su dirección de internet (IP) así como cualquier otra información que envíe su navegador, podría quedar registrada en nuestros servidores. En consecuencia, el usuario deja rastro de la dirección IP y otros datos, de tal forma que cada petición, consulta, visita o llamada a un elemento de un sitio web podría quedar registrada. No obstante, la información es anónima (no identifican el nombre y apellidos del usuario) y se utilizará únicamente para fines internos como la realización de estadísticas, para llevar un control de los accesos al sitio web, y mejorar la experiencia de uso.
                    <br /><br />
                    A través de las cookies se puede almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al Usuario. Para más información consulta la Política de Cookies.
                    <br /><br />
                    SEGURIDAD
                    <br /><br />
                    Garantizamos la seguridad y confidencialidad de los datos facilitados. En aplicación de lo establecido en el Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de diciembre, de protección de datos de carácter personal, la empresa ha adoptado los niveles de seguridad de protección de los datos personales adecuados a la calidad de los datos facilitados por los Usuarios, procurando instalar todos los medios y medidas técnicas de protección a su alcance para evitar su alteración, pérdida, tratamiento o uso no autorizado.
                    <br /><br />
                    ACTUALIZACIÓN DE LA POLÍTICA
                    <br /><br />
                    La presente política ha sido actualizada conforme a las exigencias de la normativa comunitaria de Protección de Datos Personales, el Reglamento (UE) 2016/679 del parlamento Europeo y del consejo de 27 de abril del 2016 (RGPD). Relativo a la protección de datos de las personas físicas en lo que respeta al tratamiento de datos personales y a la libre circulación de estos datos.
                    <br /><br /><br />
                </Text>
            </Stack >
        </Stack>

    </>
}

export const getStaticProps: GetStaticProps = async (_context) => { return { props: {} } }