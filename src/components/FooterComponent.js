import { HashLink as Link } from 'react-router-hash-link';

const FooterComponent = () => {

    const websiteFooterStyle = {
    
        backgroundColor: "black",
        color: "#514C48",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "-apple-system,system-ui,Segoe UI,Liberation Sans,sans-serif",
        padding: "10px"
    
    }

    const footerLinkStyle = {
    
        color: "#514C48",
        fontFamily: "-apple-system,system-ui,Segoe UI,Liberation Sans,sans-serif",
        padding: "10px"
    
    }

    return (
        <footer id = "websiteFooter" style = {websiteFooterStyle}>
            <p>© 2023 Imersi</p>
            <Link to="/Home#homeMainWrapper" style = {footerLinkStyle}>Home</Link>
            <Link to="/About-Us#aboutMainWrapper" style = {footerLinkStyle}>About Us</Link>
            <Link to="/Terms-and-Conditions#termsAndConditionsMainWrapper" style = {footerLinkStyle}>Terms and Conditions</Link>
            <Link to="https://www.flaticon.com/free-icons/animals" style = {footerLinkStyle}>Animals icons created by Freepik - Flaticon</Link>

        </footer>
    );

}

export default FooterComponent;  