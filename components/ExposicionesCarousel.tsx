import React from 'react';
import {
    Box,
    IconButton,
    Stack,
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
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        variableWidth: true,
        speed: speed,
        autoplaySpeed: 8000,

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

                    }}
                >
                    <Slider {...settings} ref={(slider) => setSlider(slider)}>
                        {items.map((card, index) => (
                            <Box
                                key={index}
                                position="relative"
                                cursor="pointer"
                                zIndex={10}
                                transition="all .2s ease-out"
                                _hover={{
                                    transform: "scale(1.02)",
                                    zIndex: 20

                                }}
                                py={5}
                                w={{ base: "250px !important", md: "400px !important" }}

                            >
                                <Box
                                    position="absolute"
                                    top={7}
                                    right={2}
                                    bg="brand.primary"
                                    zIndex={30}
                                    p={2}
                                    borderRadius={10}
                                    fontWeight={600}
                                    fontSize={12}
                                    opacity={0.9}
                                >
                                    {card.date}
                                </Box>
                                <a href={card.href} target="_blank" rel="noreferrer">
                                    <Img
                                        src={`/img/exposiciones/${card.image}`}
                                        border="1px solid #00000044"
                                        borderRadius="5px"
                                        w="full"
                                    />
                                </a>
                            </Box>

                        ))}
                    </Slider>
                </Box>
            </Center >
            {items.length >1 &&
                <>
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
            }
        </>
    );
}