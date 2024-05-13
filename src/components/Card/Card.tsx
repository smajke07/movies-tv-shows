import styles from "./Card.module.css";
import placeholderImage from "./../../assets/images/placeholder-image.webp";

interface CardProps {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  onClick?: () => void;
}

const Card = ({ imageSrc, imageAlt, title, onClick }: CardProps) => {
  return (
    <article className={styles['wrapper']} onClick={onClick}>
      <img
        src={imageSrc || placeholderImage}
        alt={imageAlt || title}
        className={styles['image']}
      />
      <h2 className={styles['title']}>{title}</h2>
    </article>
  )
}

export default Card;
