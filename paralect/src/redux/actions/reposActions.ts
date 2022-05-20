import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';
const REPOS_PER_PAGE = 4;

interface IFetcRepos {
  userName: string;
  currentPage?: number;
}

export const fetchRepos = createAsyncThunk(
  'user/fetcRepos',
  async ({ userName, currentPage = 1 }: IFetcRepos) => {
    const response = await axios.get(
      `${BASE_URL}${userName}/repos?per_page=${REPOS_PER_PAGE}&page=${currentPage}`,
      {
        headers: {
          Authorization: `Token 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`,
        },
      }
    );

    return response.data;
  }
);
