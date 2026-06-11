import styles from './StepHeader.module.css';

interface StepHeaderProps {
  currentStep: number;
  totalSteps: number;
  title: string;
  description: string;
}

export function StepHeader({
  currentStep,
  totalSteps,
  title,
  description,
}: StepHeaderProps) {
  return (
    <section className={styles.header}>
      <span className={styles.step}>
        Passo {currentStep} de {totalSteps}
      </span>

      <div className={styles.progress}>
        <div
          className={styles.progressFill}
          style={{
            width: `${(currentStep / totalSteps) * 100}%`,
          }}
        />
      </div>

      <h2 className={styles.title}>
        {title}
      </h2>

      <p className={styles.description}>
        {description}
      </p>
    </section>
  );
}