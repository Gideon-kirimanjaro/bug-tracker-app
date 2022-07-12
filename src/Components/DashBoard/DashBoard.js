import React from "react";
import Button from "../UI/Button";
import VerticalTabs from "./Tabs/Tabs";

const DashBoard = (props) => {
  const logOutHandler = (projectName, projectDescription, checkBox) => {
    props.liftLogOut();
  };
  return (
    <React.Fragment>
      <h3 className="d-flex justify-content-center"> BUG TRACKER </h3>
      <div className="d-flex justify-content-center ml-4 ">
        <VerticalTabs
          logOut={logOutHandler}
          tabData={(projectName, projectDescription, checkBox) => {
            props.liftTabData(projectName, projectDescription, checkBox);
          }}
        ></VerticalTabs>
      </div>
    </React.Fragment>
  );
};
export default DashBoard;
