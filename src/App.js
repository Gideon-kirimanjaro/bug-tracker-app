import React, { useState } from "react";
import "./App.css";
import DashBoard from "./Components/DashBoard/DashBoard";
import LogIn from "./Components/LogIn/LogIn";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [logIn, setLogIn] = useState(true);
  const logInEvent = (passedEvent) => {
    setLogIn(passedEvent);
  };
  const logOutEvent = (passedEvent) => {
    setLogIn(passedEvent);
  };

  return (
    <React.Fragment>
      <div>
        {logIn && <LogIn liftEvent={logInEvent}></LogIn>}
        {!logIn && <DashBoard liftLogOut={logOutEvent}></DashBoard>}
      </div>
    </React.Fragment>
  );
}

export default App;
