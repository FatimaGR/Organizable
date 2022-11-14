import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import CardBoard from "../components/card-board";
import CreateBoard from "../components/create-board";
import { Modal } from "../components/create-modal";
import { getBoards, updateBoard } from "../services/board-services";

const ContainerBoards = styled.div`
  display: flex;
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

  const starredBoards = boards.filter((board) => {
    return board.starred == true & board.closed == false;
  })

  const unstarredBoards = boards.filter((board) => {
    return board.starred == false & board.closed == false;
  })

  return(
    <div>
      <h1>My Boards</h1>
      <div>
        <h2>Starred Boards</h2>
        <ContainerBoards>
          {starredBoards.map((board) => {
            return(
              <div>
              <CardBoard board={board}/>
              </div>
            )
          })}
        </ContainerBoards>
      </div>
      <div>
        <h2>Boards</h2>
        <ContainerBoards>
          {unstarredBoards.map((board) => {
            return(
              <div>
              <CardBoard board={board}/>
              </div>
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