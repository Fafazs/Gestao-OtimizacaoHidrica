import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TextButton.module.css';

interface TextButtonProps {
  to?: string;
  onClick?: () => void;
  children: ReactNode;
}

export function TextButton({
  to,
  onClick,
  children,
}: TextButtonProps) {

  const navigate = useNavigate();

  function handleClick() {

    if (onClick) {
      onClick();
      return;
    }

    if (to) {
      navigate(to);
    }
  }

  return (
    <button
      className={styles.button}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}