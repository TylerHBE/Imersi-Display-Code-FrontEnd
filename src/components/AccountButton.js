import AvatarPicture from "./AvatarPicture";
import AccountDropdown from "./AccountDropdown";
import PropTypes from 'prop-types';
import { useState } from 'react';
import useViewport from "../hooks/useViewport";

const AccountButton = ( { avatar, username, email, favColor } ) => {

    const [isHover, setIsHover] = useState(false);
    const width = useViewport().width;
    const baseline = 600;

    const handleMouseEnter = () => {
      setIsHover(true);
    };
    const handleMouseLeave = () => {
      setIsHover(false);
    };

    const dropdownStyle = {
        position: "relative",
        display: "inline-block",
        paddingLeft: width < baseline ? "12px" : "20px",
        paddingRight: width < baseline ? "12px" : "20px",
    }

    const dropdownContentStyle = {
        display: isHover ? "block" : "none",
        position: "absolute",
        zIndex: 1,
        right: width < baseline ? "12px" : "20px",
        backgroundColor: "rgba(0, 0, 0, 0)",
        padding: "10px",
        minWidth: width < baseline ? "300px" : "500px",
    }

    return (
        <div id = "dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style = {dropdownStyle}>
            <AvatarPicture avatar = {avatar} dimension = "40px" favColor={favColor}/>
            <div id = "dropdownContent" style = {dropdownContentStyle}>
                <AccountDropdown email = {email} username = {username} avatar = {avatar} favColor={favColor}/>
            </div>
            
        </div>
    );

};
  
export default AccountButton;  

AccountButton.propTypes = {
    avatar: PropTypes.string, 
    username: PropTypes.string,
    email: PropTypes.string,
    favColor: PropTypes.string
}