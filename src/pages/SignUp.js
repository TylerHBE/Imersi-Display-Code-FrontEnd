import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

export default function SignUp({ setToken, setAvatar, setFavColor, setUsername, setEmail, token }) {

    const [userEmail, setUserEmail] = useState("");
    const [nUsername, setnUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    if (token) {
        navigate("/account/dashboard");
    }

    const handleSubmit = (e) => {

        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text

        // set configurations
        const configuration = {
            method: "post",
            url: process.env.REACT_APP_API_SIGN_UP,
            data: {
                email: userEmail,
                username: nUsername,
                password,
            },
        };

        // make the API call
        axios(configuration)
            .then((result) => {
                setLogin(true);
                // set the cookie token
                setToken(result.data.token);
                // set avatar and username
                setAvatar(result.data.avatar);
                setUsername(result.data.username);
                setEmail(result.data.email);
                setFavColor(result.data.favColor);

                if (location.pathname === "/account/sign-up") {
                    navigate("/account/settings");
                }

            })
            .catch((error) => {
                if (error.response.data.message) {
                    setErrMsg(error.response.data.message);
                }
                else {
                    setErrMsg("");
                }
            });

    }

    const logInPageStyle = {

        display: "flex",
        paddingTop: "3%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#e3e3ed",

    }

    const logInFormStyle = {

        display: "flex",
        padding: "5%",
        margin: "3%",
        marginBottom: "0",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        borderRadius: "30px"

    }
    const logInFormElementStyle = {

        padding: "1%",
        margin: "1%",

    }
    const logInFormLabelStyle = {

        padding: "1%",
        marginTop: "6%",

    }

    const logInFormButtonStyle = {

        margin: "6%",

    }

    const linkStyle = {

        color: "#514C48",
        fontFamily: "-apple-system,system-ui,Segoe UI,Liberation Sans,sans-serif",
        padding: "10px",
        marginBottom: "3%",

    }

    return (
        <div id="logInPage" style={logInPageStyle}>

            <Form onSubmit={(e) => handleSubmit(e)} style={logInFormStyle}>
                <h2 style={logInFormElementStyle}>Sign Up</h2>

                {/* username */}
                <Form.Group controlId="formBasicUsername">
                    <Form.Label style={logInFormLabelStyle}>Username</Form.Label>
                    <Form.Control
                        type="username"
                        name="username"
                        value={nUsername}
                        onChange={(e) => setnUsername(e.target.value)}
                        placeholder="Enter username"
                        style={logInFormElementStyle}
                    />
                </Form.Group>

                {/* email */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label style={logInFormLabelStyle}>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="Enter email"
                        style={logInFormElementStyle}
                    />
                </Form.Group>



                {/* password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label style={logInFormLabelStyle} >Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        style={logInFormElementStyle}
                    />
                </Form.Group>

                {/* submit button */}
                <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                    style={logInFormButtonStyle}
                >
                    Sign Up
                </Button>

                {/* display success message */}
                {login ? (
                    <p className="text-success">You Have Signed up Successfully</p>
                ) : (
                    <p className="text-danger">{errMsg ? errMsg : "You are not signed up"}</p>
                )}

            </Form>

            <Link to="/account/log-in" style={linkStyle}>Log In</Link>

        </div>
    )
}

SignUp.propTypes = {
    setToken: PropTypes.func.isRequired,
    setAvatar: PropTypes.func.isRequired,
    setUsername: PropTypes.func.isRequired,
    setEmail: PropTypes.func.isRequired,
    setFavColor: PropTypes.func.isRequired,
    token: PropTypes.string
}