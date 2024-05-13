import styles from "./List.module.css";
import { DataInterface, DataType, DetailsInterface } from "../../utils/types";
import { Card } from "../Card";
import { isMoviesTabSelected } from "../../utils/helpers";

interface ListProps {
  selectedTab: DataType;
  data: DataInterface;
  setDetailsData: React.Dispatch<React.SetStateAction<DetailsInterface | undefined>>;
}

const List = ({ selectedTab, data, setDetailsData }: ListProps) => {
  return isMoviesTabSelected(selectedTab) ? (
    <>
      {data.movies.length === 0 && <p>No movies match the search</p>}
      
      <div className={styles['container']}>
        {data.movies.map((item) =>
          <Card
            key={item.id}
            imageSrc={item.imageURL}
            imageAlt={`${item.title} Backdrop`}
            title={item.title}
            onClick={() => setDetailsData(
              {
                type: 'movie',
                imageURL: item.imageURL,
                imageAlt: `${item.title} Backdrop`,
                title: item.title,
                overview: item.overview,
              }
            )}
          />
        )}
      </div>
    </>
  ) : (
    <>
      {data.tvShows.length === 0 && <p>No TV shows match the search</p>}

      <div className={styles['container']}>
        {data.tvShows.map((item) =>
          <Card
            key={item.id}
            imageSrc={item.imageURL}
            imageAlt={`${item.name} Backdrop`}
            title={item.name}
            onClick={() => setDetailsData(
              {
                type: 'tv',
                imageURL: item.imageURL,
                imageAlt: `${item.name} Backdrop`,
                title: item.name,
                overview: item.overview,
              }
            )}
          />
        )}
      </div>
    </>
  );
}

export default List;
