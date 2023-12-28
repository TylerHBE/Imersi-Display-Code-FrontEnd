const NoPage = () => {

  const pageWrapper = {

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "90vh"

  }

    return (
    <div id = "noPage" style = {pageWrapper}>
      <h1>404</h1>
    </div>
    );
  };
  
export default NoPage;  