import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getQuestionByQuizId } from "../../services/apiServices";
import "./DetailsQuiz.scss";

import _ from "lodash";
import { Button, Typography } from "antd";
const DetailsQuiz = () => {
  const { Title } = Typography;
  const param = useParams();
  // console.log(">>> Check param:", param);
  const location = useLocation();

  const [listQues, setListQues] = useState();

  const { QuizDes } = location?.state;
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
          let arrAnswers = [];
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
          // console.log("arrAnswers-Change", arrAnswers);
          // console.log("value:", value, "key:", key);
          return {
            question_id: key,
            answers: arrAnswers,
            questionDescription: objQuestion.questionDescription,
            image: objQuestion.image,
          };
        })
        .value();
      console.log(data);
      setListQues(data);
    } else {
      console.log(res.EM);
    }
  };

  return (
    <div className="detail_quiz_container">
      <div className="left-content">
        <div className="title">
          <Title>{QuizDes}</Title>
        </div>
        <div className="img">
          <img alt="" />
        </div>
        <div className="content">
          <div className="question"></div>
          <div className="answer">
            <div className="title-answer">
              <Title mark={true} italic={true} underline level={3}>
                {" "}
                {listQues[0]?.questionDescription}?
              </Title>
            </div>
            <div className="item-answer">A.1232</div>
            <div className="item-answer">A.145</div>
            <div className="item-answer">A.4678</div>
          </div>
        </div>

        <div className="footer" style={{ textAlign: "center" }}>
          <Button type="primary" size="middle" style={{ marginRight: "10px" }}>
            Prev
          </Button>
          <Button type="primary" size="middle" className="mx-auto">
            Next
          </Button>
        </div>
      </div>
      <div className="right-content">sssss</div>
    </div>
  );
};

export default DetailsQuiz;
