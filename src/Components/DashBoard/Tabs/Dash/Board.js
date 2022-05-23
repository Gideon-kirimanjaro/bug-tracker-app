import { Card } from "react-bootstrap";
import UiModal from "../../../UI/Modal/Modal";
import { useContext, useReducer, useState } from "react";
import { ActionTypes } from "@mui/base";
import ProjectTable from "../Table/ProjectTable";
import ReactDom from "react-dom";
import Button from "../../../UI/Button";
import AuthContext from "../../../Store/auth-context";
const Board = (props) => {
  const ACTION = {
    NAME: "nameHandler",
    DESCRIPTION: "descriptionHandler",
  };
  const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case ACTION.NAME:
        return {
          ...state,
          projectName: action.payload,
          validName: action.payload === "",
        };
      case ACTION.DESCRIPTION:
        return {
          ...state,
          projectDescription: action.payload,
          validProject: action.payload === "",
        };
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    projectName: "",
    validName: true,
    projectDescription: "",
    validProject: true,
  });
  const [show, setShow] = useState(false);

  const handleClose = () => {
    if (state.validName === false && state.validProject === false) {
      props.liftData(state.projectName, state.projectDescription);
      state.projectName = "";
      state.projectDescription = "";
      setShow(false);
    }
  };
  const handleCancel = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const nameHandler = (e) => {
    dispatch({ type: ACTION.NAME, payload: e.target.value });
  };
  const descriptionHandler = (e) => {
    dispatch({ type: ACTION.DESCRIPTION, payload: e.target.value });
  };
  return (
    <>
      <Card border="secondary" style={{ width: "30rem" }}>
        <Card.Body>
          <Button onClick={handleShow}>Add Project</Button>
          <div className="mb-3">
            <UiModal
              heading={"Add a Project"}
              name={"Project name"}
              description={"Project Description"}
              handleClose={handleClose}
              handleCancel={handleCancel}
              show={show}
              enteredName={state.projectName}
              enteredDescription={state.projectDescription}
              descriptionHandler={descriptionHandler}
              nameHandler={nameHandler}
              projectValid={state.validProject}
              nameValid={state.validName}
            />
          </div>
          <div>
            <ProjectTable></ProjectTable>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default Board;
