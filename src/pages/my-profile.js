import { useState } from "react";
import { Input } from "../components/input";
import { useAuth } from "../context/auth-context";
import { deleteUser, editUser } from "../services/user-services";

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
        <button type="submit">Update Account</button>
      </form>
      <button onClick={handleDelete}>Delete my Account</button>
    </div>
  )
}

export default MyProfile;