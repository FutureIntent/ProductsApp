import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


export interface UserInterface {
    name: string | null,
    email: string | null,
    roles: string[],
    status: boolean
};

const initialState: UserInterface = {
    name: null,
    email: null,
    roles: [],
    status: false
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        storeUser: (state, action: PayloadAction<UserInterface>) => {
            state = action.payload;
        }
    }
});


export const { storeUser } = userSlice.actions;
export default userSlice.reducer;