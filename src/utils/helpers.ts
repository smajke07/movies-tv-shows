import { DataType, MovieInterface, TVShowInterface } from "./types";

export const isMoviesTabSelected = (selectedTab: DataType) => selectedTab === 'movie';

export const isTVShowsTabSelected = (selectedTab: DataType) => selectedTab === 'tv';

export const formatMovies = (movies: MovieInterface[]) => { 
    return movies.map(movie => (
        {
        ...movie, 
        imageURL: movie.backdrop_path ? `https://image.tmdb.org/t/p/w500_and_h282_face${movie.backdrop_path}` : ``
        }
    ));
}

export const formatTVShows = (tvShows: TVShowInterface[]) => { 
    return tvShows.map(tvShow => (
        {
          ...tvShow, 
          imageURL: tvShow.backdrop_path ? `https://image.tmdb.org/t/p/w500_and_h282_face${tvShow.backdrop_path}` : ``
        }
      ));
}
