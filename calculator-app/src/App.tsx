import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./css/App.module.css";
import { useState } from "react";
import AppName from "./components/AppName";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";

const App = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleInput = (item) => {
    if (item === "C") {
      setInput("");
      setError("");
    } else if (item === "=") {
      try {
        setInput(eval(input));
      } catch (err) {
        setError("Invalid expression");
      }
      
    } else {
      const newValue = input + item;
      setInput(newValue);
    }
  };

  const isValidExpression = (expression) => {
    const validCharacters = /^[0-9+\-*/.]*$/;
    return validCharacters.test(expression);
  };

  return (
    <div className={` ${styles.calculator} container p-10`}>
      <AppName />
      <Display displayValue={input} error = {error} />
      <ButtonContainer onInput={handleInput} />
    </div>
  );
};
export default App;
