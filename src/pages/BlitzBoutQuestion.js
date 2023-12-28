import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react';
import useViewport from '../hooks/useViewport';

const BlitzBoutQuestion = ({ gameName, username, score, questionData, questionState, newAnswer }) => {

    const width = useViewport().width;
    const baseline2 = 500;

    const [userAnswer, setUserAnswer] = useState(0);

    const handleNewAnswer = (e, answer) => {
        e.preventDefault();
        setUserAnswer(answer)
        newAnswer(answer);
    }

    const blitzBoutMainLobbyWrapperStyle = {

        display: "flex",
        padding: "2%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#334173",
        fontSize: "2.5em",
        fontFamily: "poppins",
        fontColor: "white"

    }

    const blitzBoutQuestionWrapperStyle = {

        display: "flex",
        padding: "1%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#e3e3ed",
        fontFamily: "poppins",
        fontColor: "#334173",
        minWidth: "80%",
        paddingTop: width < baseline2 ? "6%" : "4%",
        paddingBottom: width < baseline2 ? "90%" : "18%"

    }

    const blitzBoutQuestionsStyle = {
        display: "flex",
        justifyContent: "space-around",
        minWidth: "80%",
        margin: "2%"
    }

    const userDisplayStyle = {
        display: "flex",
        justifyContent: "space-around",
        minWidth: "80%"
    }

    const scoreStyle = {
        backgroundColor: "#334173",
        minWidth: "10%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }

    // #e3e3ed

    const AnswerCard = ({ answer, index }) => {

        const answeredStyle = {
            display: "flex",
            flexDirection: "row",
            justifyItems: "center",
            backgroundColor: "white",
            fontSize: "2.4em",
            fontFamily: "poppins",
            fontColor: "#334173",
            padding: "2%",
            margin: "2%",
            minWidth: "25%"
        }

        const userAnswerStyle = {
            display: "flex",
            flexDirection: "row",
            justifyItems: "center",
            backgroundColor: "rgba(0,0,0,0.05)",
            fontSize: "2.4em",
            fontFamily: "poppins",
            fontColor: "#334173",
            padding: "2%",
            margin: "2%",
            minWidth: "25%"
        }

        const answerButtonStyle = {
            display: "flex",
            flexDirection: "row",
            justifyItems: "center",
            backgroundColor: "white",
            fontSize: "1em",
            fontFamily: "poppins",
            fontColor: "#334173",
            padding: "2%",
            margin: "2%",
            minWidth: "25%"
        }

        const textStyle = {
            display: "inline-block",
            fontSize: "0.6em"
        }

        return (

            questionState === "answered" ?
                <div style={userAnswer === index ? userAnswerStyle : answeredStyle}>
                    <h1 style={textStyle}>{answer.answerText}</h1>
                </div>
                :
                <button style={answerButtonStyle} onClick={(e) => handleNewAnswer(e, index)}>{answer.answerText}</button>

        )
    }
    AnswerCard.propTypes = {
        answer: PropTypes.object,
        index: PropTypes.number
    }

    return (

        <div id="blitzBoutLobby">

            <main id="blitzBoutMainLobbyWrapper" style={blitzBoutMainLobbyWrapperStyle}>
                <h1>{gameName}</h1>
            </main>

            <div id="blitzBoutQuestionWrapper" style={blitzBoutQuestionWrapperStyle}>
                <div style={userDisplayStyle}>
                    <div><h1>{username}</h1></div>
                    <div style={scoreStyle}><h1>{score}</h1></div>
                </div>
                <div>
                    {questionData ? <h1>{questionData.question}</h1> : <h1>Err</h1>}
                </div>
                <div id="blitzBoutQuestions" style={blitzBoutQuestionsStyle}>
                    {questionData ?
                        (questionData.answers ?
                            questionData.answers.map(
                                (answer, index) =>
                                    <AnswerCard key={index} answer={answer} index={index} />
                            )
                            :
                            <h1>Err</h1>
                        )
                        :
                        <h1>Err</h1>
                    }
                </div>


            </div>

        </div>

    );

};
BlitzBoutQuestion.propTypes = {
    gameName: PropTypes.string,
    questionData: PropTypes.object,
    questionState: PropTypes.string,
    newAnswer: PropTypes.func, 
    username: PropTypes.string,
    score: PropTypes.number
}

export default BlitzBoutQuestion;  