import React from 'react'
import PropTypes from 'prop-types';
import AvatarPicture from '../components/AvatarPicture';
import useViewport from '../hooks/useViewport';

const BlitzBoutLeaderboard = ({ gameName, username, score, leaderboardData }) => {

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

    const blitzBoutPlayerListWrapperStyle = {

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#e3e3ed",
        fontFamily: "poppins",
        fontColor: "#334173",
        minHeight: "50%",
        paddingTop: width < baseline2 ? "6%" : "4%",
        paddingBottom: width < baseline2 ? "90%" : "18%"

    }

    // #e3e3ed

    const userDisplayStyle = {
        display: "flex",
        justifyContent: "space-around",
        minWidth: "80%",
        margin: "1%"
    }

    const scoreStyle = {
        backgroundColor: "#334173",
        minWidth: "10%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }

    const UserCard = (user) => {

        const userCardStyle = {
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "white",
            fontSize: "1.5em",
            fontFamily: "poppins",
            fontColor: "#334173",
            padding: "2%",
            margin: "2%",
            minWidth: "40%",
            maxWidth: "80%"
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
            margin: "3%",
            padding: "1%",
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

            <div id="blitzBoutPlayerListWrapper" style={blitzBoutPlayerListWrapperStyle}>
                <div style={userDisplayStyle}>
                    <div><h1>{username}</h1></div>
                    <div style={scoreStyle}><h1>{score}</h1></div>
                </div>
                <h1>Leaderboard: </h1>
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

    );

};
BlitzBoutLeaderboard.propTypes = {
    gameName: PropTypes.string,
    username: PropTypes.string,
    leaderboardData: PropTypes.array,
    score: PropTypes.number,
}

export default BlitzBoutLeaderboard;  