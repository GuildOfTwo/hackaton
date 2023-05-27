import { useSelector } from "react-redux";
import RatingRange from "../RatingRange/RatingRange";
import styles from "./styles.module.sass";
import { useEffect, useState } from "react";

export const Feedback = ({ comments }) => {
  const [newComments, setNewComments] = useState([]);
  const renters = useSelector((state) => state.user.users);
console.log(newComments)
console.log(renters)

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



  return (
    <div className={styles.container}>

      <h2 className={styles.title}>Отзывы</h2>

      {newComments[0] ? newComments.map((el, index) => (
        <div className={styles.feedbackWrapper} key={index}>
          <p className={styles.text}>{el.text}</p>
          <div className={styles.flex}>
            <div>{el.score}</div>
            {/* <RatingRange nice={score * 10} bad={100 - score * 10} /> */}
            <span className={styles.author}>{el.name}</span>
          </div>
        </div>
      )) : <p className={styles.reviewsPlug}>Никто не оставил отзыва. Будьте первым</p>}
    </div>
  );
};
