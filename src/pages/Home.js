import SignUpButton from "../components/SignUpButton";
import useViewport from "../hooks/useViewport";

const Home = () => {

  const width = useViewport().width;
  const baseline1 = 300;
  const baseline2 = 500;
  const baseline3 = 700;
  const baseline4 = 900;

  const homeMainWrapperStyle = {

    display: "flex",
    paddingTop: "5%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#e3e3ed",
    fontSize: width < baseline1 ? "1em" : ( width < baseline2 ? "1.5em" : ( width < baseline3 ? "1.75em" : ( width < baseline4 ? "2.0em" : "2.4em" ) ) ),
    fontFamily: "poppins"

  }

  const homeJoinWrapperStyle = {

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#e3e3ed",
    color: "black",
    fontFamily: "roboto",
    padding: width < baseline2 ? "6%" : "3%"

  }

  const homeInfoWrapperStyle = {

    display: "flex",
    flexDirection: "column",
    backgroundColor: "#e3e3ed",
    color: "black",
    fontFamily: "roboto",
    padding: width < baseline2 ? "5%" : "2%",
    fontSize: width < baseline1 ? "0.8em" : ( width < baseline2 ? "1em" : ( width < baseline3 ? "1.25em" : ( width < baseline4 ? "1.5em" : "1.75em" ) ) ),

  }

  const blueEmphasisStyle = {
    color: "#334173",
    fontWeight: "bold"
  }

  const titleStyle = {
    fontSize: width < baseline1 ? "1em" : ( width < baseline2 ? "1.25em" : ( width < baseline3 ? "1.5em" : ( width < baseline4 ? "1.75em" : "2.0em" ) ) ),
  }

  const paragraphStyle = {
    color: "#514C48",
    fontSize: width < baseline1 ? "0.45em" : ( width < baseline2 ? "0.50em" : ( width < baseline3 ? "0.6em" : ( width < baseline4 ? "0.7em" : "0.7em" ) ) ),
  }

  const paragraphColorStyle = {
    color: "#514C48",
  }

  const boldStyle = {
    fontWeight: "bold"
  }

    return (

      <div id = "homeDiv">

        <main id = "homeMainWrapper" style = {homeMainWrapperStyle}>
          <h1 style = {titleStyle}><span style = {blueEmphasisStyle}>Imerse</span> yourself in <span style = {blueEmphasisStyle}>language</span>.</h1>
          <p style = {paragraphStyle}>Join the language revolution with any of our offered courses and games.</p>
        </main>

        <div id = "homeJoinWrapper" style = {homeJoinWrapperStyle}>
          <SignUpButton />
        </div>

        <div id = "homeInfoWrapper" style = {homeInfoWrapperStyle}>
          <h1 style = {boldStyle}>Updates</h1>

          <h3 style = {boldStyle}>December 26:</h3>
          <p style = {paragraphColorStyle}>BlitzBout not refreshing correctly after a page reload has been fixed. Follow for more updates.</p>

          <h3 style = {boldStyle}>December 27:</h3>
          <p style = {paragraphColorStyle}>BlitzBout, Imersi's first game has finally been finished! Find it on the dashboard and play quiz games with students to enrich language skills- and unlike Kahoot, you have easy access to certain features like making your own quizzes for free! Follow for more updates.</p>
        
          <h3 style = {boldStyle}>December 28:</h3>
          <p style = {paragraphColorStyle}>Imersi is officially online and free to use! Follow for more updates.</p>
        </div>

      </div>
        
    );
    
  };
  
export default Home;  