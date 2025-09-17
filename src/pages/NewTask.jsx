    // const NewTask = () => {
    //   return <div>NewTask</div>;
    // };

    import { Box, Button, Heading, Input, Text, Textarea, FormControl, FormLabel, Select, VStack, FormHelperText, Checkbox } from "@chakra-ui/react";
    import { FiPlus } from "react-icons/fi";
import { Form } from "react-router-dom";


    const NewTask = () => {
      return (
        <Box maxW="600px" mx="auto" mt="10"> 
        <form action="/new-task" method ="">
          <FormControl isRequired mb="20px">
            <FormLabel htmlFor="title" fontWeight="bold" mb="5px"> Task Title </FormLabel>
            <Input name ="taskName" type ="text" id="title" placeholder="Enter task title" mb="15px" />
            <FormHelperText mb="10px"> Provide a Descriptive Task Name </FormHelperText>

          </FormControl>

          <FormControl mb ="30px">

            <FormLabel htmlFor="description" fontWeight="bold" mb="5px"> Task Description </FormLabel>
            <Textarea name ="description" id="description" placeholder="Enter task description" mb="15px" minH= "200px"/>
            <FormHelperText mb="10px"> A detailed description of the task </FormHelperText>

          </FormControl>

           <FormControl mb ="30px" display={"flex"} alignItems="center">
             <Checkbox name ="isPriority" colorScheme="teal" size= "lg" bg="white">Priority</Checkbox>
              <FormLabel mb ="0" ml ="10px" > Make a Priority Task</FormLabel>
           </FormControl>

              <FormControl mb ="30px">
                 <FormLabel mb ="0" ml ="10px" > Project </FormLabel>
             <Select placeholder="Select Task Category" bg="white" name="category" bgColor ="white">
              <option value="">Oswin's Project</option>
              <option value="">Collaboration Project</option>
             </Select>
              <FormLabel mb ="0" ml ="10px" > Make a Priority Task</FormLabel>
           </FormControl>

           <Button type="submit" colorScheme="teal" leftIcon={<FiPlus />} > Submit </Button>
        </form>
        
        </Box>
          )
          }
export default NewTask;
