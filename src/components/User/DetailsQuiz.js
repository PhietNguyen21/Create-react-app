import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuestionByQuizId } from "../../services/apiServices";
import _ from "lodash";
const DetailsQuiz = () => {
  const param = useParams();
  // console.log(">>> Check param:", param);

  const quiz_id = param.id;

  useEffect(() => {
    fetchListQuestion();
  }, [quiz_id]);

  const fetchListQuestion = async () => {
    const res = await getQuestionByQuizId(quiz_id);
    console.log(res);
    if (res && res.EC === 0) {
      let data = _.chain(res.DT)

        // Group the elements of Array based on `color` property
        .groupBy("id")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => {
          let arrAnswers = [{ description: "", answerId: "" }];
          let objQuestion = { image: "", questionDescription: "" };
          value.forEach((item, index) => {
            if (index === 0) {
              objQuestion.image = item.image;
              objQuestion.questionDescription = item.description;
            }
            let obj = {
              description: item.answers.description,
              answerId: item.answers.id,
            };
            arrAnswers.push(obj);
          });
          console.log("arrAnswers-Change", arrAnswers);
          console.log("value:", value, "key:", key);
          return {
            question_id: key,
            answers: arrAnswers,
            questionDescription: objQuestion.questionDescription,
            image: objQuestion.image,
          };
        })
        .value();
      console.log("data-lodash:", data);
    } else {
      console.log(res.EM);
    }
  };
  return <div>DetailsQuiz</div>;
};

export default DetailsQuiz;
