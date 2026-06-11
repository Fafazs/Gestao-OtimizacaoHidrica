// features/task/components/TaskHero/TaskHero.tsx

import styles from './TaskHero.module.css';

interface TaskHeroProps {

  taskId: number;

  title: string;

  description: string;

  fieldName: string;

  cropName: string;

  irrigationDuration: number;

  onComplete: (
    taskId: number
  ) => void;
}

export function TaskHero({
  taskId,
  title,
  description,
  fieldName,
  cropName,
  irrigationDuration,
  onComplete,
}: TaskHeroProps) {
  return (
    <section className={styles.card}>

      <span className={styles.badge}>
        {fieldName}
      </span>

      <h2>{title}</h2>

      <p>{description}</p>

      <small>
        Cultura: {cropName}
      </small>

      {irrigationDuration > 0 && (
        <strong>
          {irrigationDuration} MIN
        </strong>
      )}

      <button
  className={styles.button}
  onClick={() =>
    onComplete(taskId)
  }
>
  Concluir tarefa
</button>

    </section>
  );
}