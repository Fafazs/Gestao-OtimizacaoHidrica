import styles from './TaskCard.module.css';

interface TaskCardProps {
  title: string;
  description: string;

  fieldName: string;
  cropName: string;

  irrigationDuration: number;
}

export function TaskCard({
  title,
  description,
  fieldName,
  cropName,
  irrigationDuration,
}: TaskCardProps) {

  return (
    <section className={styles.card}>

      <span className={styles.badge}>
        {fieldName}
      </span>

      <h2>
        {title}
      </h2>

      <p>
        {description}
      </p>

      <small>
        Cultura: {cropName}
      </small>

      {irrigationDuration > 0 && (
        <div className={styles.duration}>
  💧 {irrigationDuration} min
</div>
      )}

      <button className={styles.button}>
        ✅ Concluir tarefa
      </button>

    </section>
  );
}