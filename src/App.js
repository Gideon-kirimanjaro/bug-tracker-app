import React, { useContext, useEffect } from "react";
import "./App.css";
import DashBoard from "./Components/DashBoard/DashBoard";
import LogIn from "./Components/LogIn/LogIn";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContext from "./Components/Store/auth-context";
function App() {
  const ctx = useContext(AuthContext);
  if (ctx.dataHandler !== "") {
    console.log(">>>This is the CTX>>", ctx.dataHandler);
  }

  // useEffect(() => {}, [ctx.dataHandler()]);
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
