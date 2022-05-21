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
      if (err.response?.status === 404) {
        return rejectWithValue('Not found');
      }
      return rejectWithValue('Another error');
    }
  }
);
