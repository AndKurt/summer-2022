import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserDataFromApi } from '../../interfaces';
import { fetchUser } from '../actions/userAction';

interface IUserStore {
  isLoading: boolean;
  userData: IUserDataFromApi | null;
  isError: boolean;
}

const initialState: IUserStore = {
  isLoading: false,
  userData: null,
  isError: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending.type]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [fetchUser.fulfilled.type]: (state, action: PayloadAction<IUserDataFromApi>) => {
      state.isLoading = false;
      state.userData = action.payload;
      state.isError = false;
    },
    [fetchUser.rejected.type]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const userReducer = userSlice.reducer;
