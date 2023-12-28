import AvatarPicture from "./AvatarPicture";
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react';
import useViewport from "../hooks/useViewport";

const AccountDropdown = ( { avatar, username, email, favColor } ) => {

    const width = useViewport().width;
    const baseline = 600;

    const emailTextStyle = {
        color: "#514C48",
        fontSize: "1.5em"
    }

    const helloTextStyle = {
        color: "black",
        fontWeight: "bold",
        fontSize: "2em"
    }

    const dropdownBoxStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        minWidth: width < baseline ? "250" : "450px",
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        padding: "12px 16px",
        overflow: "hidden"
    }

    const userInfoBoxStyle = {
        padding: "3px 4px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }

    const userLinksBox = {
        margin: "3px 4px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: width < baseline ? "150" : "300px",
        borderRadius: "30px",
        overflow: "hidden"
    }

    const NavLink = ({ link, innerText }) => {

        const [isHover, setIsHover] = useState(false);

        const handleMouseEnter = () => {
            setIsHover(true);
        };
        const handleMouseLeave = () => {
            setIsHover(false);
        };

        const navLinkStyle = {
            color: "#514C48",
            fontSize: "1.5em",
            backgroundColor: isHover ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0)",
            minWidth: "500px",
            textAlign: "center"
        }

        return (
            <Link to={link} style = {navLinkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{innerText}</Link>
        );

    }
    NavLink.propTypes = {
        link: PropTypes.string,
        innerText: PropTypes.string
    }

    return (
        
        <div id = "dropdownBox" style = {dropdownBoxStyle}>
            <div id = "userInfoBox" style = {userInfoBoxStyle}>
                <h1 style = {emailTextStyle}>{email}</h1>
                <AvatarPicture avatar = {avatar} dimension = "70px" favColor = {favColor}/>
                <h1 style = {helloTextStyle}>Hi, {username}!</h1>
            </div>
            <div id = "userLinksBox" style = {userLinksBox}>
                <NavLink link="/Home#homeMainWrapper" innerText="Home" />
                <NavLink link="/account/settings" innerText="Settings" />
                <NavLink link="/account/dashboard" innerText="Dashboard" />
            </div>
        </div>
    );

};
  
export default AccountDropdown;  

AccountDropdown.propTypes = {
    avatar: PropTypes.string, 
    username: PropTypes.string,
    email: PropTypes.string,
    favColor: PropTypes.string
}