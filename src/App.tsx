import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const rules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const isStrongPassword =
    rules.length && rules.uppercase && rules.number && rules.special;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "400px" }}>
      <h2>Strong Password Validator</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "8px", width: "100%" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "8px", width: "100%" }}
        />
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          {rules.length ? "✅" : "❌"} At least 8 characters
        </li>
        <li>
          {rules.uppercase ? "✅" : "❌"} At least 1 uppercase letter
        </li>
        <li>
          {rules.number ? "✅" : "❌"} At least 1 number
        </li>
        <li>
          {rules.special ? "✅" : "❌"} At least 1 special character
        </li>
      </ul>

      <button
        disabled={!isStrongPassword}
        style={{
          marginTop: "10px",
          padding: "10px",
          width: "100%",
          backgroundColor: isStrongPassword ? "green" : "gray",
          color: "white",
          border: "none",
          cursor: isStrongPassword ? "pointer" : "not-allowed",
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
