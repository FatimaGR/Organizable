import { useState } from "react";
import Sortable from "sortablejs";
import { createCard, deleteCard } from "../services/card-services";

export function Cards({listId, card}) {

  function handleDelete(){
    deleteCard(listId, card.cardId)
    .catch(error => console.log(error))
  }

  return(
    <div>
      <a>{card.name}</a>
      <button onClick={handleDelete}>X</button>
    </div>
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
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={cardData.name}
        onChange={handleChange}
        placeholder="new card"
      />
      <button type="submit">más</button>
    </form>
  )
}