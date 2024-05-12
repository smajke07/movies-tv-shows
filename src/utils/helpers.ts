import { DataType } from "./types";

export const isMoviesTabSelected = (selectedTab: DataType) => selectedTab === 'movie';

export const isTVShowsTabSelected = (selectedTab: DataType) => selectedTab === 'tv';
