import styled from "@emotion/styled";
import { useState } from "react";
import { deleteList, updateList } from "../services/list-services";
import { addSortableCard, Cards, CreateCards } from "./cards";
import { colors } from "../styles/colors";
import { typography, weight } from "../styles/typography";
import { New } from "../styles/input";
import { SaveButton, TrashButton } from "../styles/button";
import { icons } from "../styles/icons";
import Sortable from "sortablejs";
import edit from "../assets/edit.svg";
import cancel from "../assets/cancel.svg";

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
  margin: 0;
`;

const ModeEdit = styled.input`
  appearance: none;
  background-image: url(${edit});
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin: 0;
  &:checked {
    background-image: url(${cancel});
    width: 9px;
    height: 9px;
  }
`;

const EditForm = styled.form`
  display: flex;
  gap: 10px;
`;

const IconBackground = styled.div`
  border-radius: 50%;
  width: 28px;
  height: 28px;
  background: ${colors.gray200};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 3px;
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
        <EditForm onSubmit={handleSubmit}>
          <New
            name="name"
            value={listData.name}
            onChange={handleChange}
          />
          <SaveButton type="submit">{icons.check}</SaveButton>
          <IconBackground>
            <ModeEdit
              name="edit"
              type="checkbox"
              checked={isChecked}
              onChange={handleOnChange}
            />
          </IconBackground>
        </EditForm>
      </div>
      ) : (
      <NavbarList>
        <ListName>{list.name}</ListName>
        <div>
          <ModeEdit
            name="edit"
            type="checkbox"
            checked={isChecked}
            onChange={handleOnChange}
          />
          <TrashButton onClick={handleDelete}>{icons.trash}</TrashButton>
        </div>
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