import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { deleteQuiz } from "../../services/apiServices";
import { toast } from "react-toastify";
import { useEffect } from "react";

const ModalDeleteQuiz = ({ quiz, fetchAllQuiz }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ID, setID] = useState(quiz.id);

  const handelExit = () => {
    handleClose();
  };

  useEffect(() => {
    setID(quiz.id);
  }, [quiz]);
  const handelSave = async (e) => {
    e.preventDefault();

    // Validate
    const res = await deleteQuiz(ID);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      handleClose();
      fetchAllQuiz();
    } else {
      toast.error(res.EM);
    }
    // Submit data
  };
  return (
    <>
      <Button className="btn-add" variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handelExit} size="xl" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure delete this quiz: <b>{quiz && quiz.id ? quiz.id : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handelSave}>
            Confirm
          </Button>
          <Button variant="secondary" onClick={handelExit}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteQuiz;
