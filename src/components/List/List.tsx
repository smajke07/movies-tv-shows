import styles from "./List.module.css";
import { DataInterface, DataType } from "../../utils/types";
import { Card } from "../Card";
import { isMoviesTabSelected } from "../../utils/helpers";

interface ListProps {
  selectedTab: DataType;
  data: DataInterface;
}

const List = ({ selectedTab, data }: ListProps) => {
  return isMoviesTabSelected(selectedTab) ? (
    <>
      {data.movies.length === 0 && <p className={styles['no--data']}>No movies match the search</p>}
      
      <div className={styles['container']}>
        {data.movies.map((item) =>
          <Card key={item.id} imageSrc={item.imageURL} imageAlt={`${item.title} Poster`} title={item.title}/>
        )}
      </div>
    </>
  ) : (
    <>
      {data.tvShows.length === 0 && <p className={styles['no--data']}>No TV shows match the search</p>}

      <div className={styles['container']}>
        {data.tvShows.map((item) =>
          <Card key={item.id} imageSrc={item.imageURL} imageAlt={`${item.name} Poster`} title={item.name}/>
        )}
      </div>
    </>
  );
}

export default List;
