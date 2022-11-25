import { useState } from "react";
import styled from "@emotion/styled";
import { createBoards } from "../services/board-services";
import { boardColors, colors } from "../styles/colors";
import { typography } from "../styles/typography";

const Card = styled.div`
  width: 190px;
  height: 96px;
  margin: 8px;
  border-radius: 8px;
  background-color: ${boardColors.mintGreen};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 8px;
  box-sizing: border-box;
`;

const BoardName = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 8px;
  ${typography.content.lg}
  padding: 0px 4px;
  box-sizing: border-box;
  color: ${colors.gray300};
`;

const Button = styled.button`
  width: 73px;
  height: 28px;
  background: ${colors.white};
  color: ${colors.gray400};
  border: none;
  padding: 6px 10px;
  box-sizing: border-box;
  border-radius: 4px;
`;

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
        <Card>
          <BoardName placeholder="Board name" value={formData.name} name="name" onChange={handleChange}/>
          <Button type="submit">CREATE</Button>
        </Card>
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