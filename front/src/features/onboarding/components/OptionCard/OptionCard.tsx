import { Link } from 'react-router-dom';

import styles from './OptionCard.module.css';

interface OptionCardProps {
  title: string;
  icon: string;
  to: string;
}

export function OptionCard({
  title,
  icon,
  to,
}: OptionCardProps) {
  return (
    <Link
  to={to}
  className={styles.card}
>
  <div className={styles.iconWrapper}>
    <img
      src={icon}
      alt=""
    />
  </div>

  <span className={styles.title}>
    {title}
  </span>
</Link>
  );
}