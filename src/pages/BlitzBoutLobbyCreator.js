import React from 'react'
import PropTypes from 'prop-types';
import AvatarPicture from "../components/AvatarPicture"
import useViewport from '../hooks/useViewport';

const BlitzBoutLobbyCreator = ({ users, gameName, gameKey, deleteUser, startGame }) => {

    const width = useViewport().width;
    const baseline1 = 300;
    const baseline2 = 500;
    const baseline3 = 700;
    const baseline4 = 900;

    const handleDeleteUser = (e, emailToDelete) => {
        e.preventDefault();

        deleteUser(emailToDelete);
    }

    const handleStartGame = (e) => {
        e.preventDefault();

        startGame();
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

    const reactiveText = {
        fontSize: width < baseline1 ? "0.6em" : ( width < baseline2 ? "0.7em" : ( width < baseline3 ? "0.8em" : ( width < baseline4 ? "0.9em" : "1em" ) ) )
    }

    const blitzBoutPlayerListWrapperStyle = {

        display: "flex",
        padding: "1%",
        flexDirection: "row",
        justifyItems: "center",
        backgroundColor: "#e3e3ed",
        fontFamily: "poppins",
        fontColor: "#334173",
        minWidth: "80%",
        paddingTop: width < baseline2 ? "12%" : "4%",
        paddingBottom: width < baseline2 ? "80%" : "18%"

    }

    // #e3e3ed

    const mainContentWrapperStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#e3e3ed",
        fontFamily: "poppins",
        fontColor: "#334173",
        minHeight: "50%"
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

    const topperStyle = {
        minWidth: "80%",
        margin: "3%",
        marginBottom: "0"
    }

    const titleStyle = {
        display: "inline-block",
        fontSize: width < baseline1 ? "0.85em" : ( width < baseline2 ? "0.9em" : ( width < baseline3 ? "0.95em" : ( width < baseline4 ? "1em" : "1.05em" ) ) )
    }

    const keyStyle = {
        float: "right",
        minWidth: "40%"
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

    const UserCard = (user) => {

        const userCardStyle = {
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "white",
            fontSize: "1em",
            fontFamily: "poppins",
            fontColor: "#334173",
            padding: "2%",
            margin: "2%",
            minWidth: "30%",
            maxWidth: width < baseline2 ? "48%" : "40%"
        }

        const textWrapperStyle = {
            overflow: "hidden",
            minWidth: "50%",
            margin: "1%",
            display: "flex",
            alignItems: "center"
        }

        const imageStyle = {
            float: "left",
            margin: "5%",
            alignItems: "center"
        }

        const buttonStyle = {
            minWidth: "15%",
            margin: "1%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: width < baseline1 ? "0.6em" : ( width < baseline2 ? "0.7em" : ( width < baseline3 ? "0.8em" : ( width < baseline4 ? "0.9em" : "1em" ) ) )
        }

        return (
            <div style={userCardStyle}>
                <div style={imageStyle}>
                    <AvatarPicture avatar={user.user.avatar} dimension={width < baseline2 ? "20px" : "40px"} />
                </div>
                <div style={textWrapperStyle}>
                    <h5 style = {reactiveText}>{user.user.username}</h5>
                </div>
                <button style={buttonStyle} onClick={(e) => handleDeleteUser(e, user.user.email)}>
                    X
                </button>
            </div>
        )
    }
    UserCard.propTypes = {
        user: PropTypes.object
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
                        <h1 style = {reactiveText} ><span style={blueEmphasisStyle}>{gameKey}</span></h1>
                    </div>
                </div>
            </main>

            <div id="mainContentWrapper" style={mainContentWrapperStyle}>
                <div id="topper" style={topperStyle}>
                    <h1 style={titleStyle}>{gameName}</h1>
                    <button onClick={(e) => handleStartGame(e)} style={nextButtonStyle}>Start game!</button>
                </div>
                <div id="blitzBoutPlayerListWrapper" style={blitzBoutPlayerListWrapperStyle}>
                    {
                        users.map(
                            (user, index) =>
                                <UserCard key={index} user={user} />
                        )
                    }
                    {
                        users.length === 0 ? <h1>No Players yet.</h1> : <></>
                    }
                </div>
            </div>

        </div>
    );

};
BlitzBoutLobbyCreator.propTypes = {
    users: PropTypes.array,
    gameName: PropTypes.string,
    gameKey: PropTypes.string,
    deleteUser: PropTypes.func,
    startGame: PropTypes.func,
    errorMsg: PropTypes.string
}

export default BlitzBoutLobbyCreator;  