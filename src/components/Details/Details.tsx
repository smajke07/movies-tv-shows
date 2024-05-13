import styles from "./Details.module.css";
import { DetailsInterface } from "../../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/pro-light-svg-icons";
import placeholderImage from "./../../assets/images/placeholder-image.webp";

interface DetailsProps extends DetailsInterface {
  resetDetailsData?: () => void;
}

const Details = ({ type, imageURL, imageAlt, title, overview, resetDetailsData }: DetailsProps) => {
  return (
    <section className={styles['wrapper']}>
      <div>
        <button className={styles['button']} onClick={resetDetailsData}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <span className={styles['text']}>Back</span>
        </button>
      </div>
      <div className={styles['content']}>
        <img
          src={imageURL || placeholderImage}
          alt={imageAlt || title}
          className={styles['image']}
        />
        <h1 className={styles['title']}>{title}</h1>
        <div className={styles['overview']}>
          <span>{type === 'movie' ? 'Movie' : 'TV Show'} overview:</span>
          <p>- {overview || 'None provided'}</p>
        </div>    
      </div>
    </section>
  )
}

export default Details;
