import { useState } from "react";
import styled from "@emotion/styled";
import Sortable from "sortablejs";
import { createCard, deleteCard } from "../services/card-services";
import { New } from "../styles/input";
import { colors } from "../styles/colors";
import { icons } from "../styles/icons";
import { CreateButton, TrashButton } from "../styles/button";

const NewCard = styled.form`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  gap: 10px;
`;

const Card = styled.div`
  background: ${colors.white};
  border-radius: 8px;
  padding: 4px;
  width: 100%;
  margin: 5px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export function Cards({listId, card}) {

  function handleDelete(){
    deleteCard(listId, card.cardId)
    .catch(error => console.log(error))
  }

  return(
    <Card>
      <a>{card.name}</a>
      <TrashButton onClick={handleDelete}>{icons.trash}</TrashButton>
    </Card>
  )
}

export function CreateCards({listId}) {
  const [cardData, setCardData] = useState({
    name: "",
  })

  function handleSubmit(e) {
    e.preventDefault();
    createCard(listId, cardData);
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setCardData({ ... cardData, [name]: value});
  }

  return(
    <NewCard onSubmit={handleSubmit}>
      <New
        name="name"
        value={cardData.name}
        onChange={handleChange}
        placeholder="new card"
      />
      <CreateButton type="submit">{icons.plus}</CreateButton>
    </NewCard>
  )
}

export function addSortableCard(){
  const cardSortables = document.querySelectorAll(".container-card");
  cardSortables.forEach(cardSortable => {
    new Sortable(cardSortable, {
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