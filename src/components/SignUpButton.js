import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpButton = () => {

  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);

  const handlePageChangeToLogin = () => {

    navigate('/account/sign-up');

  }

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const logInButtonStyle = {

    backgroundColor: isHover ? "white" : "#0095ff",
    border: isHover ? "1px solid #0095ff" : "1px solid #e3e3ed",
    borderRadius: "3px",
    boxShadow: "rgba(255, 255, 255, .4) 0 1px 0 0 inset",
    boxSizing: "border-box",
    color: isHover ? "#0095ff" : "#fff",
    cursor: "pointer",
    display: "inline-block",
    fontFamily: "-apple-system,system-ui,Segoe UI,Liberation Sans,sans-serif",
    fontSize: "2em",
    fontWeight: 400,
    lineHeight: 1.15385,
    margin: 0,
    outline: "none",
    padding: "12px .8em",
    textAlign: "center",
    textDecoration: "none",
    userSelect: "none",
    WebkitUserSelect: "none",
    touchAction: "manipulation",
    verticalAlign: "baseline",
    whiteSpace: "nowrap"

  }

  return <button style={logInButtonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick = {handlePageChangeToLogin}>Get started&gt;</button>;

}

export default SignUpButton;  