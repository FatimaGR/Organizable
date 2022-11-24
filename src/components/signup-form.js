import { useState } from "react";
import { useAuth } from "../context/auth-context";
import { FormButton1 } from "../styles/button";
import { icons } from "../styles/icons";
import { Form } from "../styles/input";
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
    <Form onSubmit={handleSubmit}>
      <Input
        name="username"
        value={formData.username}
        onChange={handleChange}
        label="USERNAME"
        icon={icons.user}
      />
      <Input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        label="EMAIL"
        icon={icons.mail}
      />
      <Input
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        label="FIRST NAME"
        icon={icons.clipboard}
      />
      <Input
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        label="LAST NAME"
        icon={icons.clipboard}
      />
      <Input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        label="PASSWORD"
        icon={icons.key}
      />
      <FormButton1 type="submit">CREATE ACCOUNT</FormButton1>
    </Form>
  )
}

export default SignUpForm;