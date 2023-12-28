import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import creatorJoin from '../functions/creatorJoin';
import socket from '../functions/socket';
import useViewport from "../hooks/useViewport";

export default function CreateBlitzBoutGame({ token, avatar, username, email, gameSettings, setGameSettings, setGameKey, setChosenGame, chosenGame }) {

    const [create, setCreate] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const navigate = useNavigate();
    const width = useViewport().width;
    const baseline1 = 300;
    const baseline2 = 500;
    const baseline3 = 700;
    const baseline4 = 900;

    /*
        Prelim grab needed stuff
    */

    useEffect(() => {

        function getGameSettings() {

            console.log("Attempting load of required resources...")

            // get game settings
            // set configurations
            const configuration = {
                method: "post",
                url: "http://localhost:8080/games/BlitzBout/get-gameSettings",
                data: {
                    email: email,
                },
                headers: { Authorization: `Bearer ${token}` }
            };

            // make the API call
            axios(configuration)
                .then((result) => {

                    setGameSettings(result.data.gameSettings);

                })
                .catch((error) => {
                    console.log("err: connection issue for getting gameSettings: " + error)
                });
        }
        if (!gameSettings[0]) {
            getGameSettings();
        }

    }, [email, token, gameSettings, setGameSettings]);

    /*
            handle create submit
    */

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text

        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:8080/games/BlitzBout/create-game",
            data: {
                token: token,
                username: username,
                avatar: avatar,
                email: email,
                gameName: chosenGame,
            },
            headers: { Authorization: `Bearer ${token}` }
        };

        // make the API call
        axios(configuration)
            .then((result) => {

                setCreate(true);
                const GameKey = result.data.gameKey
                setGameKey(GameKey);
                navigate("/games/BlitzBout/creator");
                creatorJoin(socket, email, token, GameKey)

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

    const handleDelete = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text

        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:8080/games/BlitzBout/delete-gameSetting",
            data: {
                token: token,
                username: username,
                avatar: avatar,
                email: email,
                gameName: chosenGame,
            },
            headers: { Authorization: `Bearer ${token}` }
        };

        // make the API call
        axios(configuration)
            .then((result) => {

                setGameSettings(result.data.gameSettings);

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

    const handleSelectChange = (e) => {
        setChosenGame(e.target.value);
    };

    const handleCreateNewBBGame = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        navigate("/games/BlitzBout/create-new");
    }

    /*
        styles
    */

    const createBBPageStyle = {

        display: "flex",
        paddingTop: width < baseline3 ? "15%" : "6%",
        paddingBottom: width < baseline3 ? "15%" : "6%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#e3e3ed",

    }

    const createBBGameBoxStyle = {

        display: "flex",
        padding: "5%",
        margin: "4%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        borderRadius: "30px",
        minWidth: "60%"

    }

    const createBBGameFormStyle = {

        display: "flex",
        flexDirection: "row",
        minWidth: width < baseline2 ? "90%" : "80%",
        justifyContent: "space-around",

    }

    const selectEditStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "2%"
    }

    const formSelectStyle = {
        fontSize: width < baseline1 ? "0.6em" : ( width < baseline2 ? "0.7em" : ( width < baseline3 ? "0.8em" : ( width < baseline4 ? "0.9em" : "1em" ) ) ),

    }

    const editLinkStyle = {
        fontSize: width < baseline1 ? "0.6em" : ( width < baseline2 ? "0.7em" : ( width < baseline3 ? "0.8em" : ( width < baseline4 ? "0.9em" : "1em" ) ) ),
        padding: "3%"
    }

    const createBBGameFormElementStyle = {

        fontSize: width < baseline1 ? "0.6em" : ( width < baseline2 ? "0.7em" : ( width < baseline3 ? "0.8em" : ( width < baseline4 ? "0.9em" : "1em" ) ) ),
        padding: "1%",
        margin: "1%",

    }

    const createBBGameFormGroupStyle = {

        padding: "1%",
        margin: "4%",
        minWidth: width < baseline2 ? "20%" : "45%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

    }

    const createBBGameFormButtonStyle = {

        margin: "6%",
        fontSize: width < baseline1 ? "0.6em" : ( width < baseline2 ? "0.7em" : ( width < baseline3 ? "0.8em" : ( width < baseline4 ? "0.9em" : "1em" ) ) ),

    }

    const deleteBBGameFormButtonStyle = {
        border: "none",
        backgroundColor: "rgba(255, 255, 255, 0) ",
        color: "red",
        textDecoration: "underline",
        margin: "0",
        padding: "3%",
        fontSize: width < baseline1 ? "0.6em" : ( width < baseline2 ? "0.7em" : ( width < baseline3 ? "0.8em" : ( width < baseline4 ? "0.9em" : "1em" ) ) ),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }

    const titleText = {
        padding: "1%",
        margin: "1%",
        fontSize: width < baseline3 ? "2em" : "3em"
    }

    const reactiveText = {
        fontSize: width < baseline1 ? "0.4em" : ( width < baseline2 ? "0.5em" : ( width < baseline3 ? "0.7em" : ( width < baseline4 ? "0.9em" : "1em" ) ) )
    }

    /*
        Components
    */

    return (
        <div id="createBBPage" style={createBBPageStyle}>

            <div id="createBBGamePageBox" style={createBBGameBoxStyle}>

                <h2 style={titleText}>Create Game</h2>

                <Form onSubmit={(e) => handleSubmit(e)} style={createBBGameFormStyle}>

                    <Form.Group controlId="formBasicSelectEditCreate" style={createBBGameFormGroupStyle}>

                        <h2 style={createBBGameFormElementStyle}>Select Game</h2>
                        {/* select dropdown */}
                        <Form.Group controlId="formBasicSelectEdit" style={selectEditStyle}>
                            <Form.Select
                                value={chosenGame}
                                onChange={(e) => handleSelectChange(e)}
                                style = {formSelectStyle}
                            >
                                <option value=""></option>
                                {gameSettings.map(
                                    (gameSetting, index) =>
                                        <option value={gameSetting.name} key={index}>{gameSetting.name}</option>
                                )}
                            </Form.Select>
                            <Link style={editLinkStyle} to={"/games/BlitzBout/edit"}>Edit</Link>
                            <Button
                                variant="primary"
                                type="deleteBBGame"
                                onClick={(e) => handleDelete(e)}
                                style={deleteBBGameFormButtonStyle}
                            >
                                Delete
                            </Button>
                        </Form.Group>

                        {/* submit button */}
                        <Button
                            variant="primary"
                            type="createNewBBGame"
                            onClick={(e) => handleCreateNewBBGame(e)}
                            style={createBBGameFormButtonStyle}
                        >
                            Create
                        </Button>

                    </Form.Group>

                    <Form.Group controlId="formBasicSubmit" style={createBBGameFormGroupStyle}>

                        <h2 style={createBBGameFormElementStyle}>Create Game</h2>

                        {/* submit button */}
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                            style={createBBGameFormButtonStyle}
                        >
                            Create
                        </Button>

                        {/* display success message */}
                        {
                            chosenGame !== undefined ?
                                (create ? (
                                    <p className="text-success" style = {reactiveText}>Created Game</p>
                                ) : (
                                    <p className="text-danger" style = {reactiveText}>{errMsg ? errMsg : "Awaiting game creation"}</p>
                                ))
                                :
                                (
                                    <p className="text-danger" style = {reactiveText}>No game selected</p>

                                )
                        }

                    </Form.Group>

                </Form>
            </div>

        </div>
    )
}

CreateBlitzBoutGame.propTypes = {
    token: PropTypes.string,
    avatar: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    setGameSettings: PropTypes.func,
    gameSettings: PropTypes.array,
    setGameKey: PropTypes.func.isRequired,
    setChosenGame: PropTypes.func,
    chosenGame: PropTypes.string
}