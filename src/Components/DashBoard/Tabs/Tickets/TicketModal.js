import { set } from "firebase/database";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const TicketModal = () => {
  const [show, setShow] = useState(false);
  const [check, setCheck] = useState([]);
  const labels = ["John Doe", "Salome Gitau"];
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCheck = (event) => {
    let updatedValue = [...check];
    if (event.target.checked) {
      updatedValue = [...check, event.target.value];
    } else {
      updatedValue.splice(check.indexOf(event.target.value), 1);
    }
    setCheck(updatedValue);
  };
  console.log("Ticket value", check);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Member
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Available Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Members</Form.Label>
            {labels.map((label, key) => {
              return (
                <>
                  <div key={key}>
                    <Form.Check
                      type="checkbox"
                      label={label}
                      onChange={handleCheck}
                    />
                  </div>
                </>
              );
            })}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default TicketModal;
