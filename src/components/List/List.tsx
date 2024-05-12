import styles from './List.module.css';
import { DataInterface, DataType } from '../../utils/types';
import { Card } from '../Card';

interface ListProps {
  selectedTab: DataType;
  data: DataInterface;
}

const List = ({ selectedTab, data }: ListProps) => {
  return (
      <div className={styles['container']}>
        {selectedTab === 'movie' ? (
          <>
            {data.movies.map((item) =>
              <Card key={item.id} imageSrc={item.poster_path} imageAlt={`${item.title} Poster`} title={item.title}/>
            )}
            {data.movies.length === 0 && <p>No movies match the search</p>}
          </>
        ) : (
          <>
            {data.tvShows.map((item) =>
              <Card key={item.id} imageSrc={item.poster_path} imageAlt={`${item.name} Poster`} title={item.name}/>
            )}
            {data.tvShows.length === 0 && <p>No TV shows match the search</p>}
          </>
        )}
      </div>
  )
}

export default List;
