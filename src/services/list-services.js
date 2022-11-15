import apiFetch from "./api-fetch";

export function createList(boardId, listData){
  return apiFetch(`/boards/${boardId}/lists`, {body: listData})
}

export function updateList(boardId, listId, data){
  return apiFetch(`/boards/${boardId}/lists/${listId}`, {body: data, method: "PATCH"} )
}

export function deleteList(boardId, listId){
  return apiFetch(`/boards/${boardId}/lists/${listId}`)
}

export function sortList(boardId, sort){
  return apiFetch(`/boards/${boardId}/lists/sort`, {body: sort})
}