import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalPreviewUser from "./ModalPreviewUser";
import ModalDeleteUser from "./ModalDeleteUser";

const TableUser = ({ listStudent, fetchListUser, showUpdateUser }) => {
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
                      user={item}
                    />
                    <ModalDeleteUser user={item} />
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
    </>
  );
};
export default TableUser;
