import { useState } from "react";
import { Input } from "./components/input";
import { login } from "./services/session-service";

function Unauthenticate() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    login(formData)
    .then(user => console.log(user))
    .catch(error => console.log(error))
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setFormData({ ... formData, [name]: value});
  }

  return (
    <div>
      <h2>Organizable</h2>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          value={formData.username}
          onChange={handleChange}
          label="Username"
        />
        <Input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          label="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Unauthenticate;