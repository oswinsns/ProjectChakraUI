import { Flex, Heading, IconButton, Text, HStack} from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon } from "@chakra-ui/icons"

const Navbar = ({onToggle}) => {
  return (
    // <Flex bg="gray.200" justifyContent={"space-between"} p="10px" flexWrap="wrap" gap="10px"> 
    //     <Box w="100px" h="100px" bg="bisque">1</Box>
    //     <Box w="100px" h="100px" bg="black" flexGrow="3">2</Box>
    //     <Box w="100px" h="100px">3</Box>
    //     <Box w="100px" h="100px">4</Box>
    // </Flex>

    <Flex as="nav" bg="gray.200" justifyContent={"space-between"} p="10px" flexWrap="wrap" gap="10px" alignItems={"center"}>

      <HStack>
        <Heading as="h1" size="md" color="green.600">Dashboard</Heading>
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