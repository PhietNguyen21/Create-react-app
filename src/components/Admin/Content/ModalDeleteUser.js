import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";

import { toast } from "react-toastify";
import { deleteUser, postCreateNewUser } from "../../../services/apiServices";

const ModalDeleteUser = ({ fetchListUser, user }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState(user.email);

  useEffect(() => {}, [user]);

  const handelExit = () => {
    handleClose();
    setEmail("");
  };
  const handelSave = async (e) => {
    e.preventDefault();

    // Validate

    // Submit data
    const res = await deleteUser(user.id);
    console.log(res);
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
          Are you sure delete this user:{" "}
          <b>{user && user.email ? user.email : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handelExit}>
            Close
          </Button>
          <Button variant="danger" onClick={handelSave}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalDeleteUser;
