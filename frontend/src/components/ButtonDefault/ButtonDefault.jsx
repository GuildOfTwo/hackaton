import styles from "./styles.module.sass";

export const ButtonDefault = ({
  lable = "text",
  action,
  disabled = false,
  width = "",
}) => {
  return (
    <button
      className={disabled ? styles.disabled : styles.button}
      onClick={action}
      disabled={disabled}
      style={{width: width}}
    >
      {lable}
    </button>
  );
};
