import React from "react";
import Button from "../UI/Button";
import LogInForm from "./LogInForm";

const LogIn = (props) => {
  const logInHandler = (passedValue) => {
    if (passedValue !== "") {
      props.liftEvent(false);
    }
  };
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <LogInForm liftSubmit={logInHandler}></LogInForm>
      </div>
    </React.Fragment>
  );
};
export default LogIn;
