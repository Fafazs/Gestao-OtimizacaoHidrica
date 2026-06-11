import styles from './SelectionCard.module.css';

interface SelectionCardProps {
  title: string;
  icon: string;

  subtitle?: string;

  selected?: boolean;

  onClick: () => void;
}

export function SelectionCard({
  title,
  icon,
  subtitle,
  selected = false,
  onClick,
}: SelectionCardProps) {
  return (
    <button
      className={`
        ${styles.card}
        ${selected ? styles.selected : ''}
      `}
      onClick={onClick}
    >
      <div className={styles.iconWrapper}>
        <img src={icon} alt={title} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>
          {title}
        </h2>

        {subtitle && (
          <p className={styles.subtitle}>
            {subtitle}
          </p>
        )}
      </div>
    </button>
  );
}