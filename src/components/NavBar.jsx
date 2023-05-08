import { NavLink } from "react-router-dom";
//import { logOut } from "../utilities/users-service";
import { AppBar, Toolbar,styled } from "@mui/material";// like bootstrap
import { logOut } from "../utilities/users-service";

const Header= styled(AppBar)`
//background: #111111`;


const Tabs= styled(NavLink)`
font-size:20px;
margin-right: 20px;
color: inherent;
text-decoration:none;`

const NavBar= ({ user, setUser })=>{

  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return(
    <Header position="static">
       <Toolbar>
           <Tabs to='/'>Homepage</Tabs>
           <Tabs to='/all'>All Users</Tabs>
           <Tabs to='/add'>Add User</Tabs>
           <Tabs to="" onClick={handleLogOut}>
        Logout
      </Tabs>
       </Toolbar>
       </Header>
  )
};

export default NavBar;
