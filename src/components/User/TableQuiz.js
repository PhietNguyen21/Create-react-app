import Table from "react-bootstrap/Table";
import { getAllQuiz } from "../../services/apiServices";
import { useState } from "react";
import { useEffect } from "react";
const TableQuiz = () => {
  const [listQuiz, setListQuiz] = useState();

  useEffect(() => {
    fetchAllQuiz();
  }, []);
  const fetchAllQuiz = async () => {
    const res = await getAllQuiz();
    if (res && res.EC === 0) {
      setListQuiz(res.DT);
    } else {
      console.log(res);
    }
  };

  return (
    <Table className="table-lst-quiz">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {listQuiz &&
          listQuiz.length > 0 &&
          listQuiz.map((item, index) => {
            return (
              <tr key={`table-quiz-${index}`}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.difficulty}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    style={{ marginRight: 6 }}
                  >
                    Update
                  </button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default TableQuiz;
