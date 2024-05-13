import { ROOT_IMAGE_URL } from "./constants";
import { DataType, MovieInterface, TVShowInterface } from "./types";

export const isMoviesTabSelected = (selectedTab: DataType) => selectedTab === 'movie';

export const isTVShowsTabSelected = (selectedTab: DataType) => selectedTab === 'tv';

export const formatMovies = (movies: MovieInterface[]) => { 
    return movies.map(movie => (
        {
        ...movie, 
        imageURL: movie.backdrop_path ? `${ROOT_IMAGE_URL}${movie.backdrop_path}` : ``
        }
    ));
}

export const formatTVShows = (tvShows: TVShowInterface[]) => { 
    return tvShows.map(tvShow => (
        {
          ...tvShow, 
          imageURL: tvShow.backdrop_path ? `${ROOT_IMAGE_URL}${tvShow.backdrop_path}` : ``
        }
      ));
}
