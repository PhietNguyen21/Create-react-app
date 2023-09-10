import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";

import { toast } from "react-toastify";
import { putUpdateUser } from "../../../services/apiServices";
import _ from "lodash";
import { useEffect } from "react";

const ModalPreviewUser = ({ user, fetchListUser }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState(user.email);
  const [passWord, setPass] = useState(user.password);
  const [userName, setUserName] = useState(user.username);
  const [role, setRole] = useState(user.role);
  const [image, setImage] = useState(user.image);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (!_.isEmpty(user)) {
      setEmail(user.email);
      setUserName(user.username);
      setRole(user.role);
      setImage("");
      if (user.image) {
        setPreviewImage(`data:image/jpeg;base64,${user.image}`);
      }
    }
  }, [user]);

  const handelUploadImg = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    } else {
      setPreviewImage("");
    }
  };
  const handleSaveUpdate = async (e) => {
    e.preventDefault();

    const res = await putUpdateUser(user.id, userName, role, image);

    if (res && res.EC === 0) {
      toast.success(res.EM);
      await fetchListUser();
      handleClose();
    } else {
      toast.error(res.EM);
      handleClose();
    }
  };
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        View
      </Button>

      <Modal show={show} onHide={handleClose} size="xl" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Preivew User</Modal.Title>
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
                disabled
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div className="form-group role">
              <label>Role</label>
              <select
                disabled
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
              <input type="file" name="img" hidden />
              <div className="img-preview">
                {previewImage ? (
                  <img
                    style={{ width: 200, height: 150 }}
                    src={`${previewImage}`}
                    alt="test"
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
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalPreviewUser;
