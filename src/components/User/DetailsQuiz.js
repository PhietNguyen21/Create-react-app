import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  getQuestionByQuizId,
  postSubmitAnswer,
} from "../../services/apiServices";
import "./DetailsQuiz.scss";

import _ from "lodash";
import { Button, Typography } from "antd";
import Answer from "./Answer";
import ModalResult from "./ModalResult";
const DetailsQuiz = () => {
  const { Title } = Typography;
  const param = useParams();
  // console.log(">>> Check param:", param);
  const location = useLocation();
  const [listQues, setListQues] = useState([]);
  const [indexQuiz, setIndexQuiz] = useState(0);
  const [dataResult, setDataResult] = useState(null);

  const { QuizDes } = location?.state;
  const quiz_id = param.id;

  const onClickNextQuiz = () => {
    if (listQues && listQues.length > indexQuiz + 1) {
      setIndexQuiz(indexQuiz + 1);
    }
  };

  const onClickPrevQuiz = () => {
    if (indexQuiz > 0) {
      setIndexQuiz(indexQuiz - 1);
    }
  };
  useEffect(() => {
    fetchListQuestion();
  }, [quiz_id]);

  const fetchListQuestion = async () => {
    const res = await getQuestionByQuizId(quiz_id);
    // console.log(res);
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
              isSelected: false,
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
      // console.log(data);
      setListQues(data);
    } else {
      console.log(res.EM);
    }
  };

  // useEffect(() => {
  //   console.log(listQues);
  // }, [listQues]);
  const checkboxAnswer = (answerID, questionID) => {
    let listQuesNew = _.cloneDeep(listQues);
    let question = listQuesNew.find(
      (item) => +item.question_id === +questionID
    );

    if (question) {
      let arrAnswersNew = question.answers.map((item, index) => {
        if (item.answerId === answerID) {
          item.isSelected = !item.isSelected;
        }
        return item;
      });
      question.answers = arrAnswersNew;
      // console.log("Quesstion", question);
    }
    let index = listQuesNew.findIndex(
      (item) => +item.question_id === +questionID
    );
    // console.log(listQuesNew[index]);
    if (index !== -1) {
      listQuesNew[index] = question;
      // console.log("UPDATE LIST NEW", listQuesNew);
      setListQues(listQuesNew);
    }
  };

  const submitAnswer = async () => {
    //   {
    //     "quizId": 1,
    //     "answers": [
    //         {
    //             "questionId": 1,
    //             "userAnswerId": [3]
    //         },
    //         {
    //             "questionId": 2,
    //             "userAnswerId": [6]
    //         }
    //     ]
    // }

    // console.log("data before submit", listQues);
    const payload = {
      quizId: +quiz_id,
      answers: [],
    };
    const listQuesNew = _.cloneDeep(listQues);
    listQuesNew.forEach((item, index) => {
      let objAnswer = {
        questionId: +item.question_id,
        userAnswerId: [],
      };
      item.answers.forEach((answer, index) => {
        if (answer.isSelected) {
          objAnswer.userAnswerId.push(answer.answerId);
        }
      });

      payload.answers.push(objAnswer);
    });
    const res = await postSubmitAnswer(payload);

    if (res && res.EC === 0) {
      setDataResult(res.DT);
    } else {
      console.log(res.EM);
    }
  };

  return (
    <div className="detail_quiz_container">
      <div className="left-content" style={{ padding: 10 }}>
        <div className="title">
          <Title level={2}>{`Quiz ${indexQuiz + 1} :${QuizDes}`}</Title>
        </div>
        <div className="line"></div>
        <div className="img">
          <img alt="" />
        </div>
        <div className="content">
          <div className="question"></div>
          <div className="answer">
            <Answer
              checkboxAnswer={checkboxAnswer}
              index={indexQuiz + 1}
              quiz={listQues && listQues.length > 0 ? listQues[indexQuiz] : ""}
            />
          </div>
        </div>

        <div
          className="footer"
          style={{ textAlign: "center", marginBottom: "10px" }}
        >
          <Button
            onClick={onClickPrevQuiz}
            size="middle"
            style={{ marginRight: "10px", backgroundColor: "#6c757d" }}
          >
            Prev
          </Button>
          <Button
            onClick={onClickNextQuiz}
            type="primary"
            size="middle"
            style={{ marginRight: "10px" }}
          >
            Next
          </Button>

          <ModalResult dataResult={dataResult} submitAnswer={submitAnswer} />
        </div>
      </div>
      <div className="right-content">sssss</div>
    </div>
  );
};

export default DetailsQuiz;
