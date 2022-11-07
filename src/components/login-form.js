import { useState } from "react";
import { Input } from "./input";

function LoginForm({onLogin}) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(formData)
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData({ ... formData, [name]: value});
  }

  return (
    <div>
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

export default LoginForm;