import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalCreateUser = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} size="xl" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add new users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form-container">
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="mail" id="email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="pass" id="pass" />
            </div>
            <div className="form-group">
              <label>User Name</label>
              <input type="text" name="nameUser" id="nameUser" />
            </div>
            <div className="form-group role">
              <label>Role</label>
              <select id="state">
                <option value="vietnam">VietNam</option>
                <option value="japan">JAPAN</option>
              </select>
            </div>

            <div className="form-image">
              <label>Image</label>
              <input type="file" name="img" id="img" />
            </div>
          </form>
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
export default ModalCreateUser;
