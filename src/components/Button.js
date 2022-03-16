import styles from "../UI/Button.module.css";

const Button = ({ type, onClick, children }) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
