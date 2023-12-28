import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react';
import BlitzBoutLobbyCreator from './BlitzBoutLobbyCreator';
import { useNavigate } from "react-router-dom";
import BlitzBoutQuestionCreator from './BlitzBoutQuestionCreator';
import BlitzBoutLeaderboardCreator from './BlitzBoutLeaderBoardCreator';
import BlitzBoutAnswersCreator from './BlitzBoutAnswersCreator';
import socket from '../functions/socket';
import BlitzBoutFinalLeaderboardCreator from './BlitzBoutFinalLeaderboardCreator';

const BlitzBoutCreator = ({ email, gameKey, setGameKey, token, setErrorMsg }) => {

    const [gameState, setGameState] = useState("lobby");
    const [questionData, setQuestionData] = useState({});
    const [answerData, setAnswerData] = useState([]);
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [users, setUsers] = useState([]);
    const [gameName, setGameName] = useState("default");
    const navigate = useNavigate();

    React.useEffect(() => {
        const authObject = {
            email: email,
            gameKey: gameKey,
            token: token
        };

        socket.emit("creatorJoin", authObject)
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

        socket.on("leaderboardData", (data) => {
            setLeaderboardData(data)
            console.log("new leaderboard")
            //console.log(leaderboardData)
            //console.log(data)
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

        socket.on("error", (data) => {
            setErrorMsg(data + ":" + Date())
            console.log("new error")
        })

        socket.on("disconnection", (data) => {
            setGameKey("");
            console.log("hi3")
        })

        socket.on("joinFail", (data) => {
            navigate("/games/BlitzBout/create")
            console.log(data)
        })

        socket.on("endGame", () => {
            navigate("/games/BlitzBout/create")
        })

        socket.on("connect_error", (err) => {
            console.log(`connect_error due to ${err.message}`);
        });

    }, [email, gameKey, setGameKey, navigate, token, setErrorMsg])

    const deleteUser = (emailToDelete) => {

        const sendObject = {
            email: email,
            gameKey: gameKey,
            token: token,
            userToDelete: emailToDelete
        };

        socket.emit("deleteUser", sendObject)
    }

    const startGame = () => {

        const sendObject = {
            email: email,
            gameKey: gameKey,
            token: token,
        };

        socket.emit("startGame", sendObject)
    }

    const newQuestion = () => {

        const sendObject = {
            email: email,
            gameKey: gameKey,
            token: token,
        };

        socket.emit("newQuestion", sendObject)
    }

    const newAnswers = () => {

        const sendObject = {
            email: email,
            gameKey: gameKey,
            token: token,
        };

        socket.emit("newAnswers", sendObject)
    }

    const newLeaderboard = () => {

        const sendObject = {
            email: email,
            gameKey: gameKey,
            token: token,
        };

        socket.emit("newLeaderboard", sendObject)
    }

    const endGame = () => {

        const sendObject = {
            email: email,
            gameKey: gameKey,
            token: token,
        };

        socket.emit("endGame", sendObject)
    }

    switch (gameState) {
        case "":
            return <BlitzBoutLobbyCreator users={users} gameKey={gameKey} gameName={gameName} deleteUser={deleteUser} startGame={startGame} />
        case "lobby":
            return <BlitzBoutLobbyCreator users={users} gameKey={gameKey} gameName={gameName} deleteUser={deleteUser} startGame={startGame} />
        case "question":
            return <BlitzBoutQuestionCreator users={users} gameKey={gameKey} gameName={gameName} questionData={questionData} newAnswers={newAnswers} />
        case "leaderboard":
            return <BlitzBoutLeaderboardCreator users={users} gameKey={gameKey} gameName={gameName} leaderboardData={leaderboardData} deleteUser={deleteUser} newQuestion={newQuestion} />
        case "finalLeaderboard":
            return <BlitzBoutFinalLeaderboardCreator gameName={gameName} leaderboardData={leaderboardData} endGame={endGame} />
        case "answers":
            return <BlitzBoutAnswersCreator answerData={answerData} gameKey={gameKey} gameName={gameName} newLeaderboard={newLeaderboard} />
        default:
            return navigate("/games/BlitzBout/create")
    }

};
BlitzBoutCreator.propTypes = {
    email: PropTypes.string,
    gameKey: PropTypes.string,
    setGameKey: PropTypes.func,
    token: PropTypes.string,
    setErrorMsg: PropTypes.func
}

export default BlitzBoutCreator;  