import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


export interface UserInterface {
    name: string | null,
    email: string | null,
    roles: string[],
    status: boolean
};

export const initialUser: UserInterface = {
    name: null,
    email: null,
    roles: [],
    status: false
};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: {
        setUser: (_state, action: PayloadAction<UserInterface>) => {
            return { ...action.payload };
        }
    }
});


export const { setUser } = userSlice.actions;
export default userSlice.reducer;