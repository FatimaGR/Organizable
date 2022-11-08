import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export function createUser(userData){
  return apiFetch("/users", {body: userData})
  .then(u => {
    const {token, ...user} = u;
    sessionStorage.setItem(tokenKey, token);
    return user;
  })
}

export function getUser(id){
  return apiFetch(`/users/${id}`)
  .then(u => {
    const {token, ...user} = u;
    return user;
  })
}

export function editUser(id, userData){
  return apiFetch(`/users/${id}`, {body: userData, method: "PATCH"})
}

export function deleteUser(id){
  return apiFetch(`/users/${id}`, {method: "DELETE"})
}