import { useState } from "react";
import { useAuth } from "../context/auth-context";
import { Input } from "./input";
import { icons } from "../styles/icons";
import { FormButton1 } from "../styles/button";
import { Form } from "../styles/input";


function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    login(formData);
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData({ ... formData, [name]: value});
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="username"
        value={formData.username}
        onChange={handleChange}
        label="USERNAME"
        icon={icons.user}
      />
      <Input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        label="PASSWORD"
        icon={icons.key}
      />
      <FormButton1 type="submit">LOGIN</FormButton1>
    </Form>
  )
}

export default LoginForm;