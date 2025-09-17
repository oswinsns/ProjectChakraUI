import { CalendarIcon, createIcon } from "@chakra-ui/icons"
import { List, ListItem, Button, Divider, ListIcon, VStack} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { FiCalendar, FiFileText, FiHome, FiLogOut, FiSettings, FiUser, FiX } from "react-icons/fi"
import { IconButton, Heading, HStack } from "@chakra-ui/react"
import { FiMenu } from "react-icons/fi"

const Sidebar = (props) => {

    const {onClose} = props;

    const HomeIcon = createIcon({
        displayName: "HomeIcon",
        viewBox: "0 0 20 20",

        defaultProps: {
            fill: "none",
            // fill: "currentColor",
            // boxSize: "20px",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
        },
        path: (
         <g id="home-1">
             <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
             <polyline points="9 22 9 12 15 12 15 22"></polyline>
         </g>
        ), 
    })

    const itemSrtyle = {
        color: "white",
        backgroundColor: "teal",
        padding: "10px",

        a: {
            display: "flex",
            alignItems: "center",
            p: "10px 10px",
            gap: "10px",
            textDecoration: "none",
            fontWeight: "bold",
        }
    }
  return (

    <VStack w="full" alignItems={"flex-start"} p="10px" gap="20px"> 

             <HStack justify="space-between" w="full">
                {/* <Heading as="h1" size="md" color="green.600">Dashboard</Heading> */}
                {/* <IconButton display={{base:"inline-flex", lg:"none"}} aria-label="Open Menu" icon={<AddIcon />} onClick={onToggle} /> */}
                <Heading as ="h1" fontSize ="30px"> Dashboard</Heading>
                 <IconButton 
                 variant="ghost"
                 aria-label=""
                 icon={<FiX />}
                 rounded ="full"
                 display = {{base:"inline-flex", lg:"none"}}
                 onClick={onClose}/> 
              </HStack>

    <List sx={itemSrtyle} w="full" spacing={2}> 
        {/* <ListItem p="10px" borderBottom="1px solid lightgray">Dashboard</ListItem>
        <ListItem p="10px" borderBottom="1px solid lightgray">Profile</ListItem>
        <ListItem p="10px" borderBottom="1px solid lightgray">Settings</ListItem> */}

        <ListItem>
            <NavLink to="/">
            <ListIcon as ={HomeIcon}></ListIcon>
                Dashboard
            </NavLink>
        </ListItem>

        <ListItem>
            <NavLink to="/new-task">
            <ListIcon as ={FiCalendar}></ListIcon>
                Task
            </NavLink>
        </ListItem>

        <ListItem>
            <NavLink to="/account">
            <ListIcon as ={FiUser}></ListIcon>
                Dashboard
            </NavLink>
        </ListItem>

        <ListItem>
            <NavLink to="#">
                 <ListIcon as ={FiFileText}></ListIcon>
                Project
            </NavLink>
        </ListItem>

<Divider />
        <ListItem>
            <NavLink to="#">
                <ListIcon as ={FiSettings}></ListIcon>
                Settings
            </NavLink>
        </ListItem>

        <Button w="full" justifyContent={"flex-start"} fontWeight= "400" variant="ghost" colorScheme="green" bgColor={"gray.200"}>
             <ListIcon as ={FiLogOut}></ListIcon>
            Logout</Button>
    </List>

    </VStack>
  )
}

export default Sidebar


//rafce raster