import styles from './OptionCard.module.css';

interface OptionCardProps {
  title: string;
  icon: string;
  onClick: () => void;
}

export function OptionCard({
  title,
  icon,
  onClick
}: OptionCardProps) {
  return (
    <button
      className={styles.card}
      onClick={onClick}
    >
      <div className={styles.iconWrapper}>
          <img src={icon} alt="icon" /> 
      </div>

      <h2 className={styles.title}>
        {title}
      </h2>
    </button>
  );
}