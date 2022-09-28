import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { useDisclosure, Center, Text, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Img, useOutsideClick, keyframes } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { useSwipe } from "../hooks/useSwipe";

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

    const changeImgClass = (animation) => {
        var modalImage = document.getElementById("modal-image");
        modalImage.classList.remove("animate__fadeInRight");
        modalImage.classList.remove("animate__fadeInLeft");
        setTimeout(() => modalImage.classList.add(animation), 0);
    }
    const next = () => {
        if (!isLast) {
            setindex(index + 1);
            changeImgClass("animate__fadeInRight");
        }
    }
    const previous = () => {
        if (!isFirst) {
            var modalImage = document.getElementById("modal-image");
            modalImage.style.opacity = "0";
            setindex(index - 1);
            changeImgClass("animate__fadeInLeft");
        }
    }
    const {
        onTouchStart, onTouchMove, onTouchEnd
    } = useSwipe({ onLeftSwipe: next, onRightSwipe: previous })

    const isFirst = index === 0;
    const isLast = index === images.length - 1;
    const numReferencia = images[index]?.split("/")[images[index]?.split("/").length - 1].split("-")[0]
    return (
        <>
            <Modal onClose={() => { onClose(); close(); }} closeOnOverlayClick={true} size="full" isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent bg="#FFFFFFAA" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                    <ModalCloseButton />
                    <ModalBody onClick={() => { onClose(); close(); }} >
                        <Center
                            h="90vh"
                            maxH="90vh"
                            mb={{ base: 10, md: 20 }}
                        >
                            <Img
                                id="modal-image"
                                className="animate__animated"
                                src={images[index]}
                                onClick={(e) => e.stopPropagation()}
                                alt="Img"
                                onChange={() => console.log("AAA")}
                            />
                            <Text
                                position="absolute"
                                bottom={{ base: 20, md: 10 }}
                                bg="#FFFFFFAA"
                                p={2}
                                borderRadius={2}
                                onClick={(e) => e.stopPropagation()}
                            >
                                Número de refencia: {numReferencia}
                            </Text>
                            <Text
                                position="absolute"
                                bottom={{ base: 20, md: "50%" }}
                                left={5}
                                bg={isFirst ? "gray" : "#FFFFFFAA"}
                                p={2}
                                borderRadius={2}
                                cursor={"pointer"}
                                onClick={(e) => {
                                    previous();
                                    e.stopPropagation()
                                }}
                                w="40px"
                                textAlign="center"
                            >
                                <ArrowBackIcon boxSize={6} />
                            </Text>
                            <Text
                                position="absolute"
                                bottom={{ base: 20, md: "50%" }}
                                right={5}
                                bg={isLast ? "gray" : "#FFFFFFAA"}
                                p={2}
                                borderRadius={2}
                                cursor={"pointer"}
                                onClick={(e) => {
                                    next();
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