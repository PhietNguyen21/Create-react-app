import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";

import { toast } from "react-toastify";
import { postCreateNewUser } from "../../../services/apiServices";
import _ from "lodash";
import { useEffect } from "react";

const ModalUpdateUser = ({ user }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState(user.email);
  const [passWord, setPass] = useState(user.password);
  const [userName, setUserName] = useState(user.username);
  const [role, setRole] = useState(user.role);
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState(user.image);

  useEffect(() => {
    if (!_.isEmpty(user)) {
      setEmail(user.email);
      setUserName(user.username);
      setRole(user.role);
      setPreviewImage(user.image);
    }
  }, [user]);
  return (
    <>
      <Button className="mx-3" variant="warning" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose} size="xl" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form-container">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="mail"
                id="email"
                value={email}
                disabled
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                id="pass"
                disabled
                value={passWord}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                name="nameUser"
                id="nameUser"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div className="form-group role">
              <label>Role</label>
              <select
                id="state"
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>

            <div className="form-image">
              <label className="label-upload" htmlFor="labelUpload">
                <div>
                  <FcPlus />
                  <span>Upload Image</span>
                </div>
              </label>
              <input type="file" name="img" id="labelUpload" hidden />
              <div className="img-preview">
                {previewImage ? (
                  <img
                    height={150}
                    width={200}
                    src={`data:image/jpeg;base64,${previewImage}`}
                    alt="img"
                  />
                ) : (
                  <span>Preview Image</span>
                )}
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalUpdateUser;
