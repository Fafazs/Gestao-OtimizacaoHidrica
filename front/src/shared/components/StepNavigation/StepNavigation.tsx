import styles from './StepNavigation.module.css';

interface StepNavigationProps {
  onNext: () => void;
  onPrevious?: () => void;

  disableNext?: boolean;
  showPrevious?: boolean;
}

export function StepNavigation({
  onNext,
  onPrevious,
  disableNext = false,
  showPrevious = true,
}: StepNavigationProps) {
  return (
    <div className={styles.navigation}>
      {showPrevious && (
        <button
          className={styles.secondaryButton}
          onClick={onPrevious}
        >
          Voltar
        </button>
      )}

      <button
        className={styles.primaryButton}
        disabled={disableNext}
        onClick={onNext}
      >
        Continuar
      </button>
    </div>
  );
}