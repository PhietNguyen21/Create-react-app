import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
const ManagerUser = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="manager-user-container">
      <div className="title">Manager User</div>
      <div className="user-content">
        <button
          className="btn-addUser"
          onClick={(e) => {
            handleShow();
          }}
        >
          <FcPlus />
          <span>Add new users</span>
        </button>
        <div>
          <TableUser />
        </div>
        <div>
          <ModalCreateUser
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerUser;
