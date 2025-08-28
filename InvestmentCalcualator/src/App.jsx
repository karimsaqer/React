import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 7,
      duration: 10,
    });

    const inputIsValid =
      userInput.initialInvestment > 0 &&
      userInput.annualInvestment >= 0 &&
      userInput.expectedReturn > 0 &&
      userInput.duration > 0;

    function handleChange(inputIdentifier, value) {
      setUserInput((prevInput) => {
        return {
          ...prevInput,
          [inputIdentifier]: +value,
        };
      });
    }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {!inputIsValid && <p style={{textAlign: 'center', color: 'red'}}>Please enter valid input values greater than zero (except for Annual Investment which can be zero).</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
  );
}

export default App;
