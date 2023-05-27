import { useSelector } from "react-redux";
import styles from "./styles.module.sass";
import { useEffect, useState } from "react";
import { LeftFeedback } from "./LeftFeedback";

export const Feedback = ({ comments }) => {
  const [newComments, setNewComments] = useState([]);
  const renters = useSelector((state) => state.user.users);
  const [status, setStatus] = useState(null);
  const renters1 = useSelector((state) => state.user);
  // console.log(newComments)

  useEffect(() => {
    if (renters.length >= 1) {
      const commentsArray = comments.map((comment) => {
        const user = renters.find((u) => u.user === comment.author);
        if (user) {
          return {
            ...comment,
            name: user.first_name ? user.first_name : "Аноним",
          };
        }
        return comment;
      });
      setNewComments(commentsArray);
    }
  }, [comments, renters]);

  useEffect(() => {
    if (!localStorage.getItem("logIn")) {
      setStatus("Зарегистрируйтесь, что бы оставить отзыв");
    } else if (localStorage.getItem("role") == "LANDLORD") {
      setStatus("Только арендаторы могут оставлять отзывы");
    } else setStatus(null);
  }, []);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Отзывы</h2>

      {newComments[0] ? (
        newComments.map((el, index) => (
          <div className={styles.feedbackWrapper} key={index}>
            <p className={styles.text}>{el.text}</p>
            <div className={styles.flex}>
              <div>Оценка {el.score}</div>
              <span className={styles.author}>Автор {el.name}</span>
            </div>
          </div>
        ))
      ) : (
        <p className={styles.reviewsPlug}>
          Никто не оставил отзыва. Будьте первым
        </p>
      )}
      {!status ? (
        <LeftFeedback />
      ) : (
        <div className={styles.reviewsWarning}>{status}</div>
      )}
    </div>
  );
};