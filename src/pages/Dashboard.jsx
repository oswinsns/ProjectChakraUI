import { Avatar, Box, Card, Progress, SimpleGrid, Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { color } from "framer-motion";
import { taskData } from "../data/dumpy";
import { CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { FiLink, FiMessageCircle, FiPlus } from "react-icons/fi";
import { HStack, Icon } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

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
   <Box w ="full"> 

   <Box> 
    <Heading fontSize ="28px" fontweight = "500" mb ="5px"> Oswin's Wonder Projects</Heading>
    <Text fontSize="15px"> Created by Oswin on September 10</Text>
    <Button leftIcon={<FiPlus />} colorScheme="teal" mt="18px"> New Task </Button>
   </Box>

    {/* <Box bg={{base:"green", md:"blue", lg:"purple"}} h="200px" w= "200px" mb="20px">  </Box> */}

      <SimpleGrid columns={4} spacing={10} mb="20px" p="5px" minChildWidth={"250px"}>

        {/* {taskData.slice(0,4).map((task) => (
          <Box key={task.id} bg={task.tag.bgColor} height="80px" borderRadius="5px" boxShadow="md" _hover={{ bg: "gray.200", cursor: "pointer" }}>
            <Text color={task.tag.color} p="10px" fontWeight="bold">{task.tag.name}</Text>
          </Box>
        ))} */}

        {taskData && taskData.map((task) => (
        // <Box key={task.id} bg={task.tag.bgColor} height="150px" w="200px" borderRadius="5px" boxShadow="md" _hover={{ bg: "gray.200", cursor: "pointer" }}>
        //     <Text color={task.tag.color} p="10px" fontWeight="bold">{task.content}</Text>
        //   </Box>
         <Card key ={task.id}>
            <CardHeader fontWeight ="500" pb="0" flex ="1"> {task.content}</CardHeader>
              <CardBody> 
                <Tag bgColor={task.tag.bgColor} color={task.tag.color} p="5px 10px"
                borderRadius="5px"
                fontSize="12px"> 
                  {task.tag.name}
                </Tag>
                <HStack pt="17px" gap ="10px">
                  {task.assignUsers.map((item, index) => (
                  <Avatar key ={index} name = {item.name} src ={item.avatarImage} size= "xs" showBorder ={true}/>      
              ))}
                {/* <Avatar size="sm" name={task.assignedTo} src={task.avatarUrl} mt="10px" /> */}

                <Box flex="1"> 
                <Text fontSize="13px" textAlign ="right" mt ="-13px" color="gray"> {task.progressPercent} %</Text>
                <Progress mt="10px" value={task.progressPercent} colorScheme="green" borderRadius="5px" />
                </Box>

                </HStack>

              </CardBody>
              <CardFooter justifyContent={"space-between"} p="10px 15px" color ="gray.500" fontSize="14px" borderTop="1px solid lightgray"> 
                <HStack> 
                  <Icon as ={FiMessageCircle}/>
                  <Text> {task.totalComment} Comments</Text>
                </HStack>
                <HStack> 
                  <Icon as ={FiLink}/>
                  <Text> {task.noOfAttachement} Files</Text>
                </HStack>
              </CardFooter>
         </Card>
        )
      
      )}

        <Box bg="tomato" height="80px" borderRadius="5px" boxShadow="md" _hover={{ bg: "red.400", cursor: "pointer" }}></Box>
        <Box bg="blue.500" height="80px" borderRadius="5px" boxShadow="md" _hover={{ bg: "blue.400", cursor: "pointer" }}></Box>
        <Box bg="green.500" height="80px" borderRadius="5px" boxShadow="md" _hover={{ bg: "green.400", cursor: "pointer" }}></Box>
        <Box bg="purple.500" height="80px" borderRadius="5px" boxShadow="md" _hover={{ bg: "purple.400", cursor: "pointer" }}></Box>
      </SimpleGrid>

   </Box>

  );
    
};

export default Dashboard;

{/* <Container> */}
{/* <Heading my="20px" p="5px" color="green.600">React Choice</Heading>
<Box borderBottom="2px solid black" mb="20px">
  <Text fontSize="2xl" fontWeight="bold">Dashboard</Text>
</Box>

<Box sx={boxStyles}>
<Text color = "red">Dashboard</Text>
</Box>
</Container>
</div> */}
{/* <Box h="200px" bg={base: "green.100", md: "blue.100", lg: "purple.100"} mb="20px" display="flex" flexDirection="column" justifyContent="center" alignItems="center" borderRadius="5px" boxShadow="md"> */}