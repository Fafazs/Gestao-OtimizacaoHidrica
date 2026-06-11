import styles from './Header.module.css';
import logo from '../../../assets/images/logo.png';

import { ArrowLeft } from 'lucide-react';

interface HeaderProps {
  showBackButton?: boolean;
  onBack?: () => void;
}

export function Header({
  showBackButton = false,
  onBack,
}: HeaderProps) {
  return (
    <header className={styles.header}>
  {showBackButton && (
    <button
      className={styles.backButton}
      onClick={onBack}
      type="button"
    >
      <ArrowLeft size={24} />
    </button>
  )}

  <div className={styles.logoWrapper}>
    <img src={logo} alt="AgroCloud Logo" />
    <h1>AgroCloud</h1>
  </div>
</header>
  );
}

