import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import ModalUpdateUser from "./ModalUpdateUser";

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
                <tr>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button className="btn btn-secondary">View</button>
                    <ModalUpdateUser user={item} />
                    <button className="btn btn-danger">Delete</button>
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
