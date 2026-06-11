import styles from './FieldStatusCard.module.css';

interface FieldStatusCardProps {
  totalFields: number;
  completedFields: number;
}

export function FieldStatusCard({
  totalFields,
  completedFields,
}: FieldStatusCardProps) {

  const allCompleted =
    totalFields > 0 &&
    totalFields === completedFields;

  return (
    <section className={styles.card}>
      <div className={styles.icon}>
        🌱
      </div>

      <div className={styles.content}>
        <h3>
          {allCompleted
            ? 'Todos os campos estão saudáveis'
            : 'Existem tarefas pendentes'}
        </h3>

        <p>
          {completedFields} de {totalFields}
          campos concluíram suas tarefas hoje.
        </p>
      </div>
    </section>
  );
}