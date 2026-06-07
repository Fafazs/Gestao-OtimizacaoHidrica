import type { ReactNode } from 'react';
import styles from './PrimaryButton.module.css';

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export function PrimaryButton({
  children,
  onClick
}: PrimaryButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
}