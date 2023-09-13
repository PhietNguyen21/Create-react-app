import { Typography } from "antd";
import _ from "lodash";
const Answer = ({ quiz, index, checkboxAnswer }) => {
  const { Title } = Typography;
  if (_.isEmpty(quiz)) {
    return <></>;
  }

  const handleChangeCheckBox = (e, answerID, questionID) => {
    // console.log(e.target.checked);
    checkboxAnswer(answerID, questionID);
  };
  return (
    <>
      <div className="img" style={{ height: 200, textAlign: "center" }}>
        {quiz?.image && (
          <img
            style={{ height: "100%" }}
            src={`data:image/jpeg;base64,${quiz?.image}`}
            alt=""
          />
        )}
      </div>

      <div
        className="title-answer"
        style={{ textAlign: "center", marginTop: "10px" }}
      >
        <Title mark={true} italic={true} underline level={4}>
          {index && <>Question {index}. </>}
          {quiz && quiz?.questionDescription}?
        </Title>
      </div>
      <div className="list-quiz" style={{ padding: "20px 60px" }}>
        {quiz &&
          quiz.answers.map((item, index) => {
            return (
              <div key={`answer-${index}`} className="item-answer">
                <div class="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={item.isSelected}
                    onChange={(e) => {
                      handleChangeCheckBox(e, item.answerId, quiz.question_id);
                    }}
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    {item?.description}
                  </label>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Answer;
