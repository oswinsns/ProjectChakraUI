import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { color } from "framer-motion";
const Dashboard = () => {

  const boxStyles = {
    border: "1px solid black",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    boxShadow: "md",
    bg: "gray.100",

    p: {
      color: "blue.500",
      m: "10px",
      textAlign: "center",
    },

    ':hover': {
      bg: "gray.200",
      cursor: "pointer",
      p: { color: "black", fontWeight: "bold"},
    }
  };

  return (
    <div>

      <SimpleGrid columns={4} spacing={10} mb="20px" p="5px" minChildWidth={"120px"}>
        <Box bg="tomato" height="80px" borderRadius="5px" boxShadow="md" _hover={{ bg: "red.400", cursor: "pointer" }}></Box>
        <Box bg="blue.500" height="80px" borderRadius="5px" boxShadow="md" _hover={{ bg: "blue.400", cursor: "pointer" }}></Box>
        <Box bg="green.500" height="80px" borderRadius="5px" boxShadow="md" _hover={{ bg: "green.400", cursor: "pointer" }}></Box>
        <Box bg="purple.500" height="80px" borderRadius="5px" boxShadow="md" _hover={{ bg: "purple.400", cursor: "pointer" }}></Box>
      </SimpleGrid>
      <Container>

      <Heading my="20px" p="5px" color="green.600">React Choice</Heading>
      <Box borderBottom="2px solid black" mb="20px">
        <Text fontSize="2xl" fontWeight="bold">Dashboard</Text>
      </Box>

      <Box sx={boxStyles}>
      <Text color = "red">Dashboard</Text>
      </Box>
      </Container>
      </div>
    )
    
};

export default Dashboard;
