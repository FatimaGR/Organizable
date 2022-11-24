import { useState } from "react";
import Sortable from "sortablejs";
import { deleteList, updateList } from "../services/list-services";
import { addSortableCard, Cards, CreateCards } from "./cards";

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
    <div>
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
      <div>
        <a>{list.name}</a>
        <input
          name="edit"
          type="checkbox"
          checked={isChecked}
          onChange={handleOnChange}
        />
        <button onClick={handleDelete}>delete</button>
      </div>
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
    </div>
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