import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userInfoState {
	currency: string;
}

const initialState: userInfoState = {
	currency: 'EUR',
};

const userInfoSlice = createSlice({
	name: 'userInfo',
	initialState,
	reducers: {
		setCurrency(state, action: PayloadAction<string>) {
			state.currency = action.payload;
		},
	},
});

export const { setCurrency } = userInfoSlice.actions;
export default userInfoSlice.reducer;
