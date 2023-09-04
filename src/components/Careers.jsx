import React, { useState } from 'react';
import { Box, Flex, Text, Button, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import MentorImg from '../assets/Mentors.png';
import MenteesImg from '../assets/Mentees.png';
const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionVStack = motion(VStack);

const roles = [
  { title: "Technical Team", description: "Lead our tech initiatives, work on innovative solutions, and guide the technical team." },
  { title: "Administration Team", description: "Ensure smooth operations and help in decision-making processes." },
  { title: "Outreach team", description: "Bridge connections, reach out to potential partners, and expand our network." },
  { title: "Content Design Team", description: "Create engaging content, both visual and written, to capture our audience's attention." },
  { title: "Social Engagement Team", description: "Boost our online presence and engage with our audience on various platforms." },
  { title: "Fundraising and Awareness Team", description: "Organize campaigns, raise awareness, and gather funds for our initiatives." },
  { title: "Events Team", description: "Plan, organize, and execute memorable events that align with our mission." }
];

export default function Careers() {
  return (
      <Flex width="90vw" height="100vh" direction="row">
          <RoleSection 
              title="Mentor"
              description="Share your knowledge and guide others. Join as a mentor."
              link="https://google-form-link-for-mentors"
              bgImage={MentorImg}
          />
          <RoleSection 
              title="Mentees"
              description="Learn from the best. Become a mentee."
              link="https://google-form-link-for-mentees"
              bgImage={MenteesImg}
          />
      </Flex>
  );
}

function RoleSection({ title, description, link, bgImage }) {
  const [showRoles, setShowRoles] = useState(false);

  return (
      <MotionBox
          flex="1"
          backgroundImage={`url(${bgImage})`}   // Set the background image
          backgroundSize="cover"                // Cover the entire container
          backgroundPosition="center"           // Center the background
          color="black"
          alignItems="center"
          justifyContent="center"
          display="flex"
          flexDirection="column"
          position="relative"

      >
            <Text fontSize="4xl" fontWeight="bold">
                {title}
            </Text>

            <MotionText mt={4}>
                {description}
            </MotionText>

            <Box position="relative" color="black">
                <Button 
                    as="a" 
                    href={link} 
                    variant="outline" 
                    colorScheme="blackAlpha"
                    mt={2}
                    onMouseEnter={() => setShowRoles(true)}
                    onMouseLeave={() => setShowRoles(false)}
                >
                    Become a {title}
                </Button>

                {showRoles && (
                    <MotionVStack
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        position="absolute"
                        top="100%"
                        left="-125%"
                        
                        width="max-content"
                        bg="rgba(0,0,0,0.7)"
                        borderRadius="md"
                        p={4}
                        spacing={4}
                        zIndex={10}
                    >
                        {roles.map((role, index) => (
                            <MotionBox key={index}>
                                <Text fontSize="xl" fontWeight="semibold">{role.title}</Text>
                                <Text>{role.description}</Text>
                            </MotionBox>
                        ))}
                    </MotionVStack>
                )}
            </Box>
        </MotionBox>
    );
}
