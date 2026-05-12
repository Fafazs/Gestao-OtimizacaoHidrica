import styles from './Header.module.css';
import logo from '../../../assets/images/logo.png';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="EhaLogo" />

        <h1>AgroCloud</h1>
      </div>
    </header>
  );
}