import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Grid, GridItem, Box} from "@chakra-ui/react"
import Sidebar from "../components/sidebar"
import { useDisclosure } from "@chakra-ui/react"

export default function AppLayout() {


  const {isOpen, onOpen, onClose, onToggle} = useDisclosure()
  return (
    // <div>
    //   <Navbar />
    //   <Outlet />
    // </div>

    // <Grid templateColumns={"250px 1fr"} minH="100vh"> 
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.100">
      <GridItem as ="aside" colSpan={{base :"6", lg:"2", xl: "1"}} 
      bg="white" p="10px" borderRight="1px solid lightgray" 
      minH="100vh" position= {{base:"absolute", lg:"static"}} 
      zIndex="99"
      left = {{base: isOpen ? "0" : "-100%", lg:"auto"}}> 
        {/* <Box>SideBar</Box> */}
        <Sidebar> </Sidebar>
      </GridItem>
      <GridItem as="main" colSpan={{base:"6", lg:"4", xl:"5"}} p="10px" bg="white">
        <Navbar onToggle={onToggle}/>
        <Box p="10px 40px">
        <Outlet />
        </Box>
      </GridItem>
    </Grid>
  )
}