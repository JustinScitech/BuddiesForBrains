import React from 'react';
import { Flex, Box, Image, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';
import Joshua from '../assets/Execs/Joshua.jpg';
import AlexImg from '../assets/Execs/Alex.jpg';
import JustinImg from '../assets/Execs/justin.jpg';
import LanaImg from '../assets/Execs/Lana.jpg';
import Fares from '../assets/Execs/fares.jpg'
import AlinaImg from '../assets/Execs/Alina.jpg';
import TiffanyImg from '../assets/Execs/Tiffany.jpg';
// import FaresImg from '../assets/Execs/FaresQannam.jpg';
// import ReshImg from '../assets/Execs/Resh.jpg'; 
import AnnaSophiaImg from '../assets/Execs/Anna Sophia.jpg';

const MotionBox = motion(Box); 

const teamMembers = [
    { 
      id: 1,
      name: 'Joshua Noronha',
      role: 'Co-Founder',
      program: 'McMaster Honours Kinesiology II',
      img: Joshua
    },
    { 
      id: 2,
      name: 'Alexandra Wasti',
      role: 'Co-Founder',
      program: 'McMaster Honours Biochemistry II',
      img: AlexImg
    },
    {
      id: 3,
      name: 'Justin Lau',
      role: 'Technical Lead',
      program: 'Waterloo Computer Engineering II',
      img: JustinImg
    },
    {
      id: 4,
      name: 'Lana Atassi',
      role: 'Director of Administration',
      program: 'McMaster Honours Biochemistry II',
      img: LanaImg
    },
    {
      id: 5,
      name: 'Tiffany Yu',
      role: 'Outreach Coordinator',
      program: 'Queens Health Science II',
      img: TiffanyImg
    },
    {
      id: 6,
      name: 'Fares Qannam',
      role: 'Fundraising and Awareness Coordinator',
      program: 'Honours Life Science II',
      img: Fares
    },
    {
      id: 7,
      name: 'Anna Sophia Deaton',
      role: 'Event Coordinator',
      program: 'McMaster Biology Physiology Research Specialization II',
      img: AnnaSophiaImg
    },
    {
      id: 8,
      name: 'Alina Altinbaeva',
      role: 'Social Engagement Coordinator',
      program: 'McMaster Honours Biochemistry II',
      img: AlinaImg
    }
  ];
  

  

  const slideInFromBottom = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 30,
        damping: 20
      }
    }
  };

const bounce = {
  whileHover: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } }
};

const TeamPage = () => {
    return (
        <VStack spacing={8} align="center" width="full">
            <Text fontSize="6xl" fontWeight="bold">Our Team</Text>
            
            <Flex 
                direction="row" 
                wrap="wrap" 
                justifyContent="center" 
                alignItems="center" 
                spacing={4}
            >
                {teamMembers.map(member => (
                    <MotionBox 
                        key={member.id} 
                        m={4} 
                        p={4} 
                        borderRadius="lg" 
                        overflow="hidden" 
                        boxShadow="lg"
                        initial="hidden"
                        animate="visible"
                        align="center"
                        variants={slideInFromBottom}
                        {...bounce}
                    >
                        {member.img ? (
                            <Image 
                                src={member.img} 
                                alt={member.name}
                                borderRadius="50%"
                                w="300px" 
                                h="300px"
                                objectFit="cover"
                            />
                        ) : (
                            <Box as={FaUserCircle} size="300px" borderRadius="50%" background="gray.200" color="white" />
                        )}
                        <Text mt={1} fontSize="xl" fontWeight="bold" textAlign="center">
                            {member.name}
                        </Text>
                        <Text fontSize="medium" fontWeight="light" textAlign="center">
                            {member.role}
                        </Text>
                        <Text fontSize="small" fontWeight="light" textAlign="center">
                            {member.program}
                        </Text>
                    </MotionBox>
                ))}
            </Flex>
        </VStack>
    );
}
  
export default TeamPage;
