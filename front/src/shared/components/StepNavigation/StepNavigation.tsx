import styles from './StepNavigation.module.css';

interface StepNavigationProps {
  showPrevious: boolean;

  onPrevious: () => void;
  onNext: () => void;

  nextLabel: string;

  disableNext?: boolean;
}

export function StepNavigation({
  showPrevious,
  onPrevious,
  onNext,
  nextLabel,
  disableNext,
}: StepNavigationProps) {
  return (
    <footer className={styles.container}>
      <div className={styles.actions}>
        {showPrevious && (
          <button
            className={styles.previous}
            onClick={onPrevious}
          >
            Voltar
          </button>
        )}

        <button
          className={styles.next}
          onClick={onNext}
          disabled={disableNext}
        >
          {nextLabel}
        </button>
      </div>
    </footer>
  );
}