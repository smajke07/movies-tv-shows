import { DataType, TabInterface } from "./types";

export const FETCH_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2EyY2E2YmZkZmYzZTg2MjRmNjQ4MDExODA5OTYyYyIsInN1YiI6IjY2NDBiNzkzNjNjYzdhOWU1MDU5YTM1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ytjCXsizNeIuT3_94CWWBGrUAj4JXVdZ3_6iznuZEVM'
    }
  };

export const TABS_OPTIONS: TabInterface[] = [
    { id: 'movie', label: 'Movies' }, 
    { id: 'tv', label: 'TV Shows' }
];

export const DEFAULT_SELECTED_TAB: DataType = 'movie';

export const NUMBER_OF_TOP_RATED = 10;
