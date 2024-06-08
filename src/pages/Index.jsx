import { Box, Container, Flex, Heading, Text, VStack, Button, Image, HStack, Link, IconButton } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation */}
      <Flex as="nav" bg="black" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Box>
          <Image src="https://via.placeholder.com/40" alt="Logo" boxSize="40px" />
        </Box>
        <HStack spacing={8}>
          <Link href="#research">Research</Link>
          <Link href="#products">Products</Link>
          <Link href="#safety">Safety</Link>
          <Link href="#company">Company</Link>
        </HStack>
        <Box>
          <IconButton aria-label="Search" icon={<FaSearch />} />
        </Box>
      </Flex>

      {/* Main Banner */}
      <Box bgImage="url('https://via.placeholder.com/1500x500')" bgSize="cover" bgPos="center" color="white" textAlign="center" py={20}>
        <Heading fontSize="4xl">Spring Update</Heading>
        <Text fontSize="xl" mt={4}>Introducing GPT-4.0 and making more capabilities available for free in ChatGPT.</Text>
        <Button mt={6} colorScheme="teal" size="lg">Learn more</Button>
      </Box>

      {/* ChatGPT Section */}
      <Box id="chatgpt" py={10} px={4}>
        <Heading as="h2" size="xl" mb={6}>ChatGPT</Heading>
        <Flex wrap="wrap" spacing={4} justifyContent="space-between">
          <Box bg="gray.100" p={4} borderRadius="md" flexBasis="30%">
            <Image src="https://via.placeholder.com/300" alt="For Everyone" borderRadius="md" />
            <Text mt={2}>Let your imagination run wild</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md" flexBasis="30%">
            <Image src="https://via.placeholder.com/300" alt="For Teams" borderRadius="md" />
            <Text mt={2}>A superassistant for every member of your team</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md" flexBasis="30%">
            <Image src="https://via.placeholder.com/300" alt="For Enterprises" borderRadius="md" />
            <Text mt={2}>Empower your entire workforce with enterprise-grade AI</Text>
          </Box>
        </Flex>
      </Box>

      {/* Research Section */}
      <Box id="research" py={10} px={4}>
        <Heading as="h2" size="xl" mb={6}>Research</Heading>
        <Flex wrap="wrap" spacing={4} justifyContent="space-between">
          <Box bg="gray.100" p={4} borderRadius="md" flexBasis="30%">
            <Image src="https://via.placeholder.com/300" alt="GPT-4.0" borderRadius="md" />
            <Text mt={2}>Hello GPT-4.0</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md" flexBasis="30%">
            <Image src="https://via.placeholder.com/300" alt="Video generation models" borderRadius="md" />
            <Text mt={2}>Video generation models as world simulators</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md" flexBasis="30%">
            <Image src="https://via.placeholder.com/300" alt="Safety & Alignment" borderRadius="md" />
            <Text mt={2}>Building an early warning system for LLM-aided biological threat creation</Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;