import { useState } from "react";
import { createBoards } from "../services/board-services";

function CreateBoard(){
  const [formData, setFormData] = useState({
    name: "",
    color: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData({ ... formData, [name]: value});
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
      <div>
        <input placeholder="boardname" value={formData.name} name="name" onChange={handleChange}/>
        <button type="submit">create</button>
      </div>
      <div>
        <input type="checkbox" value="magic blue"></input>
        <input type="checkbox"></input>
        <button>pink</button>
        <button>yellow</button>
        <button>purple</button>
        <button>orange</button>
        <button>sky blue</button>
        <button>brown</button>
        <button>red</button>
      </div>
      </form>
    </div>
  )
}

export default CreateBoard;