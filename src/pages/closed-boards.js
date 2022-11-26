import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getBoards } from "../services/board-services";
import CardBoard from "../components/card-board";

const ContainerBoards = styled.div`
  display: flex;
  flex-wrap: wrap;
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