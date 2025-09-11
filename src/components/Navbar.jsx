import { Flex, Heading, IconButton, Text, HStack} from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon } from "@chakra-ui/icons"
import { FiMenu } from "react-icons/fi"

const Navbar = (props) => {

  const {onToggle} = props;

  return (
    // <Flex bg="gray.200" justifyContent={"space-between"} p="10px" flexWrap="wrap" gap="10px"> 
    //     <Box w="100px" h="100px" bg="bisque">1</Box>
    //     <Box w="100px" h="100px" bg="black" flexGrow="3">2</Box>
    //     <Box w="100px" h="100px">3</Box>
    //     <Box w="100px" h="100px">4</Box>
    // </Flex>

    <Flex as="nav" bg="gray.200" justify = {{base:"space-between", lg:"flex-end"}} p="10px" flexWrap="wrap" gap="10px" alignItems={"center"}>

      <HStack display={{base:"flex", lg:"none"}}>
        {/* <Heading as="h1" size="md" color="green.600">Dashboard</Heading> */}
        {/* <IconButton display={{base:"inline-flex", lg:"none"}} aria-label="Open Menu" icon={<AddIcon />} onClick={onToggle} /> */}
         <IconButton 
         variant="ghost"
         aria-label=""
         icon={<FiMenu />}
         onClick={onToggle}/> 
         <Heading as ="h1" fontSize ="30px"> Dashboard</Heading>
      </HStack>


        <Flex>
            <IconButton w="auto" aria-label="Search database" icon={<SearchIcon />} mr="10px">
            </IconButton>
            {/* <IconButton w= "auto" aria-label="Search database" icon={<box-icon name='search' color='green'>S</box-icon>} mr="10px" />
            <IconButton aria-label="Notifications" icon={<box-icon name='bell' color='green'></box-icon>} mr="10px" />
            <IconButton aria-label="User Profile" icon={<box-icon name='user-circle' color='green'></box-icon>} />   */}
        <HStack>
            <Box bg="gray.200" p="5px 10px" borderRadius="5px" ml="10px">
                <Text>EM</Text>
            </Box>
        </HStack>
        </Flex>
    </Flex>
  )
}

export default Navbar

//rafce
// ctrl +P