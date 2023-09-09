import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";

import { getAllUser } from "../../../services/apiServices";
import { useEffect } from "react";
const ManagerUser = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [listStudent, SetListStudent] = useState([]);

  // GET ALL USER
  useEffect(() => {
    fetchListUser();
  }, []);
  const fetchListUser = async () => {
    const res = await getAllUser();
    if (res.EC === 0) {
      SetListStudent(res.DT);
    }
  };
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
          <TableUser listStudent={listStudent} fetchListUser={fetchListUser} />
        </div>
        <div>
          <ModalCreateUser
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
            fetchListUser={fetchListUser}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerUser;
