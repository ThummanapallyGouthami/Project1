import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [area, setArea] = useState("");
  const [user, setUser] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function PostData(event) {
    event.preventDefault();

    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);

      alert("Registered successfully");

      navigate("/login");
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
      <h1>Registration Page</h1>

      <form onSubmit={PostData}>

        <label htmlFor="fn">First Name:</label>
        <input
          id="fn"
          type="text"
          value={fn}
          placeholder="Enter first name"
          onChange={(event) => setFn(event.target.value)}
        />

        <br /><br />

        <label htmlFor="ln">Last Name:</label>
        <input
          id="ln"
          type="text"
          value={ln}
          placeholder="Enter last name"
          onChange={(event) => setLn(event.target.value)}
        />

        <br /><br />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(event) => setEmail(event.target.value)}
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

        <label htmlFor="area">Area:</label>
        <br />

        <textarea
          id="area"
          value={area}
          placeholder="Enter area"
          rows="3"
          cols="30"
          onChange={(event) => setArea(event.target.value)}
        />

        <br /><br />

        <p>Select User:</p>

        <label>
          <input
            type="radio"
            value="user"
            checked={user === "user"}
            onChange={(event) => setUser(event.target.value)}
          />
          User
        </label>

        <br />

        <label>
          <input
            type="radio"
            value="Admin"
            checked={user === "Admin"}
            onChange={(event) => setUser(event.target.value)}
          />
          Admin
        </label>

        <br /><br />

        <label htmlFor="country">Country:</label>

        <select
          id="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
          <option value="">Select country</option>
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
        </select>

        <br /><br />

        <button type="submit">Register</button>

      </form>

      <br />

      <p>
        Already registered?{" "}
        <button type="button" onClick={() => navigate("/login")}>
          Login
        </button>
      </p>

    </div>
  );
}

export default Register;