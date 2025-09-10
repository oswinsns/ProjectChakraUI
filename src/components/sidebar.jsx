import { CalendarIcon, createIcon } from "@chakra-ui/icons"
import { List, ListItem, Button, Divider, ListIcon} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { FiCalendar, FiFileText, FiHome, FiLogOut, FiSettings, FiUser } from "react-icons/fi"

const Sidebar = () => {

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

        <Button w="full" colorScheme = "green" justifyContent={"flex-start"} fontWeight= "400">
             <ListIcon as ={FiLogOut}></ListIcon>
            Logout</Button>
    </List>
  )
}

export default Sidebar


//rafce raster