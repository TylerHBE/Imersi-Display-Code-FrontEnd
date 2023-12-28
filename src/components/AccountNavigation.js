import LogInButton from "./LogInButton";
import AccountButton from "./AccountButton";
import PropTypes from 'prop-types';

const AccountNavigation = ( { token, avatar, username, email, favColor } ) => {

    if (token) {
        return (
            <AccountButton avatar = {avatar} username={username} email = {email} favColor={favColor}/>
        );
    }
    else {
        return (
            <LogInButton />
        );
    }

};
  
export default AccountNavigation;  

AccountNavigation.propTypes = {
    token: PropTypes.string,
    avatar: PropTypes.string, 
    username: PropTypes.string,
    email: PropTypes.string,
    favColor: PropTypes.string
}