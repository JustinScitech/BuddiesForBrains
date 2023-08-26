import React, { useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/buddiesforbrainslogo.png';
import { Flex, Box, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Navbar() {
    const hoverAnimation = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.3
            }
        }
    };

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
                <Link href="#" fontSize="2rem">
                    <img src={logo} alt="Logo" style={{ width: '100px', height: '100px' }} className="object-fill" />
                </Link>
            </Box>

            <Flex fontSize="1.5rem" align="center">
                <MotionBox mx={4} whileHover="hover" variants={hoverAnimation}>
                    <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
                </MotionBox>
                <MotionBox mx={4} whileHover="hover" variants={hoverAnimation}>
                    <ScrollLink to="mission" smooth={true} duration={500}>Our Mission</ScrollLink>
                </MotionBox>
                <MotionBox mx={4} whileHover="hover" variants={hoverAnimation}>
                    <ScrollLink to="team" smooth={true} duration={500}>Our Team</ScrollLink>
                </MotionBox>
                <MotionBox mx={4} whileHover="hover" variants={hoverAnimation}>
                    <ScrollLink to="careers" smooth={true} duration={500}>Careers</ScrollLink>
                </MotionBox>
                <MotionBox mx={4} whileHover="hover" variants={hoverAnimation}>
                    <ScrollLink to="donate" smooth={true} duration={500}>Donate</ScrollLink>
                </MotionBox>
            </Flex>
        </Flex>
    );
}
