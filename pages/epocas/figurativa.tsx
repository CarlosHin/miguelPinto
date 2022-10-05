import { GetStaticProps } from "next";
import React from "react";
import DetalleEpoca from "./_components/DetalleEpoca";

export default function Figurativa() {
    return <>
        <DetalleEpoca
            path="/img/Figurativa/thumbs/"
            pathHQ="/img/Figurativa/images/"
            title="Época Figurativa"
            desc="Me expreso con temas de tipos y paisajes Castellanos en estructuras muy delimitadas y sobrias con fuerte colorido neofauve. Las formas se encuentran o alejan, para formar una topografía de soledades y movimientos. Los espacios se cierran en geometrías para producir más fuerza en los ambientes y no tenga lugar el engaño. Los paisajes tienen alma depositada en los equilibrios de sus cielos; limpios y totales."
        />
    </>
}

export const getStaticProps: GetStaticProps = async (_context) => { return { props: {} } }