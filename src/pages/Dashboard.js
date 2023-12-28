import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Dashboard = () => {

  const pageWrapper = {

    display: "flex",
    flexDirection: "column",
    minHeight: "90vh",
    backgroundColor: "#e3e3ed",

  }

  const titleText = {

    color: "black",
    fontSize: "2em",
    padding: "2%",
    textDecoration: "underline"

  }

  const gamesDisplayStyle = {

    display: "flex",
    flexDirection: "row",
    padding: "2%",
    paddingTop: "0.5%"

  }

  const gamesDisplayOuterStyle = {
    margin: "20px",
    padding: "20px",
    backgroundColor: "white",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    borderRadius: "30px"
  }

  const BlitzBoutButton = () => {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
      setIsHover(true);
    };
    const handleMouseLeave = () => {
      setIsHover(false);
    };

    const buttonStyle = {
      border: "black 2px solid",
      backgroundColor: isHover ? "rgba(0, 0, 0, 0.05)" : "rgba(0, 0, 0, 0)",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minWidth: "240px",
      minHeight: "240px",
      borderRadius: "30px"
    }

    const titleBoxStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }

    const pictureStyle = {
      height: "145px",
      width: "145px",
      borderRadius: "50%"
    };

    const pTextStyle = {
      fontSize: "0.9em"
    }

    return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={buttonStyle}>
        <div style={titleBoxStyle}>
          <img src="./images/games/BlitzBout/titleImageCrown.png" alt="BlitzBout Title Crown" style={pictureStyle} />
          <h2>BlitzBout</h2>
        </div>
        <p style={pTextStyle}><Link to="/games/BlitzBout/create">Create game</Link> | <Link to="/games/BlitzBout/join">Join game</Link></p>
      </div>
    );

  }

  return (
    <div id="dashboard" style={pageWrapper}>
      <h1 style={titleText}>Dashboard</h1>
      <div id="gamesDisplayOuter" style={gamesDisplayOuterStyle}>
        <h2 style={titleText}>Games</h2>
        <div id="gamesDisplay" style={gamesDisplayStyle}>
          <BlitzBoutButton />
        </div>
      </div>
    </div>
  );

};

export default Dashboard;  