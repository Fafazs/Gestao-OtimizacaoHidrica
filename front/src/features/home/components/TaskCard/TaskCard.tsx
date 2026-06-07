import styles from './TaskCard.module.css';

interface TaskCardProps {
  cropName: string;
  irrigationTime: number;
  fieldName: string;
}

export function TaskCard({
  cropName,
  irrigationTime,
  fieldName,
}: TaskCardProps) {
  return (
    <section className={styles.card}>
      <span className={styles.badge}>
        {fieldName}
      </span>

      <h2>{cropName}</h2>

      <p>
        Tempo de rega recomendado
      </p>

      <strong>
        {irrigationTime} MIN
      </strong>

      <button className={styles.button}>
        💧 Regar por {irrigationTime} Min
      </button>
    </section>
  );
}