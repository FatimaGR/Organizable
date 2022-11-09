import { useState } from "react";
import styled from "@emotion/styled";
import { createBoards } from "../services/board-services";
import { boardColors } from "./utils";

const Color = styled.input`
  -webkit-appearance: none;
  height: 32px;
  width: 32px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  hover: 2px solid ${(props) => props.color}
`;

function CreateBoard(){
  const [formData, setFormData] = useState({
    name: "",
    color: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    createBoards(formData);
    console.log(formData)
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
          {Object.entries(boardColors).map(([colorName, color]) => (
            <Color key={colorName} type="radio" name="color" value={color} color={color} onChange={handleChange}/>
          ))}
          
        </div>
      </form>
    </div>
  )
}

export default CreateBoard;