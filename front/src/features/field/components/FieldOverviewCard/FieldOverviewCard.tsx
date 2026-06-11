import styles from './FieldOverviewCard.module.css';
import { useNavigate } from 'react-router-dom';
interface FieldOverviewCardProps {
  fieldId: number;

  fieldName: string;
  cropName: string;

  completedTasksToday: number;
  totalTasksToday: number;

  onDelete: (fieldId: number) => void;
}

export function FieldOverviewCard({
  fieldName,
  fieldId,
  cropName,
  completedTasksToday,
  totalTasksToday,
  onDelete,
}: FieldOverviewCardProps) {
  const navigate = useNavigate();
  const isCompleted =
    completedTasksToday === totalTasksToday &&
    totalTasksToday > 0;

  return (
    <section className={styles.card} onDoubleClick={() =>
    navigate(`/fields/${fieldId}`)
  }>

      <div className={styles.header}>
        <span className={styles.icon}>
          🌱
        </span>

        <div>
          <h3>{fieldName}</h3>

          <p>{cropName}</p>
        </div>
      </div>

      <div className={styles.footer}>
        <strong>
          {completedTasksToday}/{totalTasksToday}
          {' '}
          tarefas concluídas
        </strong>

        <span>
          {isCompleted
            ? '✅ Concluído'
            : '⏳ Pendente'}
        </span>
       <div>
  <button
    onClick={(e) => {
      e.stopPropagation();

      onDelete(fieldId);
    }}
  >
    🗑️
  </button>
</div>
      </div>

    </section>
  );
}