import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import CreateBoard from "../components/create-board";
import { Modal } from "../components/create-modal";
import { getBoards } from "../services/board-services";

const ContainerBoards = styled.div`
  display: flex;
`;

const CardBoard = styled.div`
  width: 190px;
  height: 96px;
  border: 1px solid black;
  margin: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.color};
`;

const CreateBoardCard = styled.button`
  width: 190px;
  height: 96px;
  border: 1px solid black;
  margin: 8px;
  border-radius: 8px;
`;

function MyBoards() {
  const [boards, setBoards] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getBoards()
    .then(boards => setBoards(boards))
    .catch(error => console.log(error))
  }, [])

  return(
    <div>
      <h1>My Boards</h1>
      <div>
        <h2>Starred Boards</h2>
        <ContainerBoards>
          <CardBoard>
            <p>Name Board</p>
            <button>Star</button>
            <button>Delete</button>
          </CardBoard>
        </ContainerBoards>
      </div>
      <div>
        <h2>Boards</h2>
        <ContainerBoards>
          {boards.map((board) => {
            return(
              <CardBoard key={board.id} color={board.color}>
                {console.log(board)}
                <p>{board.name}</p>
                <button>Star</button>
                <button>Delete</button>
              </CardBoard>
            )
          })}
          <Modal open={open} close={() => setOpen(false)}><CreateBoard/></Modal>
          <CreateBoardCard onClick={() => setOpen(true)}>Create Board</CreateBoardCard>
        </ContainerBoards>
      </div>
    </div>
  )
}

export default MyBoards;