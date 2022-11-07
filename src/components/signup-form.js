import { useState } from "react";
import { useAuth } from "../context/auth-context";
import { Input } from "./input";

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  const { signUp } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    signUp(formData);
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
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          label="Email"
        />
        <Input
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          label="First name"
        />
        <Input
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          label="Last name"
        />
        <Input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          label="Password"
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default SignUpForm;