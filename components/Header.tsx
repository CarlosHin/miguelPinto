import { ReactNode } from 'react';
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Img
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { link } from 'fs';

const Links = [
    { title: 'Biografía', href: "biografia" },
    { title: 'Obra', href: "obra" },
    { title: 'Poesía', href: "poesia" },
    { title: 'Obras destacadas', href: "obrasDestacadas" },
    { title: 'Exposiciones', href: "exposiciones" },
    { title: 'Contacto', href: "contacto" },
];

const NavLink = ({ link }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={link.href}>
        {link.title}
    </Link>
);

export function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg="orange.100" px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        bg="transparent"
                        sx={{
                            _hover: {
                                bg: "transparent"
                            },
                            _active: {
                                bg: "transparent"
                            }
                        }}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Link href="/">
                            <Img src="/img/logo.png" alt="logo" />
                        </Link>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link.title} link={link} />
                            ))}
                        </HStack>
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link.title} link={link} />
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}