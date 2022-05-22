import React, { useState } from "react";
import "./App.css";
import DashBoard from "./Components/DashBoard/DashBoard";
import LogIn from "./Components/LogIn/LogIn";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContext from "./Components/Store/auth-context";
function App() {
  const [logIn, setLogIn] = useState(true);
  const logInEvent = (passedEvent) => {
    setLogIn(passedEvent);
  };
  const logOutEvent = (passedEvent) => {
    setLogIn(passedEvent);
  };
  const dataHandler = (projectName, projectDescription) => {
    console.log(">>>The data", projectName, projectDescription);
  };
  return (
    <React.Fragment>
      <div>
        <AuthContext.Provider value={{ logIn, setLogIn }}>
          {logIn && <LogIn liftEvent={logInEvent}></LogIn>}
          {!logIn && (
            <DashBoard
              liftLogOut={logOutEvent}
              liftTabData={dataHandler}
            ></DashBoard>
          )}
        </AuthContext.Provider>
      </div>
    </React.Fragment>
  );
}

export default App;
