import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserDataFromApi } from '../../interfaces';
import { fetchUser } from '../actions/userAction';

interface IUserStore {
  isLoading: boolean;
  userData: IUserDataFromApi | null;
  isError: string;
}

const initialState: IUserStore = {
  isLoading: false,
  userData: null,
  isError: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending.type]: (state) => {
      state.isLoading = true;
      state.userData = null;
      state.isError = '';
    },
    [fetchUser.fulfilled.type]: (state, action: PayloadAction<IUserDataFromApi>) => {
      state.isLoading = false;
      state.userData = action.payload;
      state.isError = '';
    },
    [fetchUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.userData = null;
      state.isError = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
