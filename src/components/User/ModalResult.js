import { useEffect, useState } from "react";
import { Button } from "antd";
import Modal from "react-bootstrap/Modal";

import { toast } from "react-toastify";

const ModalResult = ({ fetchListUser, user, submitAnswer, dataResult }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const handelExit = () => {
    handleClose();
  };

  const onClickFinish = () => {
    handleShow();
    submitAnswer();
  };

  return (
    <>
      <Button onClick={onClickFinish} style={{ backgroundColor: "#ffc107" }}>
        Finish
      </Button>

      <Modal show={show} onHide={handelExit} size="xl" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Your result test:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            Total result: <b>{dataResult?.countTotal}</b>
          </div>
          <div>
            Correct result: <b>{dataResult?.countCorrect}</b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger">Details Result</Button>
          <Button variant="secondary" onClick={handelExit}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalResult;
