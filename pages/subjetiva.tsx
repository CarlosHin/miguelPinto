import { GetStaticProps } from "next";
import React from "react";
import DetalleEpoca from "../components/DetalleEpoca";

export default function Figurativa() {
    return <>
        <DetalleEpoca
            path="/img/Subjetiva/thumbs/"
            pathHQ="/img/Subjetiva/images/"
            title="Época Subjetiva"
            desc="Mi mundo se exterioriza simbolizando las escenas cotidianas con formas y colores. Lo misterioso se descubre por evocaciones de texturas y contrastes. Las respuestas de la vida o la muerte; alegría y la pena, se encuentran en una sutil organización de todas las partes del cuadro que arrastran a una transformación. Mi mirada subjetiva se limpia con un mundo real pero de cosechas poéticas."
        />
    </>
}

export const getStaticProps: GetStaticProps = async (_context) => { return { props: {} } }