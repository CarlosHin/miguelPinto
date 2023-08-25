import {
    Img,
    Box,
    Heading,
    Flex,
    Text,
    SimpleGrid,
    useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';

const testimonials = [
    {
        title: "Pueblos de Madrid",
        image: "/img/pueblos1.jpeg",
        content: "La comunidad de Madrid me proporcionó una variedad infinita de pueblos y paisajes. Aquí nací y viví, admirando constantemente sus tierras y costumbres, enriqueciendo mi sensibilidad.",
        link: "pueblosMadrid"
    },
    {
        title: "La cabeza de La Porra",
        image: "/img/porra1.jpeg",
        content: "Buscando un paisaje para pintar y memorizar en un cuadro, me encuentro con un paraje llamado LA PORRA.",
        link: "laPorra"
    },
];

const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
];

interface TestimonialCardProps {
    title: string;
    content: string;
    image: string;
    index: number;
    link: string;
}

function TestimonialCard(props: TestimonialCardProps) {
    const { title, image, content, index, link } = props;
    return (
        <Link key={index} href={link}>
            <Flex
                w="full"
                justify="center"
                className={"wow fadeIn"}
                cursor="pointer"
                transition="all 0.4s"
                _hover={{ transform: "scale(1.05)" }}
            >
                <Flex
                    boxShadow={'lg'}
                    maxW={'1000px'}
                    direction={{ base: 'column-reverse', lg: 'row' }}
                    width={'full'}
                    rounded={'xl'}
                    p={10}
                    justifyContent={'space-between'}
                    position={'relative'}
                    bg={useColorModeValue('white', 'gray.800')}
                    _before={{
                        content: '""',
                        position: 'absolute',
                        zIndex: '-1',
                        height: 'full',
                        maxW: '640px',
                        width: 'full',
                        filter: 'blur(40px)',
                        transform: 'scale(0.98)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        top: 0,
                        left: 0,
                        backgroundImage: backgrounds[index],
                    }}>
                    <Flex
                        direction={'column'}
                        textAlign={'left'}
                        pt={{ md: 5, lg: 0 }}
                    >
                        <Text
                            fontFamily={'Inter'}
                            fontWeight={'medium'}
                            fontSize={'30px'}
                        >
                            {title}
                        </Text>
                        <Text
                            fontFamily={'Inter'}
                            fontWeight={'medium'}
                            fontSize={'20px'}
                        >
                            {content}
                        </Text>
                    </Flex>
                    <Img
                        src={image}
                        height={{ base: '200px', md: "max-content" }}
                        width={{ base: "max-content", md: '400px' }}
                        alignSelf={'center'}
                        borderRadius="10%"
                        m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
                    />
                </Flex>
            </Flex>
        </Link>
    );
}

export default function ObrasDestacadas({ showTitle = true }: { showTitle?: boolean }) {
    return (
        <Flex
            textAlign={'center'}
            pt={10}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}>
            {showTitle &&
                <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
                    <Heading>
                        Obras destacadas
                    </Heading>
                </Box>
            }
            <SimpleGrid
                w="full"
                columns={1}
                spacing={'20'}
                mt={16}>
                {testimonials.map((cardInfo, index) => (
                    <TestimonialCard key={index} {...cardInfo} index={index} />
                ))}
            </SimpleGrid>

        </Flex>
    );
}