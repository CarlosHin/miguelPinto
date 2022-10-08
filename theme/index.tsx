import { extendTheme } from '@chakra-ui/react'
import { ButtonStyle } from './Button'
import { LinkStyle } from './Link'
import { TextStyle } from './Text'

const theme = extendTheme({
    colors: {
        brand: {
            primary: "#FEEBC8", //orange.100
            secondary: "#FBD38D", //orange.200
        },
    },
    components: {
        Text: TextStyle,
        Button: ButtonStyle,
        Link: LinkStyle,
        Heading: LinkStyle,
    },
})

export default theme