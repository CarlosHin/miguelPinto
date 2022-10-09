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
    Img
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';


export default function ExposicionesCarousel({ items, speed }) {
    const [slider, setSlider] = React.useState<Slider | null>(null);
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: false,
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
                        },
                        ".slick-list": {
                            overflow: "visible"
                        }

                    }}
                >
                    <Slider {...settings} ref={(slider) => setSlider(slider)}>
                        {items.map((card, index) => (
                            <Img
                                key={index}
                                src={`/img/exposiciones/${card.image}`}
                                border="1px solid #00000044"
                                borderRadius="5px"
                                width="400px !important"
                                cursor="pointer"
                                zIndex={10}
                                transition="all .4s ease-out"
                                _hover={{
                                    transform: "scale(1.1)",
                                    zIndex: 20

                                }}
                            />
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