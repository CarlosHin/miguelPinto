import {
    Box, Img
} from '@chakra-ui/react';
import { useEffect } from "react";
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

const MarqueeImages = ({ srcList }) => (
    <>
        {srcList.map((src, key) => (
            <Img
                key={key}
                alt={'image'}
                w={'200px'}
                h={'150px'}
                mx={5}
                src={src}
            />


        ))}

    </>
)

export const Marquee = ({ srcList, reverse = false, duration }: { srcList: string[], reverse?: boolean, duration: string }) => {
    return (
        <Box className="marquee">
            <Box
                as="ul"
                className={`marquee__content ${reverse ? "marquee__content_reverse" : ""}`}
                sx={{
                    "animation-duration": duration
                }}
            >
                <MarqueeImages
                    srcList={srcList}
                />
            </Box>
            <Box
                as="ul"
                className={`marquee__content ${reverse ? "marquee__content_reverse" : ""}`}
                sx={{
                    "aria-hidden": "true",
                    "animation-duration": duration

                }}
            >
                <MarqueeImages
                    srcList={srcList}
                />
            </Box>
        </Box >
    )
}