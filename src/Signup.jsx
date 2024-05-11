import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        setStatus(error.response.status);
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      {status ? <img src={`https://httpstatusdogs.com/img/${status}`} /> : null}
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          Name:{" "}
          <input
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength={20}
            name="name"
            type="text"
          />
          <small> {20 - name.length} characters remaining</small>
        </div>
        <div className="mb-3">
          Email: <input className="form-control" name="email" type="email" />
        </div>
        <div className="mb-3">
          Password: <input className="form-control" name="password" type="password" />
        </div>
        <div className="mb-3">
          Password confirmation: <input className="form-control" name="password_confirmation" type="password" />
        </div>
        <div className="mb-3">
          Monthly Planned Income: <input className="form-control" name="monthly_budget" type="number" />
        </div>
        <button className="btn btn-primary mb-3" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
