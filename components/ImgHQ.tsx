import { Box, Img } from "@chakra-ui/react";
import { useState } from "react";
const isServer = typeof window === 'undefined'

export const ImgHQ = (props) => {
    const {
        img,
        imgHQ
    } = props;
    const [loaded, setLoaded] = useState(false);
    const [loadedHQ, setLoadedHQ] = useState(false);
    const src = loadedHQ ? img : imgHQ;
    return (
        <>
            <Img
                className={loaded ? "img-loaded" : ""}
                src={src}
                h="max-content"
                w="full"
                onLoad={() => setLoaded(true)}
            />
            {loaded && !isServer && < Img
                src={imgHQ}
                display="none !important"
                onLoad={() => setLoadedHQ(true)}
            />}
        </>
    )
}