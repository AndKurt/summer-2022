export interface IUserDataFromApi {
  login: string;
  name: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

export interface IReposDataFromApi {
  id?: string;
  name: string;
  description: string;
  html_url: string;
}
