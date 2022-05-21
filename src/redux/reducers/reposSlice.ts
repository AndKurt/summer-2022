import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IReposDataFromApi } from '../../interfaces';
import { fetchRepos } from '../actions/reposActions';

interface IUserStore {
  isLoading: boolean;
  reposData: IReposDataFromApi[] | null;
  isError: boolean;
}

const initialState: IUserStore = {
  isLoading: false,
  reposData: null,
  isError: false,
};

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRepos.pending.type]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [fetchRepos.fulfilled.type]: (state, action: PayloadAction<IReposDataFromApi[]>) => {
      state.isLoading = false;
      state.reposData = action.payload;
      state.isError = false;
    },
    [fetchRepos.rejected.type]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const reposReducer = reposSlice.reducer;
