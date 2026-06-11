import styles from './FloatingActionButton.module.css';

interface FloatingActionButtonProps {
  onClick?: () => void;
}

export function FloatingActionButton({
  onClick
}: FloatingActionButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
    >
      +
    </button>
  );
}