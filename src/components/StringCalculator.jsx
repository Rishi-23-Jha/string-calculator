import { useState } from "react";
import { add } from "../utils/stringCalculator";

export default function StringCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    try {
      setError("");
      setResult(add(input));
    } catch (e) {
      setResult(null);
      setError(e.message);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>String Calculator</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
        style={{ width: "300px", padding: "0.5rem" }}
      />
      <button onClick={handleCalculate} style={{ marginLeft: "1rem" }}>
        Calculate
      </button>
      {result !== null && <p>Sum: {result}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
