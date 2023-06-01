import { ADD_USER, DELETE_USER } from "./userTypes";

export const addUserAC = (user) => {
    return {type: ADD_USER, payload: user}
}

export const delUserAC = (id) => {
    return{type: DELETE_USER, payload: id}
}