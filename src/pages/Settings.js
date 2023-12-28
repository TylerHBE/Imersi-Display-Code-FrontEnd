import AvatarPicture from "../components/AvatarPicture";
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import useViewport from "../hooks/useViewport";

const Settings = ({ avatar, username, email, token, setAvatar, setFavColor, favColor }) => {

    const [userAvatar, setUserAvatar] = useState(avatar);
    const [userFavColor, setUserFavColor] = useState(favColor)
    const avatarList = ["baseUser", "blackDog", "brownBear", "cat", "chicken", "giraffe", "gorilla", "lion", "meerkat", "orangeBear", "orangeDog", "panda", "rabbit", "seaLion", "shark", "wolf"];
    const width = useViewport().width;
    const baseline = 700;
    const baselineTwo = 1100;
    const baselineThree = 450;

    const handleAvatarSubmit = (e) => {

        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text

        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:8080/account/update-avatar",
            data: {
                email: email,
                avatar: userAvatar,
            },
            headers: { Authorization: `Bearer ${token}` }
        };

        // make the API call
        axios(configuration)
            .then((result) => {
                // set avatar and username
                setAvatar(result.data.avatar);
            })
            .catch((error) => {
                error = new Error();
            });

    }

    const handleAvatarChange = (e, changedAvatar) => {

        setUserAvatar(changedAvatar);

        // prevent the form from refreshing the whole page
        e.preventDefault();

    }

    const handleFavColorSubmit = (e) => {

        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text

        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:8080/account/update-favColor",
            data: {
                email: email,
                favColor: userFavColor,
            },
            headers: { Authorization: `Bearer ${token}` }
        };

        // make the API call
        axios(configuration)
            .then((result) => {
                // set avatar and username
                setFavColor(result.data.favColor);
            })
            .catch((error) => {
                error = new Error();
            });

    }

    const handleFavColorChange = (e, changedFavColor) => {

        setUserFavColor(changedFavColor);

        // prevent the form from refreshing the whole page
        e.preventDefault();

    }

    const welcomeWrapperStyle = {

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#e3e3ed",
        fontSize: width < baseline ? "1.75em" : "2.5em",
        paddingTop: "5%",
        fontFamily: "poppins",
        padding: width < baseline ? "4%" : "2%"

    }

    const settingsDivStyle = {

        backgroundColor: "#e3e3ed",
        fontFamily: "poppins"

    }

    const selectChoiceStyle = {

        display: "flex",
        flexDirection: "row",
        padding: width < baseline ? "20px" : "40px",
        backgroundColor: "white",
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        borderRadius: "30px"

    }

    const selectChoiceOuterStyle = {
        padding: width < baseline ? "20px" : "40px",
    }

    const choiceDisplayStyle = {

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: width < baselineThree ? "75px" : (width < baseline ? "200px" : (width < baselineTwo ? "250px" : "400px"))

    }

    const changeChoiceStyle = {
        padding: "12px 16px",
    }

    const blueEmphasisStyle = {
        color: "#334173",
        fontWeight: "bold"
    }

    const paragraphStyle = {
        color: "#514C48",
        fontSize: "0.8em"
    }

    const commentStyle = {
        color: "#514C48",
        fontSize: width < baselineThree ? "0.7em" : "1.2em"
    }

    const smallStyle = {
        fontSize: "0.8em"
    }


    const ChangeAvatarButton = ({ avatarNum }) => {

        const [isHover, setIsHover] = useState(false);

        const handleMouseEnter = () => {
            setIsHover(true);
        };
        const handleMouseLeave = () => {
            setIsHover(false);
        };

        const buttonStyle = {
            border: "none",
            backgroundColor: isHover ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0)",
        }

        return (
            <button onClick={(e) => handleAvatarChange(e, avatarList[avatarNum])} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={buttonStyle}>
                <AvatarPicture avatar={avatarList[avatarNum]} dimension={width < baseline ? "35px" : (width < baselineTwo ? "50px" : "100px")} />
            </button>
        );

    }
    ChangeAvatarButton.propTypes = {
        avatarNum: PropTypes.number,
    }

    const ColorBox = ({ color, width }) => {

        const colorBoxStyle = {
            border: "none",
            backgroundColor: color,
            minWidth: width,
            minHeight: width
        }

        return (
            <div id={`colorBox: ${color}`} style={colorBoxStyle}>
            </div>
        );

    }
    ColorBox.propTypes = {
        color: PropTypes.string,
        width: PropTypes.string
    }

    const ChangeColorButton = ({ color }) => {

        const [isHover, setIsHover] = useState(false);

        const handleMouseEnter = () => {
            setIsHover(true);
        };
        const handleMouseLeave = () => {
            setIsHover(false);
        };

        const buttonStyle = {
            border: "none",
            backgroundColor: isHover ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0)",
            padding: "2%"
        }

        return (
            <button onClick={(e) => handleFavColorChange(e, color)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={buttonStyle}>
                <ColorBox color={color} width={width < baseline ? "35px" : (width < baselineTwo ? "60px" : "80px")} />
            </button>
        );

    }
    ChangeColorButton.propTypes = {
        color: PropTypes.string,
    }

    return (

        <div id="settingsDiv" style={settingsDivStyle}>

            <main id="welcomeWrapper" style={welcomeWrapperStyle}>
                <AvatarPicture avatar={avatar} dimension="100px" />
                <h1><span style={blueEmphasisStyle}>Welcome</span>, {username}</h1>
                <p style={paragraphStyle}>Manage your info, preferences, and security to make Imersi the best possible experience for you.</p>
                <p style={paragraphStyle}>Account: {email}</p>
            </main>

            <div id="selectAvatarOuter" style={selectChoiceOuterStyle}>
                <div id="selectAvatar" style={selectChoiceStyle}>
                    <div id="avatarDisplay" style={choiceDisplayStyle}>
                        {width < baselineThree ? <h5 style={smallStyle}>Change your Avatar</h5> : (baseline ? <h5>Change your Avatar</h5> : <h3>Change your Avatar</h3>)}
                        <AvatarPicture avatar={userAvatar} dimension={width < baseline ? "50px" : (width < baselineTwo ? "70px" : "100px")} />
                        <p style={commentStyle}>Your current avatar</p>
                        <Form onSubmit={(e) => handleAvatarSubmit(e)}>
                            <Button variant="primary" type="submit" onClick={(e) => handleAvatarSubmit(e)}>
                                Change
                            </Button>
                        </Form>
                    </div>

                    <div id="changeAvatar" style={changeChoiceStyle}>
                        <ChangeAvatarButton avatarNum={0} />
                        <ChangeAvatarButton avatarNum={1} />
                        <ChangeAvatarButton avatarNum={2} />
                        <ChangeAvatarButton avatarNum={3} />
                        <ChangeAvatarButton avatarNum={4} />
                        <ChangeAvatarButton avatarNum={5} />
                        <ChangeAvatarButton avatarNum={6} />
                        <ChangeAvatarButton avatarNum={7} />
                        <ChangeAvatarButton avatarNum={8} />
                        <ChangeAvatarButton avatarNum={9} />
                        <ChangeAvatarButton avatarNum={10} />
                        <ChangeAvatarButton avatarNum={11} />
                        <ChangeAvatarButton avatarNum={12} />
                        <ChangeAvatarButton avatarNum={13} />
                        <ChangeAvatarButton avatarNum={14} />
                        <ChangeAvatarButton avatarNum={15} />
                    </div>

                </div>
            </div>

            <div id="selectFavColorOuter" style={selectChoiceOuterStyle}>
                <div id="selectFavColor" style={selectChoiceStyle}>
                    <div id="favColorDisplay" style={choiceDisplayStyle}>
                        {width < baselineThree ? <h5 style={smallStyle}>Change your user color</h5> : (baseline ? <h5>Change your user color</h5> : <h3>Change your user color</h3>)}
                        <ColorBox color={userFavColor} width={width < baseline ? "60px" : "100px"} />
                        <p style={commentStyle}>Your current color</p>
                        <Form onSubmit={(e) => handleFavColorSubmit(e)}>
                            <Button variant="primary" type="submit" onClick={(e) => handleFavColorSubmit(e)}>
                                Change
                            </Button>
                        </Form>
                    </div>

                    <div id="changeColor" style={changeChoiceStyle}>
                        <ChangeColorButton color="red" />
                        <ChangeColorButton color="blue" />
                        <ChangeColorButton color="green" />
                        <ChangeColorButton color="purple" />
                        <ChangeColorButton color="black" />
                        <ChangeColorButton color="brown" />
                        <ChangeColorButton color="yellow" />
                    </div>

                </div>
            </div>

        </div>

    );

};

export default Settings;

Settings.propTypes = {
    token: PropTypes.string,
    avatar: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    setAvatar: PropTypes.func.isRequired,
    setFavColor: PropTypes.func,
    favcolor: PropTypes.string
}