import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";

import { toast } from "react-toastify";

import _ from "lodash";
import { useEffect } from "react";
import { putUpdateQuiz } from "../../services/apiServices";

const ModalUpdateQuiz = ({ quiz, fetchAllQuiz }) => {
  // console.log(quiz);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [description, setDescription] = useState(quiz.description);
  const [ID, setID] = useState(quiz.id);
  const [name, setName] = useState(quiz.name);
  const [type, setType] = useState(quiz.difficulty);
  const [image, setImage] = useState(quiz.image);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    setDescription(quiz.description);
    setName(quiz.name);
    setType(quiz.difficulty);
    setImage(quiz.quizImage);
  }, [quiz]);

  // console.log(currentPage);
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
    if (!name || !description) {
      toast.error("Name or Description is valid");
      return;
    }

    const res = await putUpdateQuiz(ID, description, name, type, image);
    if (res && res.EC === 0) {
      toast.success(res.EM);

      handleClose();
      fetchAllQuiz();
    } else {
      toast.error(res.EM);
    }
  };

  const handleExit = () => {
    handleClose();
  };
  return (
    <>
      <Button className="mx-3" variant="warning" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleExit} size="xl" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form-container">
            <div className="form-group">
              <label>Description</label>
              <input
                placeholder="Description"
                className="form-control"
                type="text"
                name="description"
                id="email"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label>Name</label>
              <input
                placeholder="Name"
                className="form-control"
                type="text"
                name="name"
                id="pass"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="form-group role">
              <label>Difficulty</label>
              <select
                className="form-controls"
                placeholder="Change type..."
                name="difficulty"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <option value="EASY">EASY</option>
                <option value="NORMAL">NORMAL</option>
                <option value="HARD">HARD</option>
              </select>
            </div>

            <div className="form-image mt-3">
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
          <Button variant="primary" onClick={handleSaveUpdate}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleExit}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalUpdateQuiz;
