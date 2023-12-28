import { Outlet } from "react-router-dom";
import AccountNavigation from "./AccountNavigation";
import PropTypes from 'prop-types';

const NavBar = ( { token, avatar, username, email, favColor } ) => {

    const navStyle = {
      position: "sticky",
      top: 0,
      color: "black",
      backgroundColor: "white",
      padding: "10px",
      fontFamily: "Sans-Serif",
    };
    
    const logoStyle = {
      maxHeight: "40px"
    };
    
    const accountNavStyle = {
      float: "right",
      verticalAlign: "center"
    }

    return (

      <>
        <nav style = {navStyle} id = "navbar">
          <img alt = "App Logo" src = "./images/logoImersi.png" style = {logoStyle}/>
          <div style = {accountNavStyle}>
            <AccountNavigation token = {token} avatar = {avatar} username = {username} email={email} favColor={favColor}/>
          </div>
        </nav>

        <Outlet />
      </>

    );
  };
  
export default NavBar;  

NavBar.propTypes = {
  token: PropTypes.string,
  avatar: PropTypes.string, 
  username: PropTypes.string,
  email: PropTypes.string,
  favColor: PropTypes.string
}