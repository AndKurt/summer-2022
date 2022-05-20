import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';

export const fetchUser = createAsyncThunk('user/fetchUser', async (userName: string) => {
  const response = await axios.get(`${BASE_URL}${userName}`);

  return response.data;
});
