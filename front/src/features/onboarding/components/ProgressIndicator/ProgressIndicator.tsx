import styles from './ProgressIndicator.module.css';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressIndicator({
  currentStep,
  totalSteps
}: ProgressIndicatorProps) {
  return (
    <footer className={styles.footer}>
      <p>
        Passo {currentStep} de {totalSteps}
      </p>
    </footer>
  );
}