import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedin: false,
    user: null
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeUser: (state, action) => {
            const { loggedin, user } = action.payload;
            state.loggedin = loggedin;
            state.user = user;
            localStorage.setItem("loggedin", JSON.stringify(state.loggedin));
            localStorage.setItem("user", JSON.stringify(state.user));
        }
    }
});

export const { changeUser } = userSlice.actions;
export default userSlice.reducer;