import "./App.css";
import { useEffect, useState } from "react";
import { DataInterface, DataType, DetailsInterface, MovieInterfaceExtended, TVShowInterfaceExtended } from "./utils/types";
import { Tabs } from "./components/Tabs";
import { formatMovies, formatTVShows, isMoviesTabSelected } from "./utils/helpers";
import getTopRatedMovies from "./getters/getTopRatedMovies";
import getTopRatedTVShows from "./getters/getTopRatedTVShows";
import { DEFAULT_SELECTED_TAB } from "./utils/constants";
import { List } from "./components/List";
import { Search } from "./components/Search";
import { useDebounce } from "./utils/hooks";
import getMoviesByQuery from "./getters/getMoviesByQuery";
import getTVShowsByQuery from "./getters/getTVShowsByQuery";
import { Details } from "./components/Details";

function App() {
  const [selectedTab, setSelectedTab] = useState<DataType>(DEFAULT_SELECTED_TAB);
  const [query, setQuery] = useState<string>('');
  const [data, setData] = useState<DataInterface>({ movies: [], tvShows: [] });
  const [detailsData, setDetailsData] = useState<DetailsInterface | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const debounceValue = useDebounce(query, 1000);

  useEffect(() => {
    if (query.length <= 2) {
      const getFormatAndSetTopRated = async () => {
        setIsLoading(true);

        if (isMoviesTabSelected(selectedTab)){
          const topRatedMovies = await getTopRatedMovies();
          const topRatedMoviesFormatted: MovieInterfaceExtended[] = formatMovies(topRatedMovies);
          setData({
            tvShows: [],
            movies: topRatedMoviesFormatted
          });
        } else {
          const topRatedTVShows = await getTopRatedTVShows();
          const topRatedTVShowsFormatted: TVShowInterfaceExtended[] = formatTVShows(topRatedTVShows);
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
          const moviesFormatted: MovieInterfaceExtended[] = formatMovies(movies);
          setData({
            tvShows: [],
            movies: moviesFormatted
          });
        } else {
          const tvShows = await getTVShowsByQuery(query);
          const tvShowsFormatted: TVShowInterfaceExtended[] = formatTVShows(tvShows);
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
    {!detailsData ? (
      <>
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <Search query={query} onChange={(e) => setQuery(e.target.value)} />
        {isLoading ? (
          <p>Loading {isMoviesTabSelected(selectedTab) ? 'movies' : 'TV shows'}...</p>
        ) : (
          <List
            selectedTab={selectedTab}
            data={data}
            setDetailsData={setDetailsData}
          />
        )}
      </>
    ) : (
      <Details
        {...detailsData}
        resetDetailsData={() => setDetailsData(undefined)}
      />
    )}
    </>
  );
}

export default App;
