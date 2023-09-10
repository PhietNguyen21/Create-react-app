import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalPreviewUser from "./ModalPreviewUser";
import ModalDeleteUser from "./ModalDeleteUser";

import ReactPaginate from "react-paginate";

const TableUserPaginate = ({
  listStudent,
  fetchListUserWithPanigate,
  fetchListUser,
  countPage,
  currentPage,
  setCurrentPage,
}) => {
  const handlePageClick = (event) => {
    fetchListUserWithPanigate(+event.selected + 1);
    setCurrentPage(+event.selected + 1);
    //   console.log(`User requested page number ${event.selected}`);
  };
  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>No</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listStudent &&
            listStudent.length > 0 &&
            listStudent.map((item, index) => {
              return (
                <tr key={`table-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <ModalPreviewUser user={item} />
                    <ModalUpdateUser
                      fetchListUser={fetchListUser}
                      fetchListUserWithPanigate={fetchListUserWithPanigate}
                      user={item}
                      setCurrentPage={setCurrentPage}
                      currentPage={setCurrentPage}
                    />
                    <ModalDeleteUser
                      user={item}
                      fetchListUser={fetchListUser}
                      fetchListUserWithPanigate={fetchListUserWithPanigate}
                      setCurrentPage={setCurrentPage}
                      currentPage={setCurrentPage}
                    />
                  </td>
                </tr>
              );
            })}
          {listStudent && listStudent.length === 0 && (
            <tr className="text-center">
              <td colSpan={5}>NO DATA</td>
            </tr>
          )}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center">
        {" "}
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={countPage}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          forcePage={+currentPage - 1}
        />
      </div>
    </>
  );
};
export default TableUserPaginate;
