import { createContext, useState } from "react";

const AuthContext = createContext({
  logIn: true,
});
export const AuthContextProvider = (props) => {
  const [logIn, setLogIn] = useState(true);
  const [projectData, setProjectData] = useState({});
  const logInEvent = (passedEvent) => {
    setLogIn(passedEvent);
  };
  const logOutEvent = (passedEvent) => {
    setLogIn(passedEvent);
  };
  const dataHandler = (projectName, projectDescription, checkBox) => {
    console.log("The auth data:", projectName, projectDescription, checkBox);
    setProjectData({
      projectName: projectName,
      projectDescription: projectDescription,
      checkBox: checkBox,
    });
  };
  return (
    <AuthContext.Provider
      value={{
        logIn: logIn,
        logInEvent: logInEvent,
        logOutEvent: logOutEvent,
        dataHandler: dataHandler,
        projectData: projectData,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
