import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../../constants/api';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (userName: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}${userName}`);
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
