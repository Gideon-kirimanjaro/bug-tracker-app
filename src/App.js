import React, { useContext, useEffect } from "react";
import "./App.css";
import DashBoard from "./Components/DashBoard/DashBoard";
import LogIn from "./Components/LogIn/LogIn";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContext from "./Components/Store/auth-context";
import DashData, { postApi } from "./Components/Store/Database/DashData";
import axios from "axios";
import db from "./db";
import { uid } from "uid";
import { getDatabase, ref, set } from "firebase/database";
function App() {
  const ctx = useContext(AuthContext);
  const projectName = ctx.projectData.projectName;
  const projectDescription = ctx.projectData.projectDescription;
  const projectCheck = ctx.projectData.checkBox;
  console.log("ctx", ctx);
  const db = getDatabase();
  useEffect(() => {
    const uuid = uid();
    async function postData() {
      setTimeout(
        set(ref(db, "project-data/" + uuid), {
          projectName: projectName,
          projectDescription: projectDescription,
          projectCheck: projectCheck,
          key: uuid,
        }),
        // await db.database().ref("fruit/").set({
        //   projectName: projectName,
        //   projectDescription: projectDescription,
        // }),
        // await db.database().ref().set({
        //   projectName: projectName,
        //   projectDescription: projectDescription,
        //   key: uuid,
        // }),
        // await axios.post(postApi, {
        //   projectName: projectName,
        //   projectDescription: projectDescription,
        // }),
        100
      );
    }
    postData();

    const dataCache = () => {
      clearTimeout(postData);
    };
    dataCache();
  }, [db, projectName, projectDescription, projectCheck]);

  return (
    <React.Fragment>
      <div>
        {!ctx.logIn && <LogIn liftEvent={ctx.logInEvent}></LogIn>}
        {ctx.logIn && (
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
