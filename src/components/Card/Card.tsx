import styles from './Card.module.css';

interface CardProps {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
}

const Card = ({ imageSrc, imageAlt, title }: CardProps) => {
  return (
    <article className={styles['wrapper']}>
      {/* TODO: Add backup placeholder img if imageSrc is falsy */}
      <img src={imageSrc} alt={imageAlt || title} className={styles['image']} />
      <h2 className={styles['title']}>{title}</h2>
    </article>
  )
}

export default Card;
