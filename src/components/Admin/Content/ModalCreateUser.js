import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";

const ModalCreateUser = ({ show, handleClose, handleShow }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const handelUploadImg = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    }
    // else {
    //   setPreviewImage(e.target.files[0]);
    // }
  };

  const handelSave = async (e) => {
    e.preventDefault();

    // const data = {
    //   email: email,
    //   password: pass,
    //   username: userName,
    //   role: role,
    //   userImage: image,
    // };
    // console.log(data);

    const form = new FormData();
    form.append("email", email);
    form.append("password", pass);
    form.append("username", userName);
    form.append("role", role);
    form.append("userImage", image);
    const res = await axios.post(
      "http://localhost:8081/api/v1/participant",
      form
    );
    console.log("check res", res);

    handleClose();
    setEmail("");
    setImage("");
    setPass("");
    setRole("");
    setUserName("");
  };
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} size="xl" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add new users</Modal.Title>
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
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="pass"
                id="pass"
                value={pass}
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
              <input
                type="file"
                name="img"
                id="labelUpload"
                hidden
                onChange={(e) => {
                  handelUploadImg(e);
                }}
              />
              <div className="img-preview">
                {previewImage ? (
                  <img src={`${previewImage}`} alt="test" />
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
          <Button variant="primary" onClick={handelSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalCreateUser;
