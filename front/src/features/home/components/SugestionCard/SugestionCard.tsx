import styles from './SugestionCard.module.css';

interface SuggestionCardProps {
  title: string;
  description: string;
}

export function SuggestionCard({
  title,
  description,
}: SuggestionCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.icon}>
        🌱
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>

        <p>{description}</p>
      </div>

      <button className={styles.button}>
        Ver detalhes
      </button>
    </article>
  );
}