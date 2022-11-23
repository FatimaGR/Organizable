import { deleteCard } from "../services/card-services";

function Cards({listId, card}) {

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

export default Cards;