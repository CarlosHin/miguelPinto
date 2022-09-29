import React from 'react';
import {
    Box,
    IconButton,
    AspectRatio,
    Stack,
    Heading,
    Text,
    Container,
    Center,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';


export default function ExposicionesCarousel({ items, speed }) {
    const [slider, setSlider] = React.useState<Slider | null>(null);
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
        <>
            <Center pl="20px" >

                <Box
                    position={'relative'}
                    height={'full'}
                    width={'full'}
                    sx={{
                        ".slick-slide": {
                            mr: "10px",
                        }

                    }}
                >
                    <Slider {...settings} ref={(slider) => setSlider(slider)}>
                        {items.map((card, index) => (
                            <AspectRatio
                                key={index}
                                ratio={5 / 3}
                                w={{ base: "300px !important", md: '600px !important' }}
                                position="relative"
                                backgroundPosition="center"
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                                backgroundImage={`url(${card.image})`}>
                                <Container size="container.lg" height="full" position="relative">
                                    <Stack
                                        spacing={0}
                                        w={'full'}
                                        maxW={'lg'}
                                        position="absolute"
                                        bottom={4}
                                        left={4}
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
                            </AspectRatio>
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