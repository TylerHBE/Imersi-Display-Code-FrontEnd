import React from 'react'
import PropTypes from 'prop-types';
import AvatarPicture from "../components/AvatarPicture"
import useViewport from '../hooks/useViewport';

const BlitzBoutLobby = ({ users, gameName, gameKey }) => {

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
        padding: "1%",
        flexDirection: "row",
        justifyItems: "center",
        backgroundColor: "#e3e3ed",
        fontSize: "2.5em",
        fontFamily: "poppins",
        fontColor: "#334173",
        paddingTop: width < baseline2 ? "8%" : "4%",
        paddingBottom: width < baseline2 ? "95%" : "18%"

    }

    // #e3e3ed

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
            minWidth: "20%",
            maxWidth: "40%"
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

        return (
            <div style={userCardStyle}>
                <div style={imageStyle}>
                    <AvatarPicture avatar={user.user.avatar} dimension="60px" />
                </div>
                <div style={textWrapperStyle}>
                    <h5>{user.user.username}</h5>
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
                {
                    users.map(
                        (user, index) =>
                            <UserCard key={index} user={user} />
                    )
                }
            </div>

        </div>

    );

};
BlitzBoutLobby.propTypes = {
    users: PropTypes.array,
    gameName: PropTypes.string,
    gameKey: PropTypes.string
}

export default BlitzBoutLobby;  