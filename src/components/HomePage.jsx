import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/react.svg';
import {
    Link,
    Box,
    Container,
    SimpleGrid,
    Text,
    Image,
    Spacer,
    useColorModeValue,
} from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';

function AnimatedBox({ children, initialVisible = false }) {
    const [scrollY, setScrollY] = useState(0);
    const boxRef = useRef(null);
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    let boxTop = boxRef.current ? boxRef.current.offsetTop : 0;
    let difference = window.innerHeight + scrollY - boxTop;

    const { opacity, scale } = useSpring({
        opacity: difference > 0 && difference < window.innerHeight
            ? 1 - (0.5 * (scrollY / boxTop))
            : initialVisible && scrollY < boxTop ? 1 : 0,
        scale: difference > 0 && difference < window.innerHeight ? 1 : 0.8,
    });

    return (
        <animated.div ref={boxRef} style={{ opacity, scale }}>
            {children}
        </animated.div>
    );
}



function HomePage() {
    const beige = useColorModeValue('beige', 'gray.900');
    const green = useColorModeValue('green', 'gray.700'); // Change this if you have a dark mode green color
    return (
        <Container centerContent mt="20" maxW="full">
            <SimpleGrid columns={[1]} spacing={10} width="full" align="center" justify="space-between" justifyContent="center">
                <section id="home">
                    <AnimatedBox initialVisible={true}>
                        <Box textAlign="center" mb="8">
                            <Text fontSize="6xl" fontWeight="bold" flex="center">"Buddies for Brain Injuries is the club I’ve been waiting for."</Text>
                        </Box>
                        <Box boxShadow='xl' p="20" bg={useColorModeValue('beige', 'gray.900')} borderRadius="lg" overflow='hidden' minH="25vh">
                            <Text fontSize="2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                            <Image mt="8" src={logo} alt={logo} />
                        </Box>
                    </AnimatedBox>
                </section>
                <AnimatedBox >
                    <Box textAlign="center" mb="8">
                        <Text fontSize="6xl" fontWeight="bold" flex="center">
                            Space for the different sides of you.</Text>
                        <Text fontSize="2xl" fontWeight="light" flex="center">Effortlessly organize everything you do online — work, study, hobbies — all in one window with Spaces.</Text>
                    </Box>
                    <Box p="20" boxShadow='xl' bg={useColorModeValue('beige', 'gray.900')} borderRadius="lg" overflow='hidden' minH="25vh">
                        <Text fontSize="2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                        <Image mt="8" src={logo} alt={logo} />
                    </Box>
                </AnimatedBox>
                <AnimatedBox>
                    <Box textAlign="center" mb="8">
                        <Text fontSize="6xl" fontWeight="bold" flex="center">
                            Space for the different sides of you.</Text>
                        <Text fontSize="2xl" fontWeight="light" flex="center">Effortlessly organize everything you do online — work, study, hobbies — all in one window with Spaces.</Text>
                    </Box>
                    <Box boxShadow='xl' p="20" bg={useColorModeValue('beige', 'gray.900')} borderRadius="lg" overflow='hidden' minH="25vh">
                        <Text fontSize="2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                        <Image mt="8" src={logo} alt={logo} />
                    </Box>
                </AnimatedBox>
                <section id="mission">
                    <AnimatedBox>
                        <Box p="20" boxShadow='xl' bg={beige} borderRadius="lg" overflow='hidden' minH="25vh">
                            <Text fontSize="2xl" fontWeight="bold" mb={4}>Our Mission</Text>
                            <Text>Your mission statement or description here.</Text>
                        </Box>
                    </AnimatedBox>
                </section>
                <section id="team">
                    <AnimatedBox>
                        <Box p="20" boxShadow='xl' bg={green} borderRadius="lg" overflow='hidden' minH="25vh">
                            <Text fontSize="2xl" fontWeight="bold" mb={4}>Our Team</Text>
                            <Text>Information about your team here.</Text>
                        </Box>
                    </AnimatedBox>
                </section>
                <section id="careers">
                    <AnimatedBox>
                        <Box p="20" boxShadow='xl' bg={beige} borderRadius="lg" overflow='hidden' minH="25vh">
                            <Text fontSize="2xl" fontWeight="bold" mb={4}>Careers</Text>
                            <Text>Information about career opportunities here.</Text>
                        </Box>
                    </AnimatedBox>
                </section>
                <section id="donate">
                    <AnimatedBox>
                        <Box p="20" boxShadow='xl' bg={green} borderRadius="lg" overflow='hidden' minH="25vh">
                            <Text fontSize="2xl" fontWeight="bold" mb={4}>Donations</Text>
                            <Text>Information donnations.</Text>
                        </Box>
                    </AnimatedBox>
                </section>
            </SimpleGrid>
        </Container>
    )
}

export default HomePage;
