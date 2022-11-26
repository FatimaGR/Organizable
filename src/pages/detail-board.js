import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Lists, addSortableList } from "../components/lists";
import { getBoardById } from "../services/board-services";
import { createList } from "../services/list-services";
import logo from "../assets/logo.svg";
import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { weight } from "../styles/typography";
import { New } from "../styles/input";

const BoardBackground = styled.div`
  min-height: 100%;
  width: 100%;
  padding: 32px;
  box-sizing: border-box;
  background-color: ${(props) => props.color};
`;

const Page = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
`;

const Title = styled.div`
  width: 100%;
  height: 48px;
  background-color: ${colors.gray100};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoardName = styled.h1`
  ${weight.semibold}
  margin: 0px;
  color: ${colors.gray500};
`;

const CreateList = styled.form`
  background: ${colors.gray100};
  border-radius: 8px;
  width: 280px;
  height: 48px;
  display: flex;
  flex-direction: row;
  padding: 8px;
  box-sizing: border-box;
  gap: 10px;
`;

const ContainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 32px;
`;

function DetailBoard() {
  const [board, setBoard] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
  })

  let params = useParams();

  useEffect(() => {
    getBoardById(params.id)
    .then(board => setBoard(board))
    .catch(error => console.log(error))
  }, [])
  
  function handleSubmit(e) {
    e.preventDefault();
    createList(params.id, formData);
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData({ ... formData, [name]: value});
  }

  return(
    <Page>
      <Title>
        <Link to={"/"}><img src={logo}/></Link>
      </Title>
      <BoardBackground color={board?.color}>
        <BoardName>{board?.name}</BoardName>
        <ContainerList className="container-list">
          {board?.lists.map((list) => {
            addSortableList();
            return(
              <Lists key={list.id} list={list} boardId={params.id}/>
            )
          })}
          <CreateList onSubmit={handleSubmit}>
            <New placeholder="new list" value={formData.name} name="name" onChange={handleChange}/>
            <button type="submit">+</button>
          </CreateList>
        </ContainerList>
      </BoardBackground>
    </Page>
  )
}

export default DetailBoard;