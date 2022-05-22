import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ReactDom from "react-dom";

const ProjectModal = (props) => {
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
        />,
        document.getElementById("modal")
      )}
    </>
  );
};

export default UiModal;
