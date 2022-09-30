import { extendTheme } from '@chakra-ui/react'
import { ButtonStyle } from './Button'
import { LinkStyle } from './Link'
import { TextStyle } from './Text'

const theme = extendTheme({
    components: {
        Text: TextStyle,
        Button: ButtonStyle,
        Link: LinkStyle,
        Heading: LinkStyle,
    },
})

export default theme