import {
    Avatar,
    Box,
    chakra,
    Heading,
    Flex,
    Text,
    SimpleGrid,
    useColorModeValue,
} from '@chakra-ui/react';

const testimonials = [
    {
        name: 'Brandon P.',
        role: 'Chief Marketing Officer',
        content: "Pueblos de Madrid",
        avatar: "/img/fig1.jpeg"
    },
];

const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
];

interface TestimonialCardProps {
    name: string;
    role: string;
    content: string;
    avatar: string;
    index: number;
}

function TestimonialCard(props: TestimonialCardProps) {
    const { name, role, content, avatar, index } = props;
    return (
        <Flex w="full" justify="center">

            <Flex
                boxShadow={'lg'}
                maxW={'80%'}
                direction={{ base: 'column-reverse', md: 'row' }}
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
                    justifyContent={'space-between'}>
                    <Text
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        fontSize={'30px'}>
                        {content}
                    </Text>
                    <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
                        {name}
                        <chakra.span
                            fontFamily={'Inter'}
                            fontWeight={'medium'}
                            color={'gray.500'}>
                            {' '}
                            - {role}
                        </chakra.span>
                    </chakra.p>
                </Flex>
                <Avatar
                    src={avatar}
                    height={'80px'}
                    width={'80px'}
                    alignSelf={'center'}
                    m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
                />
            </Flex>
        </Flex>

    );
}

export default function ObrasDestacadas() {
    return (
        <Flex
            textAlign={'center'}
            pt={10}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}>
            <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
                <Heading>
                    Obras destacadas
                </Heading>
            </Box>
            <SimpleGrid
                w="full"
                columns={{ base: 1, xl: 2 }}
                spacing={'20'}
                mt={16}>
                {testimonials.map((cardInfo, index) => (
                    <TestimonialCard {...cardInfo} index={index} />
                ))}
            </SimpleGrid>

        </Flex>
    );
}