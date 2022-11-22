import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { deleteBoard, updateBoard } from "../services/board-services";

const Card = styled.div`
  width: 190px;
  height: 96px;
  border: 1px solid black;
  margin: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.color};
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
        <a href={`/Board/${board?.id}`}>{board?.name}</a>
        <input 
          id={board?.id} 
          name="starred" 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleOnChangeChecked}
        />
        {isChecked ? handleStarred(board?.id, true) : handleStarred(board?.id, false)}
        <input 
          name="closed" 
          type="checkbox" 
          checked={isActive} 
          onChange={handleOnChangeActive}
        />
        {isActive ? handleClosed(board?.id, true) : handleClosed(board?.id, false)}
      </Card>
    )
  } else {
    return(
      <Card color={board?.color}>
        <a href={`/Board/${board?.id}`}>{board?.name}</a>
        <input 
          name="closed" 
          type="checkbox" 
          checked={isActive} 
          onChange={handleOnChangeActive}
        />
        {isActive ? handleClosed(board?.id, true) : handleClosed(board?.id, false)}
        <input 
          name="delete" 
          type="checkbox" 
          checked={isDelete} 
          onChange={handleDelete}
        />
      </Card>
    )
  }
}

export default CardBoard;