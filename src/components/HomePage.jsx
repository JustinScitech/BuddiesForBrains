import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/react.svg';
import { FaSmile } from "react-icons/fa";
import {
    Link,
    Box,
    Container,
    SimpleGrid,
    Text,
    Image,
    Spacer,
    useColorModeValue,
    Flex
} from '@chakra-ui/react';

import { motion, AnimatePresence  } from 'framer-motion';

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

    const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
    

    const testimonials = [
        { name: "Alice", comment: "This club is amazing!" },
        { name: "Bob", comment: "I've learned so much!" },
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [testimonials.length]);
    const slideVariants = {
        enter: { y: "100%", opacity: 0, transition: { ease: "backOut", duration: 0.35 } },
        center: { y: "0%", opacity: 1, transition: { ease: "backOut", duration: 0.5 } },
        exit: { y: "-100%", opacity: 0, transition: { ease: "backIn", duration: 0.35 } }
    };
    
    
    return (
        <Container centerContent mt="20" maxW="full">
            <SimpleGrid columns={[1]} spacing={10} width="full" align="center" justify="space-between" justifyContent="center">
                <section id="home">
                    <AnimatedBox>
                        <Box textAlign="center" mb="8">
                            <Text fontSize="6xl" fontWeight="bold" flex="center">"Buddies for Brain Injuries is the club I’ve been waiting for."</Text>
                        </Box>
                        <Box boxShadow='xl' p="20" bg={useColorModeValue('beige', 'gray.900')} borderRadius="lg" overflow='hidden' minH="25vh">
                            <Text fontSize="2xl">Step into our process: mentors, conquerors of brain injury challenges, step up to share their wisdom, while mentees find solace by signing up for guidance. Our adept team intricately pairs them based on experiences and preferences. The connection sparks through emails and online meetings, crafting a unique support system. In this blend of technology and empathy, we prove that solidarity conquers adversity.</Text>
                            {/* <Image mt="8" src={logo} alt={logo} /> */}
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
                        {/* <Image mt="8" src={logo} alt={logo} /> */}
                    </Box>
                </AnimatedBox>
                <AnimatedBox>
                    <Box textAlign="center" mb="8">
                        <Text fontSize="6xl" fontWeight="bold" flex="center">
                        “From Resilience to Renewal: Forging Connections in Brain Injury Journeys”</Text>
                        <Text fontSize="2xl" fontWeight="light" flex="center">Helping Those In Need.</Text>
                    </Box>
                    <Box boxShadow='xl' p="20" bg={useColorModeValue('beige', 'gray.900')} borderRadius="lg" overflow='hidden' minH="25vh">
                        <Text fontSize="2xl">Stay tuned for more to come!</Text>
                        {/* <Image mt="8" src={logo} alt={logo} /> */}
                    </Box>
                </AnimatedBox>
                <section id="mission">
    <Flex 
        as={motion.div} 
        initial="hidden" 
        animate="visible" 
        variants={fadeIn}
        direction="row" 
        justifyContent="space-between"
        alignItems="stretch"
        mb="8"
        w="100%"
        wrap="no-wrap"
    >
        <Box 
            width="45%" 
            p="6" 
            boxShadow='xl' 
            bg={beige} 
            borderRadius="lg" 
            overflow='hidden'
        >
            <Text fontSize="6xl" fontWeight="bold" mb="6">Our Mission</Text>
            <Text fontSize="2xl" fontWeight="light">
            At our organization, we've woven a tapestry of resilience and empathy, connecting individuals who've triumphed over brain injuries with those currently navigating similar challenges. Through our peer mentorship program, we create a dynamic bridge where stories, experiences, and triumphs flow freely. Imagine a virtual space where understanding and inspiration coalesce, fostering genuine connections that light up the path to recovery. Whether it's a shared journey of perseverance or a beacon of hope in times of uncertainty, our organization thrives on the power of human connection, reminding us that we're never alone in the battle against brain injuries.
            </Text>
        </Box>
        
        <Box width="55%" display="flex" justifyContent="center" alignItems="center">
            <Image src={"https://i.pinimg.com/originals/b4/3d/b7/b43db78f64c8e26fb580bb7f00b66222.gif"} alt="Our Mission Illustration" borderRadius="lg" boxShadow="xl" maxW="100%" />
        </Box>
    </Flex>
</section>
<motion.div initial="hidden" animate="visible" variants={fadeIn}>
    <Box textAlign="center" mb="8">
        <Text fontSize="6xl" fontWeight="bold">Testimonials</Text>
    </Box>
    <Box 
        position="relative" 
        boxShadow='xl' 
        bg={beige} 
        borderRadius="lg" 
        overflow='hidden' 
        width="190vh" 
        height="50vh" 
    >
    <Box 
        position="relative" 
        boxShadow='xl' 
        bg={beige} 
        borderRadius="lg" 
        overflow='hidden' 
        width="40vh" 
        height="40vh" 
    >
        <AnimatePresence wait>
            <motion.div
                key={activeTestimonialIndex}
                initial="enter"
                animate="center"
                exit="exit"
                variants={slideVariants}
                style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
            >
                <Box 
                    display="flex" 
                    flexDirection="column" 
                    alignItems="center" 
                    justifyContent="center" 
                    height="100%" 
                    p="4"
                >
                    <FaSmile size="6em" />
                    <Text fontSize="2xl" fontWeight="bold" mt="4">
                        {testimonials[activeTestimonialIndex].name}
                    </Text>
                    <Text mt="2">
                        "{testimonials[activeTestimonialIndex].comment}"
                    </Text>
                </Box>
            </motion.div>
        </AnimatePresence>
    </Box>
    </Box>
</motion.div>
<Spacer/>
            </SimpleGrid>
        </Container>
    )
}

export default HomePage;
