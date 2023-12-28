import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EditBlitzBoutGame({ token, email, setGameSettings, gameSettings, chosenGame }) {

    var oldGameSetting = { questions: [], gameName: "unknown" };
    var indexGameSetting

    if (chosenGame) {
        indexGameSetting = gameSettings.findIndex((element) => element.name === chosenGame)
        if (indexGameSetting) {
            oldGameSetting = gameSettings[indexGameSetting];
        }
        else {
            oldGameSetting = { questions: [], gameName: "unknown" };
        }
    }
    else {
        oldGameSetting = { questions: [], gameName: "unknown" };
    }

    const navigate = useNavigate();
    const [edited, setEdited] = useState(false);
    const [questions, setQuestions] = useState(oldGameSetting.questions);
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        if (!chosenGame || !indexGameSetting) {
            navigate("/games/BlitzBout/create");
        }
    }, [chosenGame, indexGameSetting, navigate])

    /*
        Handle update game settings
    */

    const handleChangeGameSettings = (gameSetting) => {

        var updatedGameSettings = gameSettings;
        updatedGameSettings[indexGameSetting] = gameSetting
        setGameSettings(updatedGameSettings);
    };

    const handleAddQuestion = (e) => {

        // prevent the form from refreshing the whole page
        e.preventDefault();

        setQuestions((prevQuestions) => [
            ...prevQuestions,
            {
                question: "",
                points: 0,
                answers: [],
            },
        ]);
    };

    const handleAddAnswer = (e, index) => {

        // prevent the form from refreshing the whole page
        e.preventDefault();

        let newArr = [...questions];

        newArr[index].answers.push({
            answerText: "",
            state: false
        });

        setQuestions(newArr);

    };

    const handleDeleteQuestion = (e, index) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();

        let newArr = [...questions];

        newArr.splice(index, 1);

        setQuestions(newArr);
    }

    const handleDeleteAnswer = (e, index, indexAnswer) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();

        let newArr = [...questions];

        newArr[index].answers.splice(indexAnswer, 1);

        setQuestions(newArr);
    }

    const handleQuestionChange = (e, index) => {

        let newArr = [...questions];

        newArr[index].question = e;

        setQuestions(newArr);
    };

    const handlePointsChange = (e, index) => {

        if (Number(e)) {
            let newArr = [...questions];

            newArr[index].points = e;

            setQuestions(newArr);
        }

    };

    const handleAnswerTextChange = (e, index, indexAnswer) => {
        let newArr = [...questions];

        newArr[index].answers[indexAnswer].answerText = e;

        setQuestions(newArr);
    }

    const handleStateChange = (e, index, indexAnswer) => {
        let newArr = [...questions];

        newArr[index].answers[indexAnswer].state = e;

        setQuestions(newArr);
    }

    /*
            handle create submit
    */

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();

        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:8080/games/BlitzBout/update-gameSetting",
            data: {
                token: token,
                email: email,
                questions: questions,
                gameName: chosenGame
            },
            headers: { Authorization: `Bearer ${token}` }
        };

        // make the API call
        axios(configuration)
            .then((result) => {

                handleChangeGameSettings(result.data.result);
                navigate("/games/BlitzBout/create");
                setEdited(true);

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

    const logInPageStyle = {

        display: "flex",
        paddingTop: "2%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#e3e3ed",

    }

    const formBlockStyle = {
        display: "flex",
        padding: "1%",
        margin: "6%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        borderRadius: "30px",
        minWidth: "50%"
    }

    const formStyle = {

        display: "flex",
        padding: "1%",
        margin: "1%",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "80%"

    }

    const elementStyle = {

        padding: "1%",
        margin: "1%",

    }

    const formGroupStyle = {

        border: "solid LightGray 3px",
        borderRadius: "30px",
        padding: "2%",
        margin: "2%",
        minWidth: "90%"

    }

    const titleGroupStyle = {
        border: "solid LightGray 3px",
        borderRadius: "30px",
        padding: "2%",
        margin: "2%",
        minWidth: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }

    const questionsFormGroupStyle = {

        padding: "2%",
        margin: "2%",
        minWidth: "90%"

    }

    const labelStyle = {

        padding: "1%",
        marginTop: "3%",

    }

    const bigLabelStyle = {
        padding: "1%",
        marginTop: "3%",
        fontSize: "2em"
    }

    const formButtonStyle = {

        margin: "5%",

    }

    const titleText = {
        fontSize: "3em",
        padding: "5%",
        margin: "2%"
    }

    const submitStyle = {
        display: "flex",
        padding: "1%",
        margin: "1%",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "30%",
        overflow: "hidden"
    }

    const answerStyle = {
        display: "flex",
        padding: "1%",
        margin: "2%",
        flexDirection: "column",
        minWidth: "30%",
        border: "solid LightGray 3px",
        borderRadius: "30px",
    }

    const deleteAnswerButtonStyle = {
        margin: "2%",
    }

    return (
        <div id="logInPage" style={logInPageStyle}>

            <div id="formBlock" style={formBlockStyle}>
                <h2 style={titleText}>Edit game</h2>
                <Form onSubmit={(e) => handleSubmit(e)} style={formStyle}>
                    {/* email */}
                    <Form.Group controlId="formBasicGameName" style={titleGroupStyle}>
                        <Form.Label style={bigLabelStyle}>{chosenGame}</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicQuestions" style={questionsFormGroupStyle}>
                        {/* questions */}
                        {questions.map(
                            (question, index) =>
                                <Form.Group controlId={"formBasicQuestion" + index} key={index} style={formGroupStyle}>
                                    <Form.Group controlId={"formBasicQuestionName" + index}>
                                        <Form.Label style={labelStyle}>Question:</Form.Label>
                                        <Form.Control
                                            type="question"
                                            name="question"
                                            value={question.question}
                                            onChange={(e) => handleQuestionChange(e.target.value, index)}
                                            placeholder="Enter question"
                                            style={elementStyle}
                                        />
                                    </Form.Group>

                                    {/* answers */}
                                    {question.answers.map(
                                        (answer, indexAnswer) =>
                                            <Form.Group controlId={"formBasicAnswer" + index + "/" + indexAnswer} key={indexAnswer} style={answerStyle}>
                                                <Form.Label style={labelStyle}>Answer:</Form.Label>
                                                <Form.Control
                                                    type="answer"
                                                    name="answer"
                                                    value={answer.answerText}
                                                    onChange={(e) => handleAnswerTextChange(e.target.value, index, indexAnswer)}
                                                    placeholder="Enter Answer"
                                                    style={elementStyle}
                                                />
                                                <Form.Group className="mb-3" controlId={"formBasicAnswerCheckBox" + index + "/" + indexAnswer}>
                                                    <Form.Check type="checkbox" label={answer.state ? "Answer is true" : "Answer is false"} checked={answer.state} onChange={(e) => handleStateChange(e.target.checked, index, indexAnswer)} />
                                                </Form.Group>
                                                <Form.Group controlId={"formBasicDeleteQuestion" + index + "/" + indexAnswer}>
                                                    <Button
                                                        variant="primary"
                                                        type="deleteAnswer"
                                                        onClick={(e) => handleDeleteAnswer(e, index, indexAnswer)}
                                                        style={deleteAnswerButtonStyle}
                                                    >
                                                        Delete Answer
                                                    </Button>
                                                </Form.Group>
                                            </Form.Group>
                                    )}

                                    <Form.Group controlId={"formBasicAddAnswerButton" + index}>
                                        {/* Add answer button */}
                                        <Button
                                            variant="primary"
                                            type="addAnswer"
                                            onClick={(e) => handleAddAnswer(e, index)}
                                            style={formButtonStyle}
                                        >
                                            Add Answer
                                        </Button>
                                    </Form.Group>

                                    <Form.Group controlId={"formBasicPointsControl" + index}>
                                        <Form.Label style={labelStyle}>Points:</Form.Label>
                                        <Form.Control
                                            type="points"
                                            name="points"
                                            value={question.points}
                                            onChange={(e) => handlePointsChange(e.target.value, index)}
                                            placeholder="Enter points"
                                            style={elementStyle}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId={"formBasicDeleteQuestion" + index}>
                                        <Button
                                            variant="primary"
                                            type="deleteQuestion"
                                            onClick={(e) => handleDeleteQuestion(e, index)}
                                            style={formButtonStyle}
                                        >
                                            Delete Question
                                        </Button>
                                    </Form.Group>

                                </Form.Group>
                        )}

                        {/* Add question button */}
                        <Button
                            variant="primary"
                            type="addQuestion"
                            onClick={(e) => handleAddQuestion(e)}
                            style={formButtonStyle}
                        >
                            Add Question
                        </Button>
                    </Form.Group>

                    <Form.Group controlId='submitGroup' style={submitStyle}>

                        {/* submit button */}
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                            style={formButtonStyle}
                        >
                            Edit
                        </Button>

                        {/* display success message */}
                        {edited ? (
                            <p className="text-success">Game Edited Successfully</p>
                        ) : (
                            <p className="text-danger">{errMsg ? errMsg : "No game edited"}</p>
                        )}

                    </Form.Group>

                </Form>
            </div>
        </div>
    )
}
EditBlitzBoutGame.propTypes = {
    token: PropTypes.string,
    email: PropTypes.string,
    setGameSettings: PropTypes.func,
    gameSettings: PropTypes.array
}