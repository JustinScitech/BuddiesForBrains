import React, { useState } from 'react';
import logo from '../assets/buddiesforbrainslogo.png';
import { Flex, Box, Link as ChakraLink, IconButton, Collapse } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);

export default function Navbar() {
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);

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
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            bg="beige"
            color="green"
            borderRadius="lg"
            width="90vw"
        >
            <Box fontSize="1.5rem"
                align="center"
                justify="center"
                wrap="wrap"
                >
                <ChakraLink href="/home">
                    <img src={logo} alt="Logo" style={{ width: '100px', height: '100px' }} className="object-fill" />
                </ChakraLink>
                <text>
                    Buddies For Brain Injuries
                </text>
            </Box>

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                <IconButton 
                  icon={show ? <CloseIcon /> : <HamburgerIcon />} 
                  variant="outline" 
                  aria-label="toggle menu" 
                />
            </Box>
            <Flex
                fontSize="1.5rem"
                align="center"
                justify="center"
                wrap="wrap"
                display={{ md: "flex", base: show ? "flex" : "none" }}
            >
                <NavItems hoverAnimation={hoverAnimation} />
            </Flex>
        </Flex>
    );
}

function NavItems({ hoverAnimation }) {
    return (
        <>
            <NavItem to="/home" text="Home" hoverAnimation={hoverAnimation} />
            <NavItem to="/teampage" text="Our Team" hoverAnimation={hoverAnimation} />
            <NavItem to="/careers" text="Brain Buds" hoverAnimation={hoverAnimation} />
            <NavItem to="/donate" text="Donate" hoverAnimation={hoverAnimation} />
        </>
    );
}

function NavItem({ to, text, hoverAnimation }) {
    return (
        <MotionBox mx={4} whileHover="hover" variants={hoverAnimation}>
            <Link to={to}>{text}</Link>
        </MotionBox>
    );
}
