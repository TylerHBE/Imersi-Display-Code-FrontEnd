import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import joinGame from '../functions/joinGame';
import socket from '../functions/socket';
import useViewport from '../hooks/useViewport';

export default function JoinBlitzBoutGame({ token, avatar, username, email, setGameKey }) {

  const [chosenGameKey, setChosengameKey] = useState("");
  const [join, setJoin] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const width = useViewport().width;
  const baseline1 = 300;
  const baseline2 = 500;
  const baseline3 = 700;
  const baseline4 = 900;

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // make a popup alert showing the "submitted" text

    // set configurations
    const configuration = {
      method: "post",
      url: process.env.REACT_APP_API_JOIN_GAME,
      data: {
        email: email,
        token: token,
        avatar: avatar,
        username: username,
        gameKey: chosenGameKey
      },
      headers: { Authorization: `Bearer ${token}` }
    };

    // make the API call
    axios(configuration)
      .then((result) => {

        navigate("/games/BlitzBout/play");
        setGameKey(result.data.gameKey);
        setJoin(true)
        joinGame(socket, email, token, result.data.gameKey)

      })
      .catch((error) => {
        if (error.response) {
          setErrMsg(error.response.data.message);
        }
        else {
          setErrMsg("");
        }
      });

  }

  const joinPageStyle = {

    display: "flex",
    paddingTop: "3%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#e3e3ed",
    paddingTop: width < baseline3 ? "15%" : "6%",
    paddingBottom: width < baseline1 ? "80%" : (width < baseline2 ? "50%" : (width < baseline3 ? "28%" : (width < baseline4 ? "15%" : "6%"))),


  }

  const joinFormStyle = {

    display: "flex",
    padding: "5%",
    margin: "5%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    borderRadius: "30px"

  }
  const joinFormElementStyle = {

    padding: "1%",
    margin: "1%",

  }
  const joinFormLabelStyle = {

    padding: "1%",
    marginTop: "6%",

  }

  const joinFormButtonStyle = {

    margin: "6%",

  }

  return (
    <div id="logInPage" style={joinPageStyle}>

      <Form onSubmit={(e) => handleSubmit(e)} style={joinFormStyle}>
        <h2 style={joinFormElementStyle}>Join game</h2>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label style={joinFormLabelStyle}>Game Key</Form.Label>
          <Form.Control
            type="game key"
            name="game key"
            value={chosenGameKey}
            onChange={(e) => setChosengameKey(e.target.value)}
            placeholder="Enter game key"
            style={joinFormElementStyle}
          />
        </Form.Group>

        {/* submit button */}
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
          style={joinFormButtonStyle}
        >
          Join
        </Button>

        {/* display success message */}
        {join ? (
          <p className="text-success">You have joined a game successfully</p>
        ) : (
          <p className="text-danger">{errMsg ? errMsg : "You have not joined a game successfully"}</p>
        )}

      </Form>

    </div>
  )
}

JoinBlitzBoutGame.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  token: PropTypes.string,
  setGameKey: PropTypes.func
}