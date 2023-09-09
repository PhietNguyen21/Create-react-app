import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";

import { getAllUser } from "../../../services/apiServices";
import { useEffect } from "react";

const ManagerUser = (props) => {
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
        <div style={{ width: "fit-content", marginBottom: 20 }}>
          <ModalCreateUser fetchListUser={fetchListUser} />
        </div>

        <div>
          <TableUser listStudent={listStudent} fetchListUser={fetchListUser} />
        </div>
      </div>
    </div>
  );
};

export default ManagerUser;
