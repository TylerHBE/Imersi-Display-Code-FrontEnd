import { useState } from 'react';

const SignInButton = () => {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
      setIsHover(true);
    };
    const handleMouseLeave = () => {
      setIsHover(false);
    };

    const signUpButtonStyle = {
    
        backgroundColor: isHover ? "white" : "#0095ff",
        border: isHover ? "1px solid #0095ff" : "1px solid white",
        borderRadius: "3px",
        boxShadow: "rgba(255, 255, 255, .4) 0 1px 0 0 inset",
        boxSizing: "border-box",
        color: isHover ? "#0095ff" : "#fff",
        cursor: "pointer",
        display: "inline-block",
        fontFamily: "-apple-system,system-ui,Segoe UI,Liberation Sans,sans-serif",
        fontSize: "18px",
        fontWeight: 400,
        lineHeight: 1.15385,
        margin: 0,
        outline: "none",
        padding: "12px .8em",
        position: "relative",
        textAlign: "center",
        textDecoration: "none",
        userSelect: "none",
        WebkitUserSelect: "none",
        touchAction: "manipulation",
        verticalAlign: "baseline",
        whiteSpace: "nowrap"
    
    }

    return <button style = {signUpButtonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Sign Up</button>;

}

export default SignInButton;  