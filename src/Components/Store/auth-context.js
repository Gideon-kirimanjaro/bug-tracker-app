import { createContext, useState } from "react";

const AuthContext = createContext({
  logIn: true,
});
export const AuthContextProvider = (props) => {
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
    <AuthContext.Provider
      value={{
        logIn: logIn,
        logInEvent: logInEvent,
        logOutEvent: logOutEvent,
        dataHandler: dataHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
