import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Grid, GridItem, Box} from "@chakra-ui/react"
import Sidebar from "../components/sidebar"

export default function AppLayout() {
  return (
    // <div>
    //   <Navbar />
    //   <Outlet />
    // </div>

    // <Grid templateColumns={"250px 1fr"} minH="100vh"> 
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.100">
      <GridItem as ="aside" colSpan={1} bg="white" p="10px" borderRight="1px solid lightgray" minH="100vh"> 
        {/* <Box>SideBar</Box> */}
        <Sidebar> </Sidebar>
      </GridItem>
      <GridItem as="main" colSpan={5} p="10px">
        <Navbar />
        <Box p="10px 40px">
        <Outlet />
        </Box>
      </GridItem>
    </Grid>
  )
}