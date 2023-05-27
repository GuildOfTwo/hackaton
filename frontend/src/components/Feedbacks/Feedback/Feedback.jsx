import { useSelector } from "react-redux";
import styles from "./styles.module.sass";
import { useEffect, useState } from "react";
import { LeftFeedback } from "./LeftFeedback";

export const Feedback = ({ comments }) => {
  const [newComments, setNewComments] = useState([]);
  const renters = useSelector((state) => state.user.users);
// console.log(newComments)
// console.log(renters)

  useEffect(() => {
    const commentsArray = comments.map((comment) => {
      const user = renters.find((u) => u.user === comment.author);
      if (user) {
        return { ...comment, name: user.user };
      }
      return comment;
    });
    setNewComments(commentsArray);
  }, [comments]);


console.log(newComments)
  return (
    <div className={styles.container}>

      <h2 className={styles.title}>Отзывы</h2>

      {newComments[0] ? newComments.map((el, index) => (
        <div className={styles.feedbackWrapper} key={index}>
          <p className={styles.text}>{el.text}</p>
          <div className={styles.flex}>
            <div>Оценка {el.score}</div>
            <span className={styles.author}>Автор {el.name}</span>
          </div>
        </div>
      )) : <p className={styles.reviewsPlug}>Никто не оставил отзыва. Будьте первым</p>}
      <LeftFeedback />
    </div>
  );
};
