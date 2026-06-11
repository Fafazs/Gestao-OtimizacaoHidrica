import styles from './TaskCarouselNavigation.module.css';

interface Props {
  hasPrevious: boolean;
  hasNext: boolean;

  onPrevious: () => void;
  onNext: () => void;
}

export function TaskCarouselNavigation({
  hasPrevious,
  hasNext,
  onPrevious,
  onNext,
}: Props) {

  return (
    <div className={styles.container}>

      <button
        onClick={onPrevious}
        disabled={!hasPrevious}
      >
        ← Anterior
      </button>

      <button
        onClick={onNext}
        disabled={!hasNext}
      >
        Próxima →
      </button>

    </div>
  );
}