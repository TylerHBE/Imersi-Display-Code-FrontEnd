// React libs
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation, Navigate, } from "react-router-dom";
// Components
import NavBar from "./components/NavBar"
import FooterComponent from './components/FooterComponent';
// Pages
import Home from "./pages/Home";
import NoPage from "./pages/NoPage"
import LogIn from './pages/LogIn';
import TermsAndConditions from './pages/TermsAndConditions';
import AboutUs from './pages/AboutUs';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import SignUp from './pages/SignUp';
import CreateBlitzBoutGame from './pages/CreateBlitzBoutGame';
import JoinBlitzBoutGame from './pages/JoinBlitzBoutGame';
import BlitzBoutPlay from './pages/BlitzBoutPlay';
import CreateNewBlitzBoutGame from './pages/CreateNewBlitzBoutGame';
import BlitzBoutCreator from './pages/BlitzBoutCreator';
import EditBlitzBoutGame from './pages/EditBlitzBoutGame';
// Hooks
import useToken from './hooks/useToken';
import useAvatar from './hooks/useAvatar';
import useUsername from './hooks/useUsername';
import useEmail from './hooks/useEmail';
import useFavColor from './hooks/useFavColor';
import useGameKey from './hooks/useGameKey';

export default function App() {

  const { token, setToken } = useToken();
  const { avatar, setAvatar } = useAvatar("");
  const { username, setUsername } = useUsername("");
  const { email, setEmail } = useEmail("");
  const { favColor, setFavColor } = useFavColor("");
  const [gameSettings, setGameSettings] = useState([]);
  const { gameKey, setGameKey } = useGameKey("");
  const [chosenGame, setChosenGame] = useState("");
  const [errorMsg, setErrorMsg] = useState("default")

  const [display, setDisplay] = useState(false)

  const msgStyle = {
    display: display ? (display === "default" ? "" : "none") : "none",
    position: "absolute",
    top: "80%",
    left: "35%",
    backgroundColor: "red",
    fontSize: "0.7em",
    padding: "1%",
    width: "30%",
    overflow: "hidden",
    borderRadius: "10px"
  }

  const ErrorMsg = () => {
    return (
      <div style = {msgStyle}>
        <p>{errorMsg}</p>
      </div>
    )
  }

  useEffect(() => {
    setDisplay(true)
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setDisplay(false)
    }, 3000)

    return () => {
      clearTimeout(timeId)
    }
  }, [errorMsg]);

  const SecureAccountRoutes = () => {

    const location = useLocation()

    if (!token) {
      if (location.pathname === "/account/sign-up" || location.pathname === "/account/log-in") {
        return (
          <Outlet />
        );
      }
      else {
        return (
          <Navigate to="/account/log-in" />
        );
      }
    }
    else if (token && (location.pathname === "/account/sign-up" || location.pathname === "/account/log-in")) {
      return (
        <Navigate to="/account/dashboard" />
      );
    }
    else {
      return (
        <Outlet />
      );
    }

  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><NavBar token={token} avatar={avatar} username={username} email={email} favColor={favColor} /><FooterComponent /><ErrorMsg/></>}>

          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Terms-and-Conditions" element={<TermsAndConditions />} />
          <Route path="About-Us" element={<AboutUs />} />

          <Route path="account/" element={<SecureAccountRoutes />}>
            <Route index element={<Settings token={token} avatar={avatar} username={username} email={email} setAvatar={setAvatar} />} />
            <Route path="settings" element={<Settings token={token} avatar={avatar} username={username} email={email} setAvatar={setAvatar} setFavColor={setFavColor} favColor={favColor} />} />
            <Route path="log-in" element={<LogIn setToken={setToken} setAvatar={setAvatar} setUsername={setUsername} setEmail={setEmail} token={token} setFavColor={setFavColor} />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="sign-up" element={<SignUp setToken={setToken} setAvatar={setAvatar} setUsername={setUsername} setEmail={setEmail} setFavColor={setFavColor} />} />
            <Route path="*" element={<NoPage />} />
          </Route>

          <Route path="games/" element={<SecureAccountRoutes />}>
            <Route index element={<Navigate to="/account/dashboard" />} />
            <Route path="BlitzBout/" element={<SecureAccountRoutes />}>
              <Route index element={<JoinBlitzBoutGame token={token} email={email} username={username} avatar={avatar} setGameKey={setGameKey} />} />
              <Route path="create" element={<CreateBlitzBoutGame token={token} avatar={avatar} username={username} email={email} gameSettings={gameSettings} setGameSettings={setGameSettings} setGameKey={setGameKey} setChosenGame={setChosenGame} chosenGame={chosenGame} />} />
              <Route path="create-new" element={<CreateNewBlitzBoutGame token={token} email={email} setGameSettings={setGameSettings} />} />
              <Route path="join" element={<JoinBlitzBoutGame token={token} email={email} username={username} avatar={avatar} setGameKey={setGameKey} />} />
              <Route path="play" element={<BlitzBoutPlay username = {username} email={email} gameKey={gameKey} setGameKey={setGameKey} token={token} setErrorMsg={setErrorMsg}/>} />
              <Route path="creator" element={<BlitzBoutCreator email={email} gameKey={gameKey} setGameKey={setGameKey} token={token} setErrorMsg={setErrorMsg}/>} />
              <Route path="edit" element={<EditBlitzBoutGame email={email} gameSettings={gameSettings} setGameSettings={setGameSettings} token={token} chosenGame={chosenGame} />} />
              <Route path="*" element={<NoPage />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Route>

          <Route path="*" element={<NoPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}