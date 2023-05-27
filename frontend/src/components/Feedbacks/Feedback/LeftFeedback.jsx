import { useState } from "react";
import { ButtonDefault } from "../../ButtonDefault/ButtonDefault";
import leftFeedback from "./leftFeedback.module.sass";
import { useParams } from "react-router-dom";
import { apiComments } from "../../../utils/commentsApi";

export const LeftFeedback = () => {
  const [score, setScore] = useState(6);
  const [feedbackText, setFeedbackText] = useState(null)

  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const {id} = useParams()

  const handlePostFeedback = () => {
    let data = {
      text: feedbackText,
      score: Number(score),
      building: Number(id)
    }
 
    console.log(data)
    apiComments
    .postComment(data)
    .then(res => console.log(res))

  }
  return (
    <div className={leftFeedback.npsModalContent}>
      <h4 className={leftFeedback.padd}>Оцените данное место</h4>
      <div
        className={leftFeedback.npsScores}
        onClick={(e) => setScore(e.target.id)}
      >
        {array.map((el) => (
          <div
            className={
              score == el ? leftFeedback.npsScoreActive : leftFeedback.npsScore
            }
            key={el}
            id={el}
          >
            {el}
          </div>
        ))}
      </div>
      <div className={leftFeedback.textareaWrap}>
        <textarea onChange={e => setFeedbackText(e.target.value)} placeholder="Ваш комментарий..." rows="8" className={leftFeedback.textarea}></textarea>
      </div>
      <div className={leftFeedback.btnWrap}>
        <br />
        <ButtonDefault
          lable="Оставить отзыв"
          action={() => handlePostFeedback()}
        />
      </div>
    </div>
  );
};
