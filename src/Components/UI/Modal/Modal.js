import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ReactDom from "react-dom";

const ProjectModal = (props) => {
  const [checked, setChecked] = useState([]);
  const checkList = ["Cobra Kai", "Will Smith", "Dexter"];
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };
  console.log("The checked value", checked);
  props.liftCheckedData(checked);
  return (
    <>
      <Modal show={props.show} onHide={props.handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>{props.heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>{props.name}</Form.Label>
              <Form.Control
                value={props.enteredName}
                onChange={props.nameHandler}
                type="text"
                placeholder={`Enter ${props.name}`}
              />
            </Form.Group>
            {props.nameValid && (
              <span>
                <h5 style={{ color: "red", fontSize: "12px" }}>
                  enter {props.name} 😶
                </h5>
              </span>
            )}
            <Form.Group className="mb-3" controlId="formBasicTextArea1">
              <Form.Label>{props.description}</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder={`Enter ${props.description}`}
                value={props.enteredDescription}
                onChange={props.descriptionHandler}
              />
            </Form.Group>
            {props.projectValid && (
              <h5 style={{ color: "red", fontSize: "12px" }}>
                enter {props.description} 😶
              </h5>
            )}
          </Form>
          <Form>
            <h5>Assign a developer</h5>
            {checkList.map((item, index) => (
              <div key={index}>
                <input value={item} type="checkbox" onChange={handleCheck} />
                <span>{item}</span>
              </div>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
const UiModal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <ProjectModal
          title={props.title}
          heading={props.heading}
          handleShow={props.handleShow}
          name={props.name}
          description={props.description}
          handleClose={props.handleClose}
          handleCancel={props.handleCancel}
          show={props.show}
          projectValid={props.projectValid}
          nameValid={props.nameValid}
          enteredName={props.projectName}
          enteredDescription={props.projectDescription}
          descriptionHandler={props.descriptionHandler}
          nameHandler={props.nameHandler}
          liftCheckedData={props.liftCheckedData}
        />,
        document.getElementById("modal")
      )}
    </>
  );
};

export default UiModal;
