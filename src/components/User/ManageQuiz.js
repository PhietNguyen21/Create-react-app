import { useRef, useState } from "react";
import "./ManageQuiz.scss";
import Select from "react-select";
import { useEffect } from "react";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { FcPlus } from "react-icons/fc";
import { postAddQuiz } from "../../services/apiServices";
import { toast } from "react-toastify";
const options = [
  { value: "EASY", label: "EASY" },
  { value: "NORMAL", label: "NORMAL" },
  { value: "HARD", label: "HARD" },
];
const ManageQuiz = (props) => {
  // const [selectedOption, setSelectedOption] = useState("EASY");
  const inputRef = useRef(null);

  const selectRef = useRef(null);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [type, setType] = useState("");
  const [name, setName] = useState("");

  const handelUploadImg = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const resetFileInput = () => {
    // 👇️ reset input value
    inputRef.current.value = null;
  };
  const handleClickSave = async () => {
    const res = await postAddQuiz(description, name, type.value, image);
    console.log(res);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      setDescription("");
      resetFileInput();
      setName("");
      // resetSelectInput();
      setType("");
    } else {
      toast.error(res.EM);
    }
  };

  return (
    <div className="manager-quiz-container">
      <div className="title"> Manager Quiz</div>

      <fieldset className="border rounded-3 p-3">
        <legend className="float-none w-auto px-3">Add new Quiz</legend>
        <div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <label>Description</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label>Name</label>
          </div>
          <Select
            placeholder="Qiz type..."
            className="mt-3"
            // defaultValue={type}
            value={type}
            onChange={setType}
            options={options}
            name="difficulty"
            ref={selectRef}
          />

          <input
            onChange={handelUploadImg}
            name="quizImage"
            type="file"
            className="form-control mt-3"
            ref={inputRef}
          />
          <div>
            <button onClick={handleClickSave} className="btn btn-warning mt-3 ">
              Save
            </button>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default ManageQuiz;
