import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { useDisclosure, Center, Text, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Img, useOutsideClick, keyframes, Button } from "@chakra-ui/react"
import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react"
import { useSwipe } from "../hooks/useSwipe";

export default function ImageModal({ images, src, open, close }: { images: string[], src: string, open: boolean, close: Function }) {
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
        modalImage.classList.remove("fadeInRight");
        modalImage.classList.remove("fadeInLeft");
        setTimeout(() => modalImage.classList.add(animation), 0);
        modalImage.style.opacity = "1";

    }
    const next = () => {
        if (!isLast) {
            setindex(index + 1);
            changeImgClass("fadeInRight");
        }
    }
    const previous = () => {
        if (!isFirst) {
            var modalImage = document.getElementById("modal-image");
            modalImage.style.opacity = "0";
            setindex(index - 1);
            changeImgClass("fadeInLeft");
        }
    }
    const {
        onTouchStart, onTouchMove, onTouchEnd
    } = useSwipe({ onLeftSwipe: next, onRightSwipe: previous })

    const isFirst = index === 0;
    const isLast = index === images?.length - 1;
    const numReferencia = images[index]?.split("/")[images[index]?.split("/")?.length - 1].split("-")[0]
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
                                className="animated"
                                src={images[index]}
                                onClick={(e) => e.stopPropagation()}
                                sx={{

                                    animationDuration: { base: "0.4s", md: "1s" }
                                }}
                            />
                            <Button
                                position="absolute"
                                bottom={{ base: 20, md: 10 }}
                                p={4}
                                onClick={(e) => e.stopPropagation()}
                            >
                                Número de refencia: {numReferencia}
                            </Button>
                            <Button
                                position="absolute"
                                bottom={{ base: 20, md: "50%" }}
                                left={5}
                                disabled={isFirst}
                                p={2}
                                onClick={(e) => {
                                    previous();
                                    e.stopPropagation()
                                }}
                            >
                                <ArrowBackIcon boxSize={6} />
                            </Button>
                            <Button
                                position="absolute"
                                bottom={{ base: 20, md: "50%" }}
                                right={5}
                                disabled={isLast}
                                p={2}
                                onClick={(e) => {
                                    next();
                                    e.stopPropagation();
                                }}
                            >
                                <ArrowForwardIcon boxSize={6} />

                            </Button>
                        </Center>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

