import styles from './CropCard.module.css';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:8080';

interface CropCardProps {
  id: number;
  title: string;
  imageUrl: string;
}

export function CropCard({
  id,
  title,
  imageUrl,
}: CropCardProps) {

  const navigate = useNavigate();

  return (
    <article
      className={styles.card}
      onClick={() => navigate(`/library/${id}`)}
    >
      <img
        src={`${API_URL}${imageUrl}`}
        alt={title}
        className={styles.image}
      />

      <div className={styles.content}>
        <h3>{title}</h3>

        <div className={styles.difficulty}>
          🌱 Fácil
        </div>
      </div>
    </article>
  );
}