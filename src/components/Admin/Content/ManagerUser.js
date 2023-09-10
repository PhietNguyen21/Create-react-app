import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";

import {
  getAllUser,
  getUserWithPagination,
} from "../../../services/apiServices";
import { useEffect } from "react";
import TableUserPaginate from "./TableUserPaginate";

const ManagerUser = (props) => {
  const [listStudent, SetListStudent] = useState([]);
  const [countPage, setCountPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const LIMIT_USER = 6;
  // GET ALL USER

  useEffect(() => {
    fetchListUserWithPanigate(currentPage);
  }, []);

  const fetchListUser = async () => {
    const res = await getAllUser();
    if (res.EC === 0) {
      SetListStudent(res.DT);
    }
  };

  const fetchListUserWithPanigate = async (page) => {
    const res = await getUserWithPagination(page, LIMIT_USER);
    console.log(res);
    if (res.EC === 0) {
      SetListStudent(res.DT.users);
      setCountPage(res.DT.totalPages);
    }
  };
  return (
    <div className="manager-user-container">
      <div className="title">Manager User</div>
      <div className="user-content">
        <div style={{ width: "fit-content", marginBottom: 20 }}>
          <ModalCreateUser
            fetchListUser={fetchListUser}
            fetchListUserWithPanigate={fetchListUserWithPanigate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <div>
          {/* <TableUser listStudent={listStudent} fetchListUser={fetchListUser} /> */}
          <TableUserPaginate
            listStudent={listStudent}
            fetchListUserWithPanigate={fetchListUserWithPanigate}
            fetchListUser={fetchListUser}
            countPage={countPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerUser;
