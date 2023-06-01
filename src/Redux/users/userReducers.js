import { DELETE_USER, ADD_USER } from "./userTypes";
export const userReducer = (state = [], { type, payload}) => {
    switch (type) {
        case ADD_USER: return [...state, payload];
        case DELETE_USER: return state.filter(el => el.id !== payload);
        default: return state
}
}