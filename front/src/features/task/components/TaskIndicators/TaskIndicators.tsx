import styles from './TaskIndicators.module.css';

interface TaskIndicatorsProps {
  total: number;
  current: number;
}

export function TaskIndicators({
  total,
  current,
}: TaskIndicatorsProps) {

  return (
    <div className={styles.container}>
      {Array.from({
        length: total,
      }).map((_, index) => (

        <span
          key={index}
          className={
            index === current
              ? styles.active
              : styles.dot
          }
        />

      ))}
    </div>
  );
}