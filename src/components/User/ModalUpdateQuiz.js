import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalUpdateQuiz = ({ user, fetchListUserWithPanigate }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   useEffect(() => {}, [user]);

  const handelExit = () => {
    handleClose();
  };
  const handelSave = async (e) => {
    e.preventDefault();

    // Validate

    // Submit data
  };
  return (
    <>
      <Button
        className="btn-update"
        style={{ marginRight: 6 }}
        variant="warning"
        onClick={handleShow}
      >
        Update
      </Button>

      <Modal show={show} onHide={handelExit} size="xl" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Update quiz:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                type="email"
                placeholder="Enter description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handelSave}>
            Save changes
          </Button>
          <Button variant="secondary" onClick={handelExit}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalUpdateQuiz;
