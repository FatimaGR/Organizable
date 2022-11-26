import { useState } from "react";
import Sortable from "sortablejs";
import { deleteList, updateList } from "../services/list-services";
import { addSortableCard, Cards, CreateCards } from "./cards";
import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography, weight } from "../styles/typography";

const ListCard = styled.div`
  background: ${colors.gray100};
  border-radius: 8px;
  width: 280px;
  padding: 8px;
  gap: 10px;
  box-sizing: border-box;
`;

const NavbarList = styled.div`
  border-bottom: 1px solid ${colors.gray300};
  gap: 10px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ListName = styled.a`
  ${typography.heading.xs}
  ${weight.semibold}
  margin: 0px;
`;

const Options = styled.div`

`;

export function Lists({boardId, list}) {
  const [isChecked, setIsChecked] = useState(false);
  const [listData, setListData] = useState({
    name: list.name,
  })

  function handleOnChange() {
    setIsChecked(!isChecked)
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateList(boardId, list.listId, listData);
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setListData({ ... listData, [name]: value});
  }

  function handleDelete(){
    deleteList(boardId, list.listId)
    .catch(error => console.log(error));
  }

  return(
    <ListCard>
      {isChecked ? (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={listData.name}
            onChange={handleChange}
          />
          <input
            name="edit"
            type="checkbox"
            checked={isChecked}
            onChange={handleOnChange}
          />
          <button type="submit">edit</button>
        </form>
      </div>
      ) : (
      <NavbarList>
        <ListName>{list.name}</ListName>
        <Options>
          <input
            name="edit"
            type="checkbox"
            checked={isChecked}
            onChange={handleOnChange}
          />
          <button onClick={handleDelete}>delete</button>
        </Options>
      </NavbarList>
      ) }
      <div className="container-card">
      {list.cards.map((card) => {
        addSortableCard()
        return(
          <Cards key={card.id} listId={list.listId} card={card}/>
        )
      })}
      </div>
      <CreateCards listId={list.listId}/>
    </ListCard>
  )
}

export function addSortableList(){
  const listSortables = document.querySelectorAll(".container-list");
  listSortables.forEach(listSortable => {
    new Sortable(listSortable, {
      animation: 150,
      store: {
        set: function (sortable) {
          var order = sortable.toArray();
          console.log("hola", order)
        }
      }
    })
  })
}