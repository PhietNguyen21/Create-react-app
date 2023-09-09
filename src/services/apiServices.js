import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email, pass, userName, role, image) => {
  const form = new FormData();
  form.append("email", email);
  form.append("password", pass);
  form.append("username", userName);
  form.append("role", role);
  form.append("userImage", image);
  return axios.post("api/v1/participant", form);
};

const getAllUser = () => {
  return axios.get("http://localhost:8081/api/v1/participant/all");
};

const putUpdateUser = (id, username, role, image) => {
  const form = new FormData();
  form.append("id", id);
  form.append("username", username);
  form.append("role", role);
  form.append("userImage", image);
  return axios.put("api/v1/participant", form);
};
export { postCreateNewUser, getAllUser, putUpdateUser };
