import { ComponentStyleConfig } from '@chakra-ui/react'

export const ButtonStyle: ComponentStyleConfig = {
    baseStyle: {
        rounded:'full',
        px:6,
        bgColor:'brand.primary !important',
        _hover :{
            bgColor:'orange.200 !important',
        },
        w:"min-content"
    },
}