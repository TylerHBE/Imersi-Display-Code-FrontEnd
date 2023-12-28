import useViewport from "../hooks/useViewport";

const AboutUs = () => {

  const width = useViewport().width;
  const baseline1 = 300;
  const baseline2 = 500;
  const baseline3 = 700;
  const baseline4 = 900;

  const aboutMainWrapperStyle = {

    display: "flex",
    flexDirection: "column",
    backgroundColor: "#e3e3ed",
    fontSize: width < baseline1 ? "1em" : ( width < baseline2 ? "1.5em" : ( width < baseline3 ? "1.75em" : ( width < baseline4 ? "2em" : "2.5em" ) ) ),
    fontFamily: "poppins",
    paddingLeft: "6%",
    paddingBottom: "3%",
    paddingTop: width < baseline1 ? "8%" : ( width < baseline2 ? "7%" : ( width < baseline3 ? "6%" : ( width < baseline4 ? "5%" : "4%" ) ) ),
    margin: "0"

  }

  const aboutInfoWrapperStyle = {

    display: "flex",
    flexDirection: "column",
    backgroundColor: "#e3e3ed",
    color: "black",
    fontFamily: "roboto",
    fontSize: width < baseline1 ? "1em" : ( width < baseline2 ? "1.2em" : ( width < baseline3 ? "1.3em" : ( width < baseline4 ? "1.4em" : "1.5em" ) ) ),
    paddingTop: "1%",
    paddingBottom: "1%",
    paddingLeft: "6%",
    paddingRight: "4%",

  }

  const paragraphStyle = {
    color: "#514C48",
  }

  const headingStyle = {
    marginBottom: "0"
  }

  return (

    <div id="aboutDiv">

      <main id="aboutMainWrapper" style={aboutMainWrapperStyle}>
        <h1 style={headingStyle}>About Us.</h1>
      </main>

      <div id="whatAreWeWrapper" style={aboutInfoWrapperStyle}>
        <h2 style={headingStyle} >What is Imersi?</h2>
        <p style={paragraphStyle}>Imersi is a new solution to learning language that specializes in teaching language skills
          with imersive games and connecting native speakers to language learners. Imersi believes that the best way to learn a language
          is to hear it from native speakers- and with its fun games, it connects language students to each other, enforcing speaking
          and communication skills.</p>
      </div>

      <div id="whatDoWeDoWrapper" style={aboutInfoWrapperStyle}>
        <h2 style={headingStyle} >What does Imersi do?</h2>
        <p style={paragraphStyle}>Imersi aims to teach students language by forcing them to communicate with each other and
          allowing them the opportunity to connect with native language speakers through its cooperative games. Additionally,
          Imersi offers courses and independent games for students to self-study and teachers to give assignments on.</p>
      </div>

      <div id="whoAreWeDoWrapper" style={aboutInfoWrapperStyle}>
        <h2 style={headingStyle} >Who is Imersi?</h2>
        <p style={paragraphStyle}>Imersi is an independent project run by MCHS student Tyler Hickerson, started in November of 2023.</p>
      </div>

    </div>

  );

};

export default AboutUs;  