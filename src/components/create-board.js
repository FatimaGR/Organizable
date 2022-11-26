import { useState } from "react";
import styled from "@emotion/styled";
import { createBoards } from "../services/board-services";
import { boardColors, colors } from "../styles/colors";
import { typography } from "../styles/typography";
import { New } from "../styles/input";

const Card = styled.div`
  width: 190px;
  height: 96px;
  margin: 0;
  border-radius: 8px;
  background-color: ${boardColors.mintGreen};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 8px;
  box-sizing: border-box;
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
  cursor: pointer;
`;

const Colors = styled.div`
  width: 112px;
  height: 112px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;
  box-sizing: border-box;
`;

const Color = styled.input`
  -webkit-appearance: none;
  margin: 0;
  height: 32px;
  width: 32px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  &:hover {
    border: 4px solid ${colors.white};
  }
  &:checked {
    border: 4px solid ${colors.white};
  }
`;

const FormContainer = styled.form`
  gap: 16px;
  padding: 6px 32px;
  box-sizing: border-box;
  display: flex;
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
    <FormContainer onSubmit={handleSubmit}>
      <Card>
        <New placeholder="Board name" value={formData.name} name="name" onChange={handleChange}/>
        <Button type="submit">CREATE</Button>
      </Card>
      <Colors>
        {Object.entries(boardColors).map(([colorName, color]) => (
          <Color key={colorName} type="radio" name="color" value={color} color={color} onChange={handleChange}/>
        ))}
        
      </Colors>
    </FormContainer>
  )
}

export default CreateBoard;