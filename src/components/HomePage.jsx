import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/react.svg';
import { FaSmile } from "react-icons/fa";
import BFBIAlpha from "../assets/BuddiesForBrainInjuriesAlphaHealthSciences.jpg"
import BFBImage2 from "../assets/HomePageImg2.jpg";
import BFBImage3 from "../assets/HomepageImg3.jpg";

import {
    Link,
    Box,
    Container,
    SimpleGrid,
    Text,
    Image,
    Spacer,
    useColorModeValue,
    Flex,
    Button
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

    const imageSources = [
        BFBIAlpha,
        BFBImage2,
        BFBImage3,
      ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentImageIndex((currentImageIndex) => (currentImageIndex + 1) % imageSources.length);
        }, 5000);
        return () => clearInterval(intervalId);
      }, []);

    return (
<Container centerContent mt="20" maxW="full">
  <SimpleGrid columns={[1]} spacing={10} width="full" justifyItems="center" alignItems="center">
    <section id="home">
    <AnimatedBox>
                    <Box textAlign="center" mb="8">
                        <Text fontSize="5xl" fontWeight="bold" flex="center">
                        “From Resilience to Renewal: Forging Connections in Brain Injury Journeys”</Text>
                        <Text fontSize="2xl" fontWeight="light" flex="center">Helping Those In Need.</Text>
                    </Box>
                    </AnimatedBox>
      <Box
        as={motion.div}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        p="6"
        borderRadius="lg"
        overflow='hidden'
        boxShadow='xl'
        w="100%"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center" mb="8" bg={useColorModeValue('beige', 'gray.900')}
      >
        <Box w="50%" textAlign="left">
        <Text fontSize="5xl" fontWeight="bold" flex="center">
                        Our latest impact</Text>
          <Text fontSize="2xl" fontWeight="light" textAlign="left">
            In October last year, we partnered up with Eliana Bloomfield from Concussion Box and Dr. Charlotte Anderson from Alpha Health Services to donate concussion care packages to those currently going through concussion rehabilitation.
          </Text>
          <Button mt="4" colorScheme="blue" onClick={() => window.open('https://www.linkedin.com/posts/buddies-for-brain-injuries_co-founders-alexandra-wasti-and-joshua-noronha-activity-7120086825217495042-J5xb?utm_source=share&utm_medium=member_desktop', '_blank')}>
            Learn More
          </Button>
        </Box>
        <Box w="50%" display="flex" justifyContent="center" alignItems="center" maxH="500px" overflow="hidden">
          <Image src={BFBIAlpha} alt="Our Mission Illustration" borderRadius="lg" boxShadow="xl" maxW="100%" maxH="100%" objectFit="cover" />
        </Box>
        
      </Box>
                </section>
                <AnimatedBox>
                    <Box textAlign="center" mb="8">
                        <Text fontSize="6xl" fontWeight="bold" flex="center">
                        Brain Buds</Text>
                    </Box>
                    <Box p="20" boxShadow='xl' bg={useColorModeValue('beige', 'gray.900')} borderRadius="lg" overflow='hidden' minH="25vh">
                        <Text fontSize="2xl">Explore our innovative initiative dedicated to cultivating peer mentorship connections among individuals overcoming diverse brain injuries. Build lasting, meaningful relationships that contribute to rehabilitation and extend a lifetime of support. Click on "Brain Buds" to discover more!</Text>
                    </Box>
                </AnimatedBox>
                <section id="mission">
                <Box
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      p="6"
      borderRadius="lg"
      overflow='hidden'
      boxShadow='xl'
      w="100%"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      mb="8"
      bg={useColorModeValue('beige', 'gray.900')}
    >
      <Box w="50%" display="flex" justifyContent="center" alignItems="center" maxH="500px" overflow="hidden">
        <Image src={imageSources[currentImageIndex]} alt="Our Mission Illustration" borderRadius="lg" boxShadow="xl" maxW="100%" maxH="100%" objectFit="cover" />
      </Box>
      <Box w="50%" textAlign="right">
        <Text fontSize="5xl" fontWeight="bold" flex="center">
          Our Mission
        </Text>
        <Text fontSize="2xl" fontWeight="light" textAlign="right">
        At our organization, we've woven a tapestry of resilience and empathy, connecting individuals who've triumphed over brain injuries with those currently navigating similar challenges. Through our peer mentorship program, we create a dynamic bridge where stories, experiences, and triumphs flow freely. Imagine a virtual space where understanding and inspiration coalesce, fostering genuine connections that light up the path to recovery. Whether it's a shared journey of perseverance or a beacon of hope in times of uncertainty, our organization thrives on the power of human connection, reminding us that we're never alone in the battle against brain injuries.
        </Text>
        <Button mt="4" colorScheme="blue" onClick={() => window.open('https://www.instagram.com/buddies4braininjuries/', '_blank')}>
          Learn More
        </Button>
      </Box>
    </Box>
</section>
<Spacer/>
            </SimpleGrid>
        </Container>
    )
}

export default HomePage;
