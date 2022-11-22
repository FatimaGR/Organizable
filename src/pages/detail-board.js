import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Lists from "../components/lists";
import { getBoardById } from "../services/board-services";
import { createList } from "../services/list-services";

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
    <div>
      <h1>{board?.name}</h1>
      {board?.lists.map((list) => {
        return(
          <Lists key={list.id} list={list} boardId={params.id}/>
        )
      })}
      <form onSubmit={handleSubmit}>
        <input placeholder="new list" value={formData.name} name="name" onChange={handleChange}/>
        <button type="submit">+</button>
      </form>
    </div>
  )
}

export default DetailBoard;