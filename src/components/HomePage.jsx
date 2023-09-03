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

import { motion } from 'framer-motion';

function AnimatedBox({ children, initialVisible = false }) {
    const boxRef = useRef(null);
    const [isVisible, setIsVisible] = useState(initialVisible);

    const handleScroll = () => {
        let boxTop = boxRef.current ? boxRef.current.offsetTop : 0;
        let difference = window.innerHeight + window.scrollY - boxTop;
        if (difference > 0 && difference < window.innerHeight) {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] } }
    };

    return (
        <motion.div
            ref={boxRef}
            initial={initialVisible ? "visible" : "hidden"}
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
        >
            {children}
        </motion.div>
    );
}



function HomePage() {
    const beige = useColorModeValue('beige', 'gray.900');
    const green = useColorModeValue('green', 'gray.700'); 
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } }
    };
    const slideInFromLeft = {
        hidden: { opacity: 0, x: '-100vw' },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };
    
    

    const iconHover = {
        hover: { scale: 1.2, transition: { type: "spring", duration: 0.3, stiffness: 400, damping: 10} }
      
    };
    
    return (
        <Container centerContent mt="20" maxW="full">
            <SimpleGrid columns={[1]} spacing={10} width="full" align="center" justify="space-between" justifyContent="center">
                <section id="home">
                    <AnimatedBox initialVisible={true}>
                        <Box textAlign="center" mb="8">
                            <Text fontSize="6xl" fontWeight="bold" flex="center">"Buddies for Brain Injuries is the club I’ve been waiting for."</Text>
                        </Box>
                        <Box boxShadow='xl' p="20" bg={useColorModeValue('beige', 'gray.900')} borderRadius="lg" overflow='hidden' minH="25vh">
                            <Text fontSize="2xl">Step into our process: mentors, conquerors of brain injury challenges, step up to share their wisdom, while mentees find solace by signing up for guidance. Our adept team intricately pairs them based on experiences and preferences. The connection sparks through emails and online meetings, crafting a unique support system. In this blend of technology and empathy, we prove that solidarity conquers adversity.</Text>
                            <Image mt="8" src={logo} alt={logo} />
                        </Box>
                    </AnimatedBox>
                </section>
                <AnimatedBox >
                    <Box textAlign="center" mb="8">
                        <Text fontSize="6xl" fontWeight="bold" flex="center">
                        “Lighting up the trail to a speedier recovery journey”</Text>
                        <Text fontSize="2xl" fontWeight="light" flex="center">Lightning mcqueen (2006)</Text>
                    </Box>
                    <Box p="20" boxShadow='xl' bg={useColorModeValue('beige', 'gray.900')} borderRadius="lg" overflow='hidden' minH="25vh">
                        <Text fontSize="2xl">Connecting minds, sharing stories 🧠💚 Join us at Buddies for Brain Injuries – where resilience and empathy come together to guide each other through the journey of recovery. Peer mentorship, one story at a time.</Text>
                        <Image mt="8" src={logo} alt={logo} />
                    </Box>
                </AnimatedBox>
                <AnimatedBox>
                    <Box textAlign="center" mb="8">
                        <Text fontSize="6xl" fontWeight="bold" flex="center">
                        “From Resilience to Renewal: Forging Connections in Brain Injury Journeys”</Text>
                        <Text fontSize="2xl" fontWeight="light" flex="center">Effortlessly organize everything you do online — work, study, hobbies — all in one window with Spaces.</Text>
                    </Box>
                    <Box boxShadow='xl' p="20" bg={useColorModeValue('beige', 'gray.900')} borderRadius="lg" overflow='hidden' minH="25vh">
                        <Text fontSize="2xl">Stay tuned for more to come!</Text>
                        <Image mt="8" src={logo} alt={logo} />
                    </Box>
                </AnimatedBox>
                <section id="mission">
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Box textAlign="center" mb="8">
            <Text fontSize="6xl" fontWeight="bold">Our Mission</Text>
        </Box>
        <Box boxShadow='xl' bg={beige} borderRadius="lg" overflow='hidden' minH="25vh">
        <Text fontSize="2xl" fontWeight="light" flex="center">At our organization, we've woven a tapestry of resilience and empathy, connecting individuals who've triumphed over brain injuries with those currently navigating similar challenges. Through our peer mentorship program, we create a dynamic bridge where stories, experiences, and triumphs flow freely. Imagine a virtual space where understanding and inspiration coalesce, fostering genuine connections that light up the path to recovery. Whether it's a shared journey of perseverance or a beacon of hope in times of uncertainty, our organization thrives on the power of human connection, reminding us that we're never alone in the battle against brain injuries.</Text>
        </Box>
    </motion.div>
</section>

<section id="team">
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Box textAlign="center" mb="8">
            <Text fontSize="6xl" fontWeight="bold">Meet The Team!</Text>
        </Box>
        <Box p="20" boxShadow='xl' bg={green} borderRadius="lg" overflow='hidden' minH="25vh">
            <Text>Information about your team here.</Text>
            <SimpleGrid columns={4} spacing={10}>
                {Array(4).fill().map((_, index) => (
                    <motion.div key={index} variants={slideInFromLeft} initial="hidden" animate="visible">
                        <Box mb="4">
                            <Text>Information about team member {index + 1}.</Text>
                        </Box>
                        <motion.div whileHover="hover" variants={iconHover}>
                            {/* Replace `icon` with your actual icons */}
                            <Box as={'icon' + (index + 1)} w="50px" h="50px" m="auto" /> 
                            <Image mt="8" src={logo} alt={logo} />
                        </motion.div>
                    </motion.div>
                ))}
            </SimpleGrid>
        </Box>
    </motion.div>
</section>

                <section id="careers">
                    <Box p="20" boxShadow='xl' bg={beige} borderRadius="lg" overflow='hidden' minH="25vh">
                        <Text fontSize="2xl" fontWeight="bold" mb={4}>Careers</Text>
                        <Text>Information about career opportunities here.</Text>
                    </Box>
                </section>
                <section id="donate">
                    <Box p="20" boxShadow='xl' bg={green} borderRadius="lg" overflow='hidden' minH="25vh">
                        <Text fontSize="2xl" fontWeight="bold" mb={4}>Donations</Text>
                        <Text>Information donnations.</Text>
                    </Box>
                </section>
            </SimpleGrid>
        </Container>
    )
}

export default HomePage;
