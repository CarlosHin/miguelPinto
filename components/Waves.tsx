import { Box, useColorModeValue, useTheme } from "@chakra-ui/react";

export default function Waves() {

    const theme = useTheme()
    const color1 = theme.colors.brand?.primary;
    const color2 = theme.colors.brand?.secondary;
    return (
        <Box id="AA" position="absolute" bottom="0px" width="100vw" zIndex={-1}>

            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
                <defs>
                    <linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%">
                        <Box as="stop" offset="0%" stop-color={color1}></Box>
                        <Box as="stop" offset="100%" stop-color={color2}></Box>
                    </linearGradient>
                </defs>
                <path d="M 0,600 C 0,600 0,300 0,300 C 137.46428571428572,308.67857142857144 274.92857142857144,317.35714285714283 387,291 C 499.07142857142856,264.64285714285717 585.75,203.24999999999997 712,224 C 838.25,244.75000000000003 1004.0714285714284,347.6428571428571 1132,374 C 1259.9285714285716,400.3571428571429 1349.9642857142858,350.17857142857144 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0">
                </path>
            </svg>
        </Box>
    )
}
