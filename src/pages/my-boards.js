import { useEffect, useState } from "react";
import { getBoards } from "../services/board-services";
import styled from "@emotion/styled";
import CardBoard from "../components/card-board";
import CreateBoard from "../components/create-board";
import { Modal } from "../components/create-modal";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const ContainerBoards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CreateBoardCard = styled.button`
  width: 190px;
  height: 96px;
  border: 3px solid ${colors.gray300};
  margin: 8px;
  border-radius: 8px;
  cursor: pointer;
  ${typography.content.lg}
  color: ${colors.gray400};
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
      {(starredBoards.length > 0) ? (
        <div>
        <h2>Starred Boards</h2>
        <ContainerBoards>
          {starredBoards.map((board) => {
            return(
              <CardBoard key={board.id} board={board}/>
            )
          })}
        </ContainerBoards>
      </div>
      ): ""}
      <div>
        <h2>Boards</h2>
        <ContainerBoards>
          {unstarredBoards.map((board) => {
            return(
              <CardBoard key={board.id} board={board} />
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