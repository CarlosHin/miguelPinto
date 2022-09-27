import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { useDisclosure, Center, Text, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Img, useOutsideClick, keyframes } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"

const animationKeyframes = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

const animation = `${animationKeyframes} 0.4s ease-in-out`;

export function ImageModal({ images, src, open, close }: { images: string[], src: string, open: boolean, close: Function }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [index, setindex] = useState(0)
    useEffect(() => {
        open && onOpen()
        // eslint-disable-next-line 
    }, [open])
    useEffect(() => {
        const indexAux = images.findIndex((el) => el === src)
        setindex(indexAux)
    }, [src, images])
    const changeImgClass = () => {
        const modalImage = document.querySelector('.modal-image');
        modalImage.classList.remove("animated");
        setTimeout(() => modalImage.classList.add("animated"), 0);
    }
    const numReferencia = images[index]?.split("/")[images[index]?.split("/").length - 1].split("-")[0]
    return (
        <>
            <Modal onClose={() => { onClose(); close(); }} closeOnOverlayClick={true} size="full" isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent bg="#FFFFFFAA">
                    <ModalCloseButton />
                    <ModalBody onClick={() => { onClose(); close(); }} >
                        <Center
                            h="90vh"
                            maxH="90vh"
                            mb={{ base: 10, md: 20 }}
                            sx={{
                                ".animated": {
                                    animation: animation
                                }
                            }}
                        >
                            <Img
                                className="modal-image animated"
                                src={images[index]}
                                onClick={(e) => e.stopPropagation()}
                            />
                            <Text
                                position="absolute"
                                bottom={{ base: 10, md: 10 }}
                                bg="#FFFFFFAA"
                                p={2}
                                borderRadius={2}
                                onClick={(e) => e.stopPropagation()}
                            >
                                Número de refencia: {numReferencia}
                            </Text>
                            <Text
                                position="absolute"
                                bottom={{ base: 10, md: "50%" }}
                                left={5}
                                bg="#FFFFFFAA"
                                p={2}
                                borderRadius={2}
                                cursor={"pointer"}
                                onClick={(e) => {
                                    setindex(index - 1)
                                    changeImgClass();
                                    e.stopPropagation()
                                }}
                                w="40px"
                                textAlign="center"
                            >
                                <ArrowBackIcon boxSize={6} />
                            </Text>
                            <Text
                                position="absolute"
                                bottom={{ base: 10, md: "50%" }}
                                right={5}
                                bg="#FFFFFFAA"
                                p={2}
                                borderRadius={2}
                                cursor={"pointer"}
                                onClick={(e) => {
                                    setindex(index + 1);
                                    changeImgClass();
                                    e.stopPropagation();
                                }}
                                w="40px"
                                textAlign="center"
                            >
                                <ArrowForwardIcon boxSize={6} />

                            </Text>
                        </Center>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}