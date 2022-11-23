import apiFetch from "./api-fetch";


export function createCard(listId, cardData){
  return apiFetch(`/lists/${listId}/cards`, {body: cardData})
}

export function deleteCard(listId, cardId){
  return apiFetch(`/lists/${listId}/cards/${cardId}`, {method: "DELETE"})
}

export function sortCard(listId, sort){
  return apiFetch(`/lists/${listId}/cards/sort`, {body: sort})
}