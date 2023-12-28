import React from 'react'
import PropTypes from 'prop-types';
import useViewport from '../hooks/useViewport';

const BlitzBoutQuestionCreator = ({ gameName, gameKey, questionData, newAnswers }) => {

    const width = useViewport().width;
    const baseline1 = 300;
    const baseline2 = 500;
    const baseline3 = 700;
    const baseline4 = 900;

    const handleNewAnswers = (e) => {
        e.preventDefault();

        newAnswers();
    }

    const blitzBoutMainLobbyWrapperStyle = {

        display: "flex",
        padding: "2%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#334173",
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
        paddingTop: width < baseline2 ? "12%" : "4%",
        paddingBottom: width < baseline2 ? "60%" : "18%"

    }

    const joinGamePanelStyle = {
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "1%",
        margin: "2%",
        display: "flex",
        justifyContent: "space-around",
        minWidth: "80%"
    }

    const keyStyle = {
        float: "right",
        minWidth: "40%"
    }

    const topperStyle = {
        minWidth: "80%",
        margin: "3%",
        marginBottom: "0"
    }

    const titleStyle = {
        display: "inline-block",
        fontSize: width < baseline1 ? "0.8em" : ( width < baseline2 ? "0.85em" : ( width < baseline3 ? "0.9em" : ( width < baseline4 ? "0.95em" : "1em" ) ) )
    }

    const blitzBoutQuestionsStyle = {
        display: "flex",
        justifyContent: "space-around",
        minWidth: "80%"
    }

    const reactiveText = {
        fontSize: width < baseline1 ? "0.6em" : ( width < baseline2 ? "0.7em" : ( width < baseline3 ? "0.8em" : ( width < baseline4 ? "0.9em" : "1em" ) ) )
    }

    // #e3e3ed

    const blueEmphasisStyle = {
        //color: "#334173",
        fontWeight: "bold"
    }

    const nextButtonStyle = {
        float: "right",
        border: "grey solid 2px",
        padding: "1%",
        fontSize: width < baseline1 ? "0.8em" : ( width < baseline2 ? "0.85em" : ( width < baseline3 ? "0.9em" : ( width < baseline4 ? "0.95em" : "1em" ) ) )
    }

    const mainContentWrapperStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#e3e3ed",
        fontFamily: "poppins",
        fontColor: "#334173"
    }

    const AnswerCard = (answer) => {

        const userCardStyle = {
            display: "flex",
            flexDirection: "row",
            justifyItems: "center",
            backgroundColor: "white",
            fontSize: "2.5em",
            fontFamily: "poppins",
            fontColor: "#334173",
            padding: "2%",
            margin: "2%",
            minWidth: "30%",
        }

        const textStyle = {
            display: "inline-block",
            fontSize: "0.6em"
        }

        return (
            <div style={userCardStyle}>
                <h1 style={textStyle}>{answer.answer.answerText}</h1>
            </div>
        )
    }
    AnswerCard.propTypes = {
        answer: PropTypes.object
    }

    return (

        <div id="blitzBoutLobby">

            <main id="blitzBoutMainLobbyWrapper" style={blitzBoutMainLobbyWrapperStyle}>
                <div id="joinGamePanel" style={joinGamePanelStyle}>
                    <div id="Join">
                        <p>Join at</p>
                        <h5 style = {reactiveText}><span style={blueEmphasisStyle}>http://localhost:3000/games/BlitzBout/join</span></h5>
                    </div>
                    <div style={keyStyle}>
                        <p>GameKey:</p>
                        <h1 style = {reactiveText}><span style={blueEmphasisStyle}>{gameKey}</span></h1>
                    </div>
                </div>
            </main>

            <div id="mainContentWrapper" style={mainContentWrapperStyle}>
                <div id="topper" style={topperStyle}>
                    <h1 style={titleStyle}>{gameName}</h1>
                    <button onClick={(e) => handleNewAnswers(e)} style={nextButtonStyle}>Reveal Answers</button>
                </div>
                <div id="blitzBoutQuestionWrapper" style={blitzBoutQuestionWrapperStyle}>
                    <div>
                        {questionData ? <h1>{questionData.question}</h1> : <h1>Err</h1>}
                    </div>
                    <div id = "blitzBoutQuestions" style = {blitzBoutQuestionsStyle}>
                        {questionData ?
                            (questionData.answers ?
                                questionData.answers.map(
                                    (answer, index) =>
                                        <AnswerCard key={index} answer={answer} />
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

        </div>

    );

};
BlitzBoutQuestionCreator.propTypes = {
    gameName: PropTypes.string,
    gameKey: PropTypes.string,
    questionData: PropTypes.object,
    newAnswers: PropTypes.func
}

export default BlitzBoutQuestionCreator;  