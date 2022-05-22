import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { BASE_URL, REPOS_PER_PAGE } from '../../constants/api';

interface IFetcRepos {
  userName: string;
  currentPage?: number;
}

export const fetchRepos = createAsyncThunk(
  'user/fetcRepos',
  async ({ userName, currentPage = 1 }: IFetcRepos, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}${userName}/repos?per_page=${REPOS_PER_PAGE}&page=${currentPage}`
      );
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      if (err.response?.status === 404) {
        return rejectWithValue('Not found');
      }
      return rejectWithValue('Another error');
    }
  }
);
