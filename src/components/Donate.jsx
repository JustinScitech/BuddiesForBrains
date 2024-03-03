import React from 'react';
import {
    Box, Flex, Text, Button, VStack, Heading,
} from '@chakra-ui/react';
import { FaGift } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

export default function Donations() {
    return (
        <Flex
            width="90vw"
            height="100vh"
            alignItems="center"
            justifyContent="center"
            bgGradient="linear(to-b, beige, white)"
        >
            <VStack
                p={8}
                spacing={6}
                bg="white"
                borderRadius="xl"
                boxShadow="xl"
            >
                <MotionBox
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}>
                    <Box as={FaGift} boxSize={12} color="green.400" />
                </MotionBox>

                <MotionBox
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}>
                    <Heading>Support Our Cause</Heading>
                </MotionBox>

                <MotionBox
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                maxWidth="800px"
                w="100%">
                    <Text>If you're considering a more impactful contribution, you can click the link to donate funds to Brain Injury Canada. Your donation will assist in offering support and care to those unable to afford it, while also contributing to research that advances our understanding of concussions.</Text>
                </MotionBox>
                <MotionButton
                    as="a"
                    href="https://braininjurycanada.ca/en/donate/"
                    colorScheme="green"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    Donate Now
                </MotionButton>
            </VStack>
        </Flex>
    );
}
