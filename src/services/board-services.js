import apiFetch from "./api-fetch";

export function getBoards(){
  return apiFetch("/boards")
}

export function getBoardById(id){
  return apiFetch(`/boards${id}`)
}

export function createBoards(boardData){
  return apiFetch("/boards", {body: boardData})
}

export function updateBoard(id, data){
  return apiFetch(`/boards${id}`, {body: data, method: "PATCH"})
}

export function deleteBoard(id){
  return apiFetch(`/boards/${id}`, {method: "DELETE"})
}