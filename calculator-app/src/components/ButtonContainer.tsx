import PropTypes from "prop-types";
import styles from "../css/ButtonContainer.module.css";

const ButtonContainer = ({ onInput }) => {
  const buttons = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "=",
  ];

  const handleClick = (input) => {
    onInput(input);
  };

  return (
    <div className={styles.buttonContainer}>
      {buttons.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onInput(item)}
          className={`${styles.button} btn btn-secondary`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

ButtonContainer.propTypes = {
  onInput: PropTypes.func.isRequired,
};

export default ButtonContainer;
