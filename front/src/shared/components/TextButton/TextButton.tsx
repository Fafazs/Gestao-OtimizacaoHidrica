import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TextButton.module.css';

interface TextButtonProps {
  to: string;
  children: ReactNode;
}

export function TextButton({ to, children }: TextButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      className={styles.button}
      onClick={() => navigate(to)}
    >
      {children}
    </button>
  );
}