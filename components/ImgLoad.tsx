import { Img } from "@chakra-ui/react";
import { useState } from "react";

export const ImgLoad = (props) => {
    const {
        src,
        className
    } = props;
    const [loaded, setLoaded] = useState(false);
    return (
        <Img
            className={loaded ? className : ""}
            src={src}
            h="max-content"
            w="full"
            onLoad={() => setLoaded(true)}
        />
    )
}