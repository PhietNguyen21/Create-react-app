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

const deleteUser = (userId) => {
  return axios.delete(`http://localhost:8081/api/v1/participant`, {
    data: { id: userId },
  });
};

const getUserWithPagination = (page, limit) => {
  return axios.get(
    `http://localhost:8081/api/v1/participant?page=${page}&limit=${limit}`
  );
};

const postLogin = (email, password) => {
  return axios.post("http://localhost:8081/api/v1/login", {
    email,
    password,
    delay: 4000,
  });
};

const postRegister = (email, password, username) => {
  return axios.post("http://localhost:8081/api/v1/register", {
    email,
    password,
    username,
  });
};

const getQuizByParticipant = () => {
  // let config = {
  //   headers: {
  //     Authorization: "Bearer " + access_token,
  //   },
  // };

  return axios.get("http://localhost:8081/api/v1/quiz-by-participant");
};

const getQuestionByQuizId = (id) => {
  return axios.get(
    `http://localhost:8081/api/v1/questions-by-quiz?quizId=${id}`
  );
};

const postSubmitAnswer = (data) => {
  return axios.post("http://localhost:8081/api/v1/quiz-submit", { ...data });
};

const postAddQuiz = (description, name, difficulty, image) => {
  const form = new FormData();
  form.append("description", description);
  form.append("name", name);
  form.append("difficulty", difficulty);
  form.append("quizImage", image);
  return axios.post("http://localhost:8081/api/v1/quiz", form);
};
export {
  postCreateNewUser,
  getAllUser,
  putUpdateUser,
  deleteUser,
  getUserWithPagination,
  postLogin,
  postRegister,
  getQuizByParticipant,
  getQuestionByQuizId,
  postSubmitAnswer,
  postAddQuiz,
};
