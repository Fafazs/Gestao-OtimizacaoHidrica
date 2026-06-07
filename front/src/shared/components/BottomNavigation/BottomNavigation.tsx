import { NavLink } from 'react-router-dom';
import styles from './BottomNavigation.module.css';

export function BottomNavigation() {
  return (
    <nav className={styles.navigation}>
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive
            ? `${styles.item} ${styles.active}`
            : styles.item
        }
      >
        🏠
        <span>Início</span>
      </NavLink>

      <NavLink
        to="/library"
        className={({ isActive }) =>
          isActive
            ? `${styles.item} ${styles.active}`
            : styles.item
        }
      >
        📖
        <span>Biblioteca</span>
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive
            ? `${styles.item} ${styles.active}`
            : styles.item
        }
      >
        👤
        <span>Perfil</span>
      </NavLink>
    </nav>
  );
}