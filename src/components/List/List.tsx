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
          </>
        ) : (
          <>
            {data.tvShows.map((item) =>
              <Card key={item.id} imageSrc={item.poster_path} imageAlt={`${item.name} Poster`} title={item.name}/>
            )}
          </>
        )}
      </div>
  )
}

export default List;
