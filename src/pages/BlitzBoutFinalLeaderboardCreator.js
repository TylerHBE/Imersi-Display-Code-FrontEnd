import React from 'react'
import PropTypes from 'prop-types';
import AvatarPicture from '../components/AvatarPicture';
import useViewport from '../hooks/useViewport';

const BlitzBoutFinalLeaderboardCreator = ({ gameName, leaderboardData, endGame }) => {

    const width = useViewport().width;
    const baseline2 = 500;

    const handleEndGame = (e) => {
        e.preventDefault();

        endGame();
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

    const blitzBoutPlayerListWrapperStyle = {

        display: "flex",
        padding: "1%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#e3e3ed",
        fontFamily: "poppins",
        fontColor: "#334173",
        minWidth: "80%",
        paddingTop: width < baseline2 ? "12%" : "4%",
        paddingBottom: width < baseline2 ? "72%" : "18%"

    }

    const mainContentWrapperStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#e3e3ed",
        fontFamily: "poppins",
        fontColor: "#334173",
        minHeight: "50%"
    }

    const topperStyle = {
        minWidth: "80%",
        margin: "3%",
        marginBottom: "0"
    }

    // #e3e3ed

    const blueEmphasisStyle = {
        //color: "#334173",
        fontWeight: "bold"
    }

    const nextButtonStyle = {
        float: "right",
        border: "grey solid 2px",
        padding: "1%"
    }

    const UserCard = (user) => {

        const userCardStyle = {
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "white",
            fontSize: "1em",
            fontFamily: "poppins",
            fontColor: "#334173",
            padding: "2%",
            margin: "2%",
            minWidth: width < baseline2 ? "70%" : "50%",
            maxWidth: "90%"
        }

        const textWrapperStyle = {
            overflow: "hidden",
            minWidth: "10%",
            margin: "1%",
            display: "flex",
            alignItems: "center"
        }

        const scoreStyle = {
            overflow: "hidden",
            minWidth: "10%",
            margin: "4%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#334173"
        }

        const imageStyle = {
            margin: "2%",
            alignItems: "center"
        }

        const mainLeaderboardStyle = {
            overflow: "hidden",
            minWidth: "50%",
            margin: "1%",
            display: "flex",
            alignItems: "center"
        }

        return (
            <div style={userCardStyle}>
                <div style = {mainLeaderboardStyle}>
                    <div style={textWrapperStyle}>
                        <h5>{user.user.place}.</h5>
                    </div>
                    <div style={imageStyle}>
                        <AvatarPicture avatar={user.user.avatar} dimension="60px" />
                    </div>
                    <div style={textWrapperStyle}>
                        <h5>{user.user.username}</h5>
                    </div>
                </div>
                <div style={scoreStyle}>
                    <h5>{user.user.score}</h5>
                </div>
            </div>
        )
    }
    UserCard.propTypes = {
        user: PropTypes.object
    }

    return (

        <div id="blitzBoutLobby">

            <main id="blitzBoutMainLobbyWrapper" style={blitzBoutMainLobbyWrapperStyle}>
                <h1>{gameName}</h1>
            </main>

            <div id="mainContentWrapper" style={mainContentWrapperStyle}>
                <div id="topper" style={topperStyle}>
                    <button onClick={(e) => handleEndGame(e)} style={nextButtonStyle}>End Game</button>
                </div>
                <div id="blitzBoutPlayerListWrapper" style={blitzBoutPlayerListWrapperStyle}>
                    <h1 style = {blueEmphasisStyle}>Final Leaderboard: </h1>
                    {leaderboardData ?
                        leaderboardData.map(
                            (user, index) =>
                                <UserCard key={index} user={user} />
                        )
                        :
                        <h1>Err</h1>
                    }

                </div>
            </div>


        </div>

    );

};
BlitzBoutFinalLeaderboardCreator.propTypes = {
    gameName: PropTypes.string,
    gameKey: PropTypes.string,
    leaderboardData: PropTypes.array,
    newQuestion: PropTypes.func,
    deleteUser: PropTypes.func
}

export default BlitzBoutFinalLeaderboardCreator;  