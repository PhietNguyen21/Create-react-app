import { Typography } from "antd";
import _ from "lodash";
const Answer = ({ quiz, index }) => {
  const { Title } = Typography;
  if (_.isEmpty(quiz)) {
    return <></>;
  }
  return (
    <>
      <div className="title-answer">
        <Title mark={true} italic={true} underline level={3}>
          {index && <>Question {index}. </>}
          {quiz && quiz?.questionDescription}?
        </Title>
      </div>

      {quiz.image && (
        <div className="img" style={{ height: 300 }}>
          <img
            style={{ height: "100%" }}
            src={`data:image/jpeg;base64,${quiz?.image}`}
            alt=""
          />
        </div>
      )}
      {quiz &&
        quiz.answers.map((item, index) => {
          return (
            <div key={`answer-${index}`} className="item-answer">
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  {item?.description}
                </label>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Answer;
