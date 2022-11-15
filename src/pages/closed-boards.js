import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import CardBoard from "../components/card-board";
import { getBoards } from "../services/board-services";

const ContainerBoards = styled.div`
  display: flex;
`;

function ClosedBoards() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    getBoards()
    .then(boards => setBoards(boards))
    .catch(error => console.log(error))
  }, [])

  const closedBoards = boards.filter((board) => {
    return board.closed == true;
  })

  return(
    <div>
      <h1>Closed Boards</h1>
      <ContainerBoards>
        {closedBoards.map((board) => {
          return(
            <CardBoard key={board.id} board={board} />
          )
        })}
      </ContainerBoards>
    </div>
  )
}

export default ClosedBoards;