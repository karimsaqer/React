import InputGroup from "./InputGroup";
export default function UserInput({ userInput, handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputGroup
          name="Initial Investment"
          onChange={(event) => handleChange("initialInvestment", event.target.value)}
          value={userInput.initialInvestment}
        />
        <InputGroup
          name="Annual Investment"
          onChange={(event) => handleChange("annualInvestment", event.target.value)}
          value={userInput.annualInvestment}
        />
      </div>

      <div className="input-group">
        <InputGroup
          name="Expected Return"
          onChange={(event) => handleChange("expectedReturn", event.target.value)}
          value={userInput.expectedReturn}
        />
        <InputGroup
          name="Duration"
          onChange={(event) => handleChange("duration", event.target.value)}
          value={userInput.duration}
        />
      </div>
    </section>
  );
}
