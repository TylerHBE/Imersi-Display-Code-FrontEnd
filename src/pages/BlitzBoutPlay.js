import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react';
import BlitzBoutLobby from './BlitzBoutLobby'
import { useNavigate } from "react-router-dom";
import BlitzBoutLeaderboard from './BlitzBoutLeaderboard';
import BlitzBoutQuestion from './BlitzBoutQuestion';
import BlitzBoutAnswers from './BlitzBoutAnswers';

import socket from '../functions/socket';

const BlitzBoutPlay = ({ email, gameKey, setGameKey, token, setErrorMsg, username }) => {

    const [gameState, setGameState] = useState("lobby");
    const [questionData, setQuestionData] = useState({});
    const [answerData, setAnswerData] = useState({});
    const [answersData, setAnswersData] = useState([]);
    const [userAnswer, setUserAnswer] = useState(0);
    const [questionState, setQuestionState] = useState("answered");
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [score, setScore] = useState(0);
    const [answerScore, setAnswerScore] = useState(0);
    const [users, setUsers] = useState([]);
    const [gameName, setGameName] = useState("default");
    const navigate = useNavigate();

    React.useEffect(() => {
        const authObject = {
            email: email,
            gameKey: gameKey,
            token: token
        };

        socket.emit("joinGame", authObject)
        console.log("reloading...")

    }, [email, gameKey, token])

    React.useEffect(() => {

        socket.on("updatePlayers", (data) => {
            setUsers(data)
            console.log("new user state")
        })

        socket.on("questionData", (data) => {
            setQuestionData(data)
            console.log("new question")
        })

        socket.on("questionState", (data) => {
            setQuestionState(data)
            console.log("new question state")
        })

        socket.on("leaderboardData", (data) => {
            setLeaderboardData(data)
            console.log("new leaderboard")
        })

        socket.on("gameState", (data) => {
            setGameState(data)
            console.log("new gamestate")
        })

        socket.on("gameName", (data) => {
            setGameName(data)
            console.log("new gameName")
        })

        socket.on("answerData", (data) => {
            setAnswerData(data)
            console.log("new answer data")
        })

        socket.on("AnswersData", (data) => {
            try {
                setAnswersData(data)
                console.log("new answers data")
                console.log(data)
                var answerIndex = data.findIndex((element) => element.email === email)
                if (answerIndex >= 0 && answerIndex < data.length) {
                    setAnswerScore(data[answerIndex].points)
                    setUserAnswer(data[answerIndex].answer)
                    setScore(data[answerIndex].score)
                }
                else {
                    console.log("err finding answer index")
                }
            }
            catch (error) {
                console.log(error)
            }

        })

        socket.on("disconnection", (data) => {
            setGameKey("");
            console.log("hi3")
        })

        socket.on("joinFail", (data) => {
            navigate("/games/BlitzBout/join")
            console.log(data)
        })

        socket.on("error", (data) => {
            setErrorMsg(data + ":" + Date())
            console.log("new error")
        })

        socket.on("endGame", () => {
            navigate("/games/BlitzBout/join")
        })

        socket.on("connect_error", (err) => {
            console.log(`connect_error due to ${err.message}`);
        });

        socket.on("kicked", (data) => {
            navigate("/games/BlitzBout/join")
            console.log(data);
        });



    }, [email, gameKey, setGameKey, navigate, token, setErrorMsg, answersData])

    const newAnswer = (userAnswer) => {

        const sendObject = {
            email: email,
            gameKey: gameKey,
            token: token,
            answer: userAnswer
        };

        socket.emit("newAnswer", sendObject)
    }


    switch (gameState) {
        case "":
            return <BlitzBoutLobby users={users} gameKey={gameKey} gameName={gameName} />
        case "lobby":
            return <BlitzBoutLobby users={users} gameKey={gameKey} gameName={gameName} />
        case "question":
            return <BlitzBoutQuestion username={username} score={score} gameName={gameName} questionData={questionData} questionState={questionState} newAnswer={newAnswer} />
        case "leaderboard":
            return <BlitzBoutLeaderboard username={username} score={score} gameName={gameName} leaderboardData={leaderboardData} />
        case "finalLeaderboard":
            return <BlitzBoutLeaderboard username={username} score={score} gameName={gameName} leaderboardData={leaderboardData} />
        case "answers":
            return <BlitzBoutAnswers username={username} gameName={gameName} answerData={answerData} answerScore={answerScore} score={score} userAnswer={userAnswer} />
        default:
            return navigate("/games/BlitzBout/join")
    }

};
BlitzBoutPlay.propTypes = {
    email: PropTypes.string,
    gameKey: PropTypes.string,
    setGameKey: PropTypes.func,
    token: PropTypes.string,
    setErrorMsg: PropTypes.func,
    username: PropTypes.string
}

export default BlitzBoutPlay;  