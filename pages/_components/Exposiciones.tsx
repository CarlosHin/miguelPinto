import React from 'react';
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
    Center,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    variableWidth: true,
    speed: 300,
    autoplaySpeed: 5000,

};

export default function Exposiones() {
    const [slider, setSlider] = React.useState<Slider | null>(null);
    const cards = [
        {
            title: 'Morata',
            text: "Aaaaa",
            image: "/img/fig1.jpeg"
        },
        {
            title: 'Madrid',
            text: "Aaaaa",
            image: "/img/abs1.jpeg"
        },
        {
            title: 'Perales',
            text: "Aaaaa",
            image: "/img/porra1.jpeg"
        },
    ];

    return (
        <>
            <Center mt={10} mb={5}>
                <Heading>Exposiciones</Heading>
            </Center>
            <Center pl="20px">

                <Box
                    position={'relative'}
                    height={'full'}
                    width={'full'}
                    sx={{
                        ".slick-slide": {
                            w: { base: "200px !important", md: "fit-content !important" },
                            mr: "10px",
                        }

                    }}
                >
                    {/* CSS files for react-slick */}
                    <link
                        rel="stylesheet"
                        type="text/css"
                        charSet="UTF-8"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                    />
                    {/* Slider */}
                    <Slider {...settings} ref={(slider) => setSlider(slider)}>
                        {cards.map((card, index) => (
                            <Box
                                key={index}
                                height={{ base: "200px", md: '300px' }}
                                w={{ base: "200px !important", md: '400px !important' }}
                                position="relative"
                                backgroundPosition="center"
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                                backgroundImage={`url(${card.image})`}>
                                {/* This is the block you need to change, to customize the caption */}
                                <Container size="container.lg" height="full" position="relative">
                                    <Stack
                                        spacing={2}
                                        w={'full'}
                                        maxW={'lg'}
                                        position="absolute"
                                        bottom="5%"
                                    >
                                        <Heading color="white">
                                            {card.title}
                                        </Heading>
                                        <Text color="white">
                                            {card.text}
                                        </Text>
                                    </Stack>
                                </Container>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Center >

            <Stack direction="row" justify="center" mt={5} >
                <IconButton
                    aria-label="left-arrow"
                    variant="ghost"
                    onClick={() => slider?.slickPrev()}>
                    <BiLeftArrowAlt size="40px" />
                </IconButton>
                {/* Right Icon */}
                <IconButton
                    aria-label="right-arrow"
                    variant="ghost"
                    onClick={() => slider?.slickNext()}>
                    <BiRightArrowAlt size="40px" />
                </IconButton>
            </Stack>
        </>

    );
}