import styled from "@emotion/styled";
import { useState } from "react";
import { deleteBoard, updateBoard } from "../services/board-services";
import { colors } from "../styles/colors";
import { Link } from "react-router-dom";
import star from "../assets/star.svg";
import starred from "../assets/starred.svg";
import trash from "../assets/trash.svg";
import arrow from "../assets/arrow.svg";

const Card = styled.div`
  width: 190px;
  height: 96px;
  margin: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  box-sizing: border-box;
`;

const cardName = {
  fontSize: "18px",
  lineHeight: "28px",
  color: colors.gray400,
  outline: "none",
  textDecoration: "none",
}

const Options = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const StarButton = styled.input`
  appearance: none;
  background-image: url(${star});
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: auto;
  &:checked {
    background-image: url(${starred});
  }
`;

const IconBackground = styled.div`
  border-radius: 12px;
  width: 24px;
  height: 24px;
  background: rgba(255, 255, 255, 0.25);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 3px;
`;

const ClosedButton = styled.input`
  appearance: none;
  background-image: url(${trash});
  width: 16.3px;
  height: 17.5px;
  cursor: pointer;
  margin: 0;
  &:checked {
    background-image: url(${arrow});
    width: 10px;
    height: 12px;
  }
`;

const DeleteButton = styled.input`
  appearance: none;
  background-image: url(${trash});
  width: 16.3px;
  height: 17.5px;
  cursor: pointer;
  margin: 0;
`;


function CardBoard({board}){
  const [isChecked, setIsChecked] = useState(board.starred);
  const [isActive, setIsActive] = useState(board.closed);
  const [isDelete, setIsDelete] = useState(false);

  function handleOnChangeChecked() {
    setIsChecked(!isChecked);
  };

  function handleOnChangeActive() {
    setIsActive(!isActive);
  };

  function handleStarred(id, value) {
    const starred = {"starred": value}
    updateBoard(id, starred)
    .catch(error => console.log(error));
  }

  function handleClosed(id, value) {
    const closed = {"closed": value}
    updateBoard(id, closed)
    .catch(error => console.log(error));
  }

  function handleDelete(){
    setIsDelete(!isDelete);
    deleteBoard(board?.id)
    .catch(error => console.log(error));
  }

  if (board?.closed == false){
    return(
      <Card color={board?.color}>
        <Link to={`/Board/${board?.id}`} style={cardName}>{board?.name}</Link>
        <Options>
        <IconBackground>
          <ClosedButton 
            name="closed" 
            type="checkbox" 
            checked={isActive} 
            onChange={handleOnChangeActive}
          />
        </IconBackground>
        {isActive ? handleClosed(board?.id, true) : handleClosed(board?.id, false)}
        <IconBackground>
          <StarButton 
            id={board?.id} 
            name="starred" 
            type="checkbox" 
            checked={isChecked} 
            onChange={handleOnChangeChecked}
          />
        </IconBackground>
        {isChecked ? handleStarred(board?.id, true) : handleStarred(board?.id, false)}
        </Options>
      </Card>
    )
  } else {
    return(
      <Card color={board?.color}>
        <Link to={`/Board/${board?.id}`} style={cardName}>{board?.name}</Link>
        <Options>
        <IconBackground>
          <ClosedButton 
            name="closed" 
            type="checkbox" 
            checked={isActive} 
            onChange={handleOnChangeActive}
          />
        </IconBackground>
        {isActive ? handleClosed(board?.id, true) : handleClosed(board?.id, false)}
        <IconBackground>
        <DeleteButton 
          name="delete" 
          type="checkbox" 
          checked={isDelete} 
          onChange={handleDelete}
        />
        </IconBackground>
        </Options>
      </Card>
    )
  }
}

export default CardBoard;