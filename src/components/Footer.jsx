import React from 'react'
import './animation.css';
import logo from '../assets/react.svg';
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
                                <Text fontSize={'sm'}>© Buddies for Brain Injuries. All rights reserved</Text>
                            </Box>

                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Product</ListHeader>
                            <Box as="a" href={'#'}>
                                Overview
                            </Box>
                            <Box as="a" href={'#'}>
                                Our Mission
                            </Box>
                            <Box as="a" href={'#'}>
                                Donations
                            </Box>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Company</ListHeader>
                            <Box as="a" href={'#'}>
                                About
                            </Box>
                            <Box as="a" href={'#'}>
                                Careers
                            </Box>
                            <Box as="a" href={'#'}>
                                Contact
                            </Box>
                            <Box as="a" href={'#'}>
                                Partners
                            </Box>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Support</ListHeader>
                            <Box as="a" href={'#'}>
                                Help
                            </Box>
                            <Box as="a" href={'#'}>
                                Terms of Service
                            </Box>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <ListHeader>Follow Us</ListHeader>
                            <Box as="a" href={'#'}>
                                YouTube
                            </Box>
                            <Box as="a" href={'#'}>
                                Twitter
                            </Box>
                            <Box as="a" href={'#'}>
                                Instagram
                            </Box>
                            <Box as="a" href={'#'}>
                                LinkedIn
                            </Box>
                        </Stack>
                    </SimpleGrid>
                </Container>
            </Box>
        </Flex>
    )
}

export default Footer;