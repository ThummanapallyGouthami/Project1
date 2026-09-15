import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function postData(event) {
    event.preventDefault();

    setLoading(true);
    setError("");

    setTimeout(() => {
      // Temporary token for frontend practice
      localStorage.setItem("token", "dummy-token");

      setLoading(false);

      alert("Login successful");

      navigate("/dashboard");
    }, 1000);
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>Login Page - styling work</h1>

      <form onSubmit={postData}>

        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          placeholder="Enter username"
          onChange={(event) => setUsername(event.target.value)}
        />

        <br /><br />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <br /><br />

        <button type="submit">Login</button>

      </form>

      <br />

      <p>
        Not registered?{" "}
        <button
          type="button"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </p>
    </div>
  );
}

export default Login;