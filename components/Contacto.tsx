import {
    Container,
    Box,
    Heading,
    Button,
    VStack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Checkbox,
    Link,
    useToast
} from '@chakra-ui/react';
import {
    MdOutlineEmail,
} from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { useState } from 'react';
import axios from 'axios';
import qs from 'qs';

export default function Contacto() {
    const toast = useToast()
    const [invalidInputs, setInvalidInputs] = useState({
        name: false,
        email: false,
        message: false,
    });
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [checkbox, setCheckbox] = useState(false);


    const submit = async () => {
        setInvalidInputs({
            ...invalidInputs,
            name: name === "",
            email: email === "",
            message: message === "",
        })
        if ([name, email, message].includes("")) return;
        if (!checkbox) {
            toast({
                title: 'Error',
                description: "Tienes que aceptar la política de privacidad",
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
            return;
        }
        const body = { nombre: name, email: email, msg: message }
        axios.post(`https://www.carlosh.es/recibirMensajeMiguelPinto.php`, qs.stringify(body))
            .then(res => {
                if (res.data === 1) {
                    toast({
                        title: 'Gracias ' + name,
                        description: "Mensaje enviado con éxito",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    });
                } else {
                    toast({
                        title: 'Error',
                        description: "Error al enviar mensaje",
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    });
                }
            })
    }
    return (
        <Container bg="brand.primary" maxW="full" mt={0} centerContent overflow="hidden" px={4} py={4}>
            <Box
                bg="orange.200"
                color="white"
                borderRadius="lg"
                w={{ base: "340px", sm: "800px" }}
                maxW="full"
                m={{ sm: 4, md: 16, lg: 10 }}
                p={{ sm: 5, md: 5, lg: 16 }}>
                <Box p={4}>
                    <Box>
                        <Heading>Contacto</Heading>
                    </Box>
                    <Box bg="white" borderRadius="lg" py={2} my={4}>
                        <Box m={8} color="#0B0E3F">
                            <VStack spacing={5}>
                                <FormControl id="name">
                                    <FormLabel>Nombre</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <InputLeftElement
                                            pointerEvents="none"
                                        >
                                            <BsPerson color="gray.800" />
                                        </InputLeftElement>
                                        <Input
                                            isInvalid={invalidInputs.name}
                                            type="text"
                                            size="md"
                                            onChange={(e) => {
                                                setInvalidInputs({
                                                    ...invalidInputs,
                                                    name: false
                                                })
                                                setName(e.target.value)
                                            }}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="email">
                                    <FormLabel>Email</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <InputLeftElement
                                            pointerEvents="none"
                                        >
                                            <MdOutlineEmail color="gray.800" />
                                        </InputLeftElement>
                                        <Input
                                            isInvalid={invalidInputs.email}
                                            type="text"
                                            size="md"
                                            onChange={(e) => {
                                                setInvalidInputs({
                                                    ...invalidInputs,
                                                    email: false
                                                })
                                                setEmail(e.target.value)
                                            }}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="message">
                                    <FormLabel>Mensaje</FormLabel>
                                    <Textarea
                                        borderColor="gray.300"
                                        _hover={{
                                            borderRadius: 'gray.300',
                                        }}
                                        placeholder="Mensaje"
                                        isInvalid={invalidInputs.message}
                                        onChange={(e) => {
                                            setInvalidInputs({
                                                ...invalidInputs,
                                                message: false
                                            })
                                            setMessage(e.target.value)
                                        }}
                                    />
                                </FormControl>
                                <FormControl id="politica-privacidad">
                                    <Checkbox
                                        onChange={(e) => {
                                            setCheckbox(!checkbox)
                                        }}
                                    >
                                        Acepto la <Link href="privacidad">política de privacidad</Link>
                                    </Checkbox>
                                </FormControl>
                                <FormControl id="submit">
                                    <Button
                                        variant="solid"
                                        bg="#0D74FF"
                                        _hover={{}}
                                        onClick={submit}
                                    >
                                        Enviar
                                    </Button>
                                </FormControl>
                            </VStack>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}