import { useState } from "react";
import { createCard } from "../services/card-services";
import { deleteList, updateList } from "../services/list-services";
import Cards from "./cards";

function Lists({boardId, list}) {
  const [isChecked, setIsChecked] = useState(false);
  const [listData, setListData] = useState({
    name: list.name,
  })
  const [cardData, setCardData] = useState({
    name: "",
  })

  function handleOnChange() {
    setIsChecked(!isChecked)
  }

  function handleSubmitList(e) {
    e.preventDefault();
    updateList(boardId, list.listId, listData);
  }

  function handleChangeList(e) {
    const {name, value} = e.target;
    setListData({ ... listData, [name]: value});
  }

  function handleSubmitCard(e) {
    e.preventDefault();
    createCard(list.listId, cardData);
  }

  function handleChangeCard(e) {
    const {name, value} = e.target;
    setCardData({ ... cardData, [name]: value});
  }

  function handleDelete(){
    deleteList(boardId, list.listId)
    .catch(error => console.log(error));
  }

  if (isChecked == false){
    return(
    <div>
      <a>{list.name}</a>
      <input
        name="edit"
        type="checkbox"
        checked={isChecked}
        onChange={handleOnChange}
      />
      <button onClick={handleDelete}>delete</button>
      {list.cards.map((card) => {
        return(
          <Cards key={card.id} listId={list.listId} card={card}/>
        )
      })}
      <form onSubmit={handleSubmitCard}>
        <input
          name="name"
          value={cardData.name}
          onChange={handleChangeCard}
          placeholder="new card"
        />
        <button type="submit">más</button>
      </form>
    </div>
  )
  } else {
    return(
      <div>
      <form onSubmit={handleSubmitList}>
        <input
          name="name"
          value={listData.name}
          onChange={handleChangeList}
        />
        <input
          name="edit"
          type="checkbox"
          checked={isChecked}
          onChange={handleOnChange}
        />
        <button type="submit">edit</button>
      </form>
      {list.cards.map((card) => {
        return(
          <Cards key={card.id} listId={list.listId} card={card}/>
        )
      })}
      <form onSubmit={handleSubmitCard}>
        <input
          name="name"
          value={cardData.name}
          onChange={handleChangeCard}
          placeholder="new card"
        />
        <button type="submit">más</button>
      </form>
      </div>
    )
  }
  
}

export default Lists;