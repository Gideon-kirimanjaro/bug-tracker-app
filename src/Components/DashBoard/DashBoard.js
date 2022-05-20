import React from "react";
import Button from "../UI/Button";

const DashBoard = (props) => {
  const logOutHandler = () => {
    props.liftLogOut(true);
  };
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        This is the dashboard
        <Button onClick={logOutHandler}>Log Out</Button>
      </div>
    </React.Fragment>
  );
};
export default DashBoard;
