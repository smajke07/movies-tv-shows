import { useEffect, useState } from "react";
import "./App.css";
import { DataInterface, DataType, MovieInterfaceExtended, TVShowInterfaceExtended } from "./utils/types";
import { Tabs } from "./components/Tabs";
import { isMoviesTabSelected } from "./utils/helpers";
import getTopRatedMovies from "./getters/getTopRatedMovies";
import getTopRatedTVShows from "./getters/getTopRatedTVShows";
import { DEFAULT_SELECTED_TAB } from "./utils/constants";
import { List } from "./components/List";
import { Search } from "./components/Search";
import { useDebounce } from "./utils/hooks";
import getMoviesByQuery from "./getters/getMoviesByQuery";
import getTVShowsByQuery from "./getters/getTVShowsByQuery";

function App() {
  const [selectedTab, setSelectedTab] = useState<DataType>(DEFAULT_SELECTED_TAB);
  const [query, setQuery] = useState<string>('');
  const [data, setData] = useState<DataInterface>({ movies: [], tvShows: [] });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const debounceValue = useDebounce(query, 1000);

  useEffect(() => {
    if (query.length <= 2) {
      const getFormatAndSetTopRated = async () => {
        setIsLoading(true);

        if (isMoviesTabSelected(selectedTab)){
          const topRatedMovies = await getTopRatedMovies();

          // Format movies if necessary
          const topRatedMoviesFormatted: MovieInterfaceExtended[] = topRatedMovies.map(movie => (
            {
              ...movie, 
              imageURL: movie.backdrop_path ? `https://image.tmdb.org/t/p/w500_and_h282_face${movie.backdrop_path}` : ``
            }
          ));

          setData({
            tvShows: [],
            movies: topRatedMoviesFormatted
          });
        } else {
          const topRatedTVShows = await getTopRatedTVShows();

          // Format TV shows if necessary
          const topRatedTVShowsFormatted: TVShowInterfaceExtended[] = topRatedTVShows.map(tvShow => (
            {
              ...tvShow, 
              imageURL: tvShow.backdrop_path ? `https://image.tmdb.org/t/p/w500_and_h282_face${tvShow.backdrop_path}` : ``
            }
          ));

          setData({
            movies: [],
            tvShows: topRatedTVShowsFormatted
          });
        }

        setIsLoading(false);
      }

      getFormatAndSetTopRated();
    } else {
      const getFormatAndSetByQuery = async () => {
        setIsLoading(true);

        if (isMoviesTabSelected(selectedTab)){
          const movies = await getMoviesByQuery(query);

          // Format movies if necessary
          const moviesFormatted: MovieInterfaceExtended[] = movies.map(movie => (
            {
              ...movie, 
              imageURL: movie.backdrop_path ? `https://image.tmdb.org/t/p/w500_and_h282_face${movie.backdrop_path}` : ``
            }
          ));

          setData({
            tvShows: [],
            movies: moviesFormatted
          });
        } else {
          const tvShows = await getTVShowsByQuery(query);

          // Format TV shows if necessary
          const tvShowsFormatted: TVShowInterfaceExtended[] = tvShows.map(tvShow => (
            {
              ...tvShow, 
              imageURL: tvShow.backdrop_path ? `https://image.tmdb.org/t/p/w500_and_h282_face${tvShow.backdrop_path}` : ``
            }
          ));

          setData({
            movies: [],
            tvShows: tvShowsFormatted
          });
        }

        setIsLoading(false);
      }

      getFormatAndSetByQuery();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab, debounceValue]);
  
  return (
    <>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Search query={query} onChange={(e) => setQuery(e.target.value)} />
      {isLoading ? (
        <p>Loading data...</p>
      ) : (
        <List selectedTab={selectedTab} data={data} />
      )}
    </>
  );
}

export default App;
