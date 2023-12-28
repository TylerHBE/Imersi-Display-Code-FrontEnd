import useViewport from "../hooks/useViewport";

const TermsAndConditions = () => {

  const width = useViewport().width;
  const baseline1 = 300;
  const baseline2 = 500;
  const baseline3 = 700;
  const baseline4 = 900;

  const termsAndConditionsMainWrapperStyle = {

    display: "flex",
    flexDirection: "column",
    backgroundColor: "#e3e3ed",
    fontSize: "2.25em",
    fontFamily: "poppins",
    paddingLeft: "6%",
    paddingBottom: "3%",
    paddingTop: width < baseline1 ? "8%" : ( width < baseline2 ? "7%" : ( width < baseline3 ? "6%" : ( width < baseline4 ? "5%" : "4%" ) ) ),
    margin: "0"

  }

  const termsAndConditionsInfoWrapperStyle = {

    display: "flex",
    flexDirection: "column",
    backgroundColor: "#e3e3ed",
    color: "black",
    fontFamily: "roboto",
    fontSize: width < baseline1 ? "1em" : ( width < baseline2 ? "1.2em" : ( width < baseline3 ? "1.3em" : ( width < baseline4 ? "1.4em" : "1.5em" ) ) ),
    paddingLeft: "6%",
    paddingRight: "4%",

  }

  const signatureWrapperStyle = {

    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    backgroundColor: "#e3e3ed",
    color: "black",
    fontFamily: "roboto",
    fontSize: "1.4em",
    paddingRight: "6%"

  }

  const signatureInnerWrapperStyle = {

    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    marginBottom: "4%"

  }

  const paragraphStyle = {
    color: "#514C48",
    paddingBottom: "1%",
  }

  const clauseNumberingStyle = {
    color: "#4A4A4A",
    fontWeight: "700"
  }

  const dateStyle = {
    color: "#514C48",
    marginTop: "1%",
    marginBottom: "1.5%",
    fontSize: "0.8em"
  }

  const headingStyle = {
    marginBottom: "0",
    paddingTop: "1%",
  }

    return (

      <div id = "termsAndConditionsDiv">

        <main id = "termsAndConditionsMainWrapper" style = {termsAndConditionsMainWrapperStyle}>
          <h1 style = {headingStyle}>Imersi | Imersi End User Terms</h1>
          <p style={dateStyle}>October 2023.</p>
        </main>

        <div id = "generalScopeWrapper" style = {termsAndConditionsInfoWrapperStyle}>
          <h2 style = {headingStyle} >1. General | Scope</h2>
          <p style={paragraphStyle}><span style = {clauseNumberingStyle}>1.1</span> These Imersi End User Terms (“Terms”) apply to all contracts between Imersi and its customers to whom 
          Imersi provides Services for personal, family or household use, and not for business or commercial purposes (“you”).</p>
          <p style={paragraphStyle}><span style = {clauseNumberingStyle}>1.2</span> These Terms shall govern each order for Services, 
          whether placed online, via email or by in-app ordering process or otherwise, agreed between you and Imersi (each an “Order”). 
          The terms and conditions of each agreed Order shall incorporate these Terms.</p>
          <p style={paragraphStyle}><span style = {clauseNumberingStyle}>1.3</span> These Terms shall also apply to all future Orders 
          between you and Imersi even if Imersi does not refer to them in each individual case. By using or accessing the Services, 
          you are deemed to have agreed to these Terms.</p>
          <p style={paragraphStyle}><span style = {clauseNumberingStyle}>1.4</span> These Terms apply to the exclusion of all others. 
          Different, conflicting or supplementary terms shall only become part of an Order if and to the extent that Imersi has 
          consented to such terms in writing.</p>
          <p style={paragraphStyle}><span style = {clauseNumberingStyle}>1.5</span> Individual agreements between you and Imersi shall 
          take priority over these Terms if mutually agreed to in writing.</p>
          <p style={paragraphStyle}><span style = {clauseNumberingStyle}>1.6</span> Where these Terms use the expressions 
          ‘in writing’, ‘in written form’ or variations thereof, this shall mean ‘in writing’ within the meaning of the United States 
          Civil Code. The electronic exchange of copies of documents signed by hand as well as documents signed with a simple 
          electronic signature (e.g. DocuSign or Adobe Sign) shall suffice therefore. Unless expressly stated otherwise in these 
          Terms, simple emails shall not suffice.</p>
          <p style={paragraphStyle}><span style = {clauseNumberingStyle}>1.7</span> Unless stated otherwise in these Terms, any notices 
          and declarations given or made by you to Imersi, must be made at least via email or via other electronic methods in text form, 
          as permitted by the United States Civil Code.</p>
        </div>

        <div id = "signatureWrapper" style = {signatureWrapperStyle}>
          <div id = "signatureInnerWrapper" style = {signatureInnerWrapperStyle}>
            <h3 style = {headingStyle}>Imersi</h3>
            <p>October 2023</p>
          </div>
        </div>

      </div>
        
    );
    
  };
  
export default TermsAndConditions;  