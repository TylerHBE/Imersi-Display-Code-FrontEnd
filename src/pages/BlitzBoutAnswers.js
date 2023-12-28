import React from 'react'
import PropTypes from 'prop-types';
import useViewport from '../hooks/useViewport';

const BlitzBoutAnswers = ({ gameName, username, answerData, answerScore, score, userAnswer }) => {

    const width = useViewport().width;
    const baseline2 = 500;

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

    const blitzBoutAnswersStyle = {
        display: "flex",
        justifyContent: "space-around",
        minWidth: "80%",
        margin: "2%"
    }

    // #e3e3ed

    const blitzBoutAnswersWrapperStyle = {

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

    const AnswerCard = ({ answer, index }) => {

        const userCardStyleRight = {
            backgroundColor: "green",
            fontSize: "1em",
            fontFamily: "poppins",
            fontColor: "#334173",
            padding: "2%",
            margin: "2%",
            minWidth: "25%"
        }

        const userCardStyleWrong = {
            backgroundColor: "red",
            fontSize: "1em",
            fontFamily: "poppins",
            fontColor: "#334173",
            padding: "2%",
            margin: "2%",
            minWidth: "25%"
        }

        const userCardStyleUndone = {
            backgroundColor: "rgba(0,0,0,0.05)",
            fontSize: "1em",
            fontFamily: "poppins",
            fontColor: "#334173",
            padding: "2%",
            margin: "2%",
            minWidth: "25%"
        }

        const textStyle = {
            fontSize: "2em",
            margin: "0"
        }

        const boxStyle = {
            width: "100%",
            borderTop: "solid black 2px",
            margin: "0"
        }

        return (
            <div style={answer.state ? userCardStyleRight : (userAnswer === index ? userCardStyleWrong : userCardStyleUndone)}>
                <h1 style={textStyle}>{answer.answerText}</h1>
                {userAnswer === index ? <p style={boxStyle}>+{answerScore}</p> : <></>}
            </div>
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

            <div id="blitzBoutAnswersWrapper" style={blitzBoutAnswersWrapperStyle}>
                <div style={userDisplayStyle}>
                    <div><h1>{username}</h1></div>
                    <div style={scoreStyle}><h1>{score}</h1></div>
                </div>
                <div>
                    {answerData ? <h1>{answerData.question}</h1> : <h1>Err</h1>}
                </div>
                <div id="blitzBoutAnswers" style={blitzBoutAnswersStyle}>
                    {answerData ?
                        (answerData.answers ?
                            answerData.answers.map(
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
BlitzBoutAnswers.propTypes = {
    gameName: PropTypes.string,
    username: PropTypes.string,
    answerData: PropTypes.object,
    answerScore: PropTypes.number,
    score: PropTypes.number,
    userAnswer: PropTypes.number
}

export default BlitzBoutAnswers;  