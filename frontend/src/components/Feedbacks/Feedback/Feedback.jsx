import RatingRange  from '../RatingRange/RatingRange'
import styles from "./styles.module.sass";

export const Feedback = ({
  author,
  text,
  date,
  score
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
      <div className={styles.flex}>
        <RatingRange nice={score * 10} bad={100 - score * 10} />
        <span className={styles.author}>{author}</span>
      </div>
    </div>
  )
}