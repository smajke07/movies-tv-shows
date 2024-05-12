import { useEffect, useState } from 'react';
import './App.css';
import { DataInterface, DataType } from './utils/types';
import { Tabs } from './components/Tabs';
import { isMoviesTabSelected } from './utils/helpers';
import getTopRatedMovies from './getters/getTopRatedMovies';
import getTopRatedTVShows from './getters/getTopRatedTVShows';
import { DEFAULT_SELECTED_TAB } from './utils/constants';
import { List } from './components/List';
import { Search } from './components/Search';

function App() {
  const [selectedTab, setSelectedTab] = useState<DataType>(DEFAULT_SELECTED_TAB);
  const [query, setQuery] = useState<string>('');
  const [data, setData] = useState<DataInterface>({ movies: [], tvShows: [] });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getFormatAndSetData = async () => {
      setIsLoading(true);

      if (isMoviesTabSelected(selectedTab)){
        const topRatedMovies = await getTopRatedMovies();

        // Format movies if necessary

        setData({
          ...data,
          movies: topRatedMovies
        });
      } else {
        const topRatedShows = await getTopRatedTVShows();

        // Format TV shows if necessary

        setData({
          ...data,
          tvShows: topRatedShows
        });
      }

      setIsLoading(false);
    }

    getFormatAndSetData();
  }, [selectedTab]);
  
  return (
    <>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Search query={query} setQuery={setQuery} />
      {isLoading ? (
        <p>Loading data</p>
      ) : (
        <List selectedTab={selectedTab} data={data} />
      )}
      {/* {JSON.stringify(data)} */}
    </>
  );
}

export default App;
