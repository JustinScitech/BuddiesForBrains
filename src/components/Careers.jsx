import React, { useState, useEffect, useRef} from 'react';
import {     Link,
    Box,
    Container,
    SimpleGrid,
    Text,
    Image,
    Spacer,
    useColorModeValue,
    Flex,
    VStack,
    Button} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import BrainBudsImg from "../assets/BrainBuds.jpg";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionVStack = motion(VStack);
const MotionButton = motion(Button);
const roles = [
  { title: "Technical Team", description: "Lead our tech initiatives, work on innovative solutions, and guide the technical team." },
  { title: "Administration Team", description: "Ensure smooth operations and help in decision-making processes." },
  { title: "Outreach team", description: "Bridge connections, reach out to potential partners, and expand our network." },
  { title: "Content Design Team", description: "Create engaging content, both visual and written, to capture our audience's attention." },
  { title: "Social Engagement Team", description: "Boost our online presence and engage with our audience on various platforms." },
  { title: "Fundraising and Awareness Team", description: "Organize campaigns, raise awareness, and gather funds for our initiatives." },
  { title: "Events Team", description: "Plan, organize, and execute memorable events that align with our mission." }
];

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

export default function Careers() {
  return (
    <Container centerContent mt="20" maxW="full">
    <SimpleGrid columns={[1]} spacing={10} width="full" justifyItems="center" alignItems="center">
      <section id="home">
          <AnimatedBox >
                    <Box textAlign="center" mb="8">
                        <Text fontSize="6xl" fontWeight="bold" flex="center">
                        Become a brain bud today</Text>
                    </Box>
                </AnimatedBox>
                <AnimatedBox mb="8">
                    <Box textAlign="center" mb="8">
                        <Text fontSize="4xl" fontWeight="bold" flex="center">
                        Waittt…. What is a brain bud?</Text>
                    </Box>
                    <Box p="20" boxShadow='xl' bg={useColorModeValue('beige', 'gray.900')} borderRadius="lg" overflow='hidden' minH="25vh" mb="8">
                        <Text fontSize="2xl">In our vibrant community, your Brain Bud can be anyone – a friend, a fellow enthusiast, or someone who simply enjoys exploring the world of ideas. The heart of this initiative is to extend a helping hand, especially during challenging times like recovering from concussions. Your Brain Bud is there to provide support, share experiences, and lend a friendly ear when you need it most. This isn't just about overcoming obstacles; it's about forging meaningful connections and growing together.</Text>
                    </Box>
                </AnimatedBox>
                <AnimatedBox mb="8">
                <Box textAlign="center" mb="8">
  <Flex align="center" justify="center" direction={{ base: "column", md: "row" }}>
    <Image src={BrainBudsImg} alt="Our Mission Illustration" borderRadius="lg" maxW={{ base: "100%", md: "50%" }} maxH="100%" objectFit="cover" />
    <Box textAlign={{ base: "center", md: "left" }} ml={{ md: 4 }}>
      <Text fontSize="4xl" fontWeight="bold">
        Roles and responsibilities of a Brain Bud
      </Text>
    </Box>
  </Flex>
</Box>
                    
                    <Box mb="8" p="20" boxShadow='xl' bg={useColorModeValue('beige', 'gray.900')} borderRadius="lg" overflow='hidden' minH="25vh">
                        <Text fontSize="2xl">Send an email to your brain bud at a minimum of once a month. These emails can be anything from simple check-ins to casual conversations or discussions about available resources. The options are limitless! In the future, we will be hosting events and you and your brain bud are more than welcome to attend! Complete the form below, and we'll promptly share more details. Any queries? Don't hesitate to reach out to us!</Text>
                    </Box>
                </AnimatedBox>
                <MotionButton
                    as="a"
                    href="https://forms.gle/2yrBq6KYMJiWSfyWA"
                    colorScheme="green"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    minWidth={500}
                    minHeight={70} fontSize="2xl" fontWeight="bold"
                >
                    Join today!
                </MotionButton>
                </section>
<Spacer/>
</SimpleGrid>
</Container>
  );
}