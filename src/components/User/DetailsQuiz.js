import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuestionByQuizId } from "../../services/apiServices";
const DetailsQuiz = () => {
  const param = useParams();
  // console.log(">>> Check param:", param);

  const quiz_id = param.id;

  useEffect(() => {
    fetchListQuestion();
  }, [quiz_id]);

  const fetchListQuestion = async () => {
    const res = await getQuestionByQuizId(quiz_id);
  };
  return <div>DetailsQuiz</div>;
};

export default DetailsQuiz;
