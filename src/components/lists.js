import { useState } from "react";
import { deleteList, updateList } from "../services/list-services";

function Lists({boardId, list}) {
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
    </div>
  )
  } else {
    return(
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
    )
  }
  
}

export default Lists;