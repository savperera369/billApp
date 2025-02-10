import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: true,
    userId: null,
    userEmail: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.userId = action.payload.userId;
            state.userEmail = action.payload.userEmail;
        },
        logout: (state, action) => {
            state.isLoggedIn = false;
            state.userId = null;
            state.userEmail = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;