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


export default function Exposiones() {
    const [slider, setSlider] = React.useState<Slider | null>(null);
    const cards = [
        {
            title: 'Morata',
            text: "Descripción exposición",
            image: "/img/pueblos1.jpeg",
            date: "Julio 2021"
        },
        {
            title: 'Madrid',
            text: "Descripción exposición",
            image: "/img/abs1.jpeg",
            date: "Septiembre 2021"

        },
        {
            title: 'Perales',
            text: "Descripción exposición",
            image: "/img/porra1.jpeg",
            date: "Noviembre 2022"
        },
        {
            title: 'Valdelaguna',
            text: "Descripción exposición",
            image: "/img/fig1.jpeg",
            date: "Mayo 2021"
        },
    ];
    const speed = useBreakpointValue({ base: 500, md: 2000 })

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        variableWidth: true,
        speed: speed,
        autoplaySpeed: 5000,

    };

    return (
        <Box className={"wow fadeIn"}>
            <Center mt={10} mb={5}>
                <Heading>Exposiciones</Heading>
            </Center>
            <Center pl="20px" >

                <Box
                    position={'relative'}
                    height={'full'}
                    width={'full'}
                    sx={{
                        ".slick-slide": {
                            w: { base: "300px !important", md: "fit-content !important" },
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
                                height={{ base: "250px", md: '300px' }}
                                w={{ base: "300px !important", md: '400px !important' }}
                                position="relative"
                                backgroundPosition="center"
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                                backgroundImage={`url(${card.image})`}>
                                {/* This is the block you need to change, to customize the caption */}
                                <Container size="container.lg" height="full" position="relative">
                                    <Stack
                                        spacing={0}
                                        w={'full'}
                                        maxW={'lg'}
                                        position="absolute"
                                        bottom="5%"
                                    >
                                        <Text color="white" border="1px solid white" w="max-content" py="1px" px={2} bg="#00000040">
                                            {card.date}
                                        </Text>
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
        </Box>

    );
}