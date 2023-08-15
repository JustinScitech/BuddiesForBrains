import React, { useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Flex, Box, Link, Spacer, Text } from '@chakra-ui/react';
import logo from '../assets/react.svg';

const Navbar = () => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="center"
            wrap="wrap"
            padding="1.5rem"
            bg="beige"
            color="green"
            borderRadius="lg"
            width="90vw"
        >
            <Box>
                <Link href="#" fontSize="2rem"><img src={logo} alt="Logo" style={{ width: '100px', height: '100px' }} className="object-fill" /></Link>
            </Box>

            <Flex fontSize="1.5rem" align="center">
                <Box mx={4}>
                    <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
                </Box>
                <Box mx={4}>
                    <ScrollLink to="mission" smooth={true} duration={500}>Our Mission</ScrollLink>
                </Box>
                <Box mx={4}>
                    <ScrollLink to="team" smooth={true} duration={500}>Our Team</ScrollLink>
                </Box>
                <Box mx={4}>
                    <ScrollLink to="careers" smooth={true} duration={500}>Careers</ScrollLink>
                </Box>
                <Box mx={4}>
                    <ScrollLink to="donate" smooth={true} duration={500}>Donate</ScrollLink>
                </Box>
            </Flex>
        </Flex>
    );
}


export default Navbar;
