import { useState } from "react";
import { useAuth } from "../context/auth-context";
import styled from "@emotion/styled";
import { Input } from "../components/input";
import { deleteUser, editUser } from "../services/user-services";
import { icons } from "../styles/icons";
import { Form } from "../styles/input";
import { FormButton1, FormButton3 } from "../styles/button";

const ContainerForm = styled.div`
  display: flex;
  margin: auto;
`;

function MyProfile() {
  
  const { user } = useAuth();
  const { logout } = useAuth();

  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
    first_name: user.firstName,
    last_name: user.lastName,
  });
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(user.id, formData);
    editUser(user.id, formData)
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData({ ... formData, [name]: value});
  }

  function handleDelete(){
    deleteUser(user.id);
    logout();
  };

  return (
    <div>
      <h1>My profile</h1>
      <ContainerForm>
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
        <FormButton3 type="submit">UPDATE ACCOUNT</FormButton3>
        <FormButton1 onClick={handleDelete}>DELETE MY ACCOUNT</FormButton1>
      </Form>
      </ContainerForm>
    </div>
  )
}

export default MyProfile;