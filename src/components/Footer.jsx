import React from 'react'
import './animation.css';
import logo from '../assets/buddiesforbrainslogo.png';
import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Link,
    Spacer,
    useColorModeValue,
    Flex,
} from '@chakra-ui/react'


const ListHeader = (props) => <Text fontWeight="bold" {...props} />;

const Footer = () => {
    return (

        <Flex align="center"
            justify="space-between"
            justifyContent="center"
            wrap="wrap">

            <Box
                bg={useColorModeValue('gray.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}>
                <Container as={Stack} maxW={'6xl'} py={10}>
                    <SimpleGrid
                        templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
                        spacing={8}>
                        <Stack spacing={6}>
                            <Box>
                                <img src={logo} alt="Logo" style={{ width: '100px', height: '100px' }} className="object-fill" />
                                <Text fontSize={'sm'}>Buddies for Brain Injuries</Text>
                            </Box>

                        </Stack>
                        
                        <Stack>
                        </Stack>
                        <Stack>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Follow Us</ListHeader>
                            <Box as="a" href={'https://www.instagram.com/buddies4braininjuries/'}>
                                Instagram
                            </Box>
                            <Box as="a" href={'https://www.linkedin.com/company/buddies-for-brain-injuries/'}>
                                LinkedIn
                            </Box>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Contact Us</ListHeader>
                            <Box as="a" href={'mailto:buddies4braininjuries@gmail.com'}>
                                Email
                            </Box>
                        </Stack>
                    </SimpleGrid>
                </Container>
            </Box>
        </Flex>
    )
}

export default Footer;