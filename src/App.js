import React, { useContext, useEffect } from "react";
import "./App.css";
import DashBoard from "./Components/DashBoard/DashBoard";
import LogIn from "./Components/LogIn/LogIn";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContext from "./Components/Store/auth-context";
import DashData, { postApi } from "./Components/Store/Database/DashData";
import axios from "axios";
function App() {
  const ctx = useContext(AuthContext);
  const projectName = ctx.projectData.projectName;
  const projectDescription = ctx.projectData.projectDescription;
  useEffect(() => {
    const postData = setTimeout(
      axios.post(postApi, {
        projectName: projectName,
        projectDescription: projectDescription,
      }),
      500
    );

    const dataCache = () => {
      clearTimeout(postData);
    };
    dataCache();
  }, [projectName, projectDescription]);

  return (
    <React.Fragment>
      <div>
        {ctx.logIn && <LogIn liftEvent={ctx.logInEvent}></LogIn>}
        {!ctx.logIn && (
          <DashBoard
            liftLogOut={ctx.logOutEvent}
            liftTabData={ctx.dataHandler}
          ></DashBoard>
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
