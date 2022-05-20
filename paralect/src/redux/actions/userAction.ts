import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

const BASE_URL = 'https://api.github.com/users/';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (userName: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}${userName}`, {
        headers: {
          Authorization: `Token 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`,
        },
      });
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err.response?.status);
    }
  }
);
