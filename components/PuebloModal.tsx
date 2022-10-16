import {
    ModalHeader,
    Modal, ModalOverlay, ModalContent, ModalCloseButton,
    ModalBody, Img,
    Text, SimpleGrid, Box, Link
} from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { Pueblo } from "../pages/pueblosMadrid"
const path = "/img/Pueblos"

export default function PuebloModal(
    {
        pueblo,
        isOpen,

        onClose
    }: {
        pueblo?: Pueblo, isOpen: boolean, onClose: () => void
    }) {
    return (
        <Box >
            <Modal
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
                size="xxl"
            >
                <ModalOverlay
                    bg='blackAlpha.300'
                    backdropFilter='blur(10px) '
                />
                <ModalContent w='90%' >
                    <ModalHeader>{pueblo?.nombre}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
                            <Img src={`${path}/${pueblo?.img}.${pueblo?.formato}`} />
                            <Img src={`${path}/${pueblo?.img}2.${pueblo?.formato}`} />
                        </SimpleGrid>
                        <Text py={4} dangerouslySetInnerHTML={{ __html: pueblo?.text }}>
                        </Text>
                        {pueblo?.links?.map(link => (
                            <>
                                <Link key={link} href={link}>{link}</Link>
                                <br></br>
                            </>
                        ))}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}

