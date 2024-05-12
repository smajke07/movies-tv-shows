import styles from "./Card.module.css";
import placeholderImage from "./../../assets/images/placeholder-image.webp";

interface CardProps {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
}

const Card = ({ imageSrc, imageAlt, title }: CardProps) => {
  return (
    <article className={styles['wrapper']}>
      <img src={imageSrc || placeholderImage} alt={imageAlt || title} className={styles['image']} />
      <h2 className={styles['title']}>{title}</h2>
    </article>
  )
}

export default Card;
