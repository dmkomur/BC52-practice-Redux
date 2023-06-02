import { createSlice } from "@reduxjs/toolkit";
const initialState = {users: []}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, {payload}) => {
            state.users.push(payload)
        },
        deleteUser: (state, { payload }) => {
            state.users = state.users.filter(el => el.id !== payload)
        }

    }
}
)

export const { addUser, deleteUser } = userSlice.actions;
export const userReducer = userSlice.reducer;