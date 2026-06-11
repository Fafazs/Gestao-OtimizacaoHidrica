import { useParams }
from 'react-router-dom';

import {
  useCrop,
} from '../hooks/useCrop';
import styles from './CropDetailsPage.module.css';
import { useNavigate } from 'react-router-dom';
export function CropDetailsPage() {

  const { id } =
    useParams();

    const navigate = useNavigate();

  const {
    crop,
    isLoading,
  } = useCrop(Number(id));

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (!crop) {
    return <div>Cultura não encontrada</div>;
  }
 const API_URL = 'http://localhost:8080';
    const imageSrc =
  `${API_URL}${crop.imageUrl}`;
  return (

    <div className={styles.page}>

  <header className={styles.header}>

    <button
      className={styles.backButton}
      onClick={() => navigate('/library')}
    >
      ←
    </button>

    <h1>
      {crop.title}
    </h1>

  </header>

  <section
  className={styles.hero}
  style={{
    backgroundImage: `url(${imageSrc})`,
  }}
>
  <div className={styles.overlay}>

    <span className={styles.badge}>
      📖 Guia de cultivo
    </span>

    <h2>
      {crop.title}
    </h2>

  </div>

</section>
  <main className={styles.content}>

    <section className={styles.card}>

      <h3>
        Sobre a cultura
      </h3>

      <p>
        {crop.description}
      </p>

    </section>

    <section className={styles.infoGrid}>

      <div className={styles.infoCard}>
        🌡️
        <strong>
          Temperatura
        </strong>
        <span>
          {crop.recommendedTemperature}
        </span>
      </div>

      <div className={styles.infoCard}>
        💧
        <strong>
          Umidade
        </strong>
        <span>
          {crop.recommendedHumidity}
        </span>
      </div>

    </section>

    <section className={styles.card}>

      <h3>
        Solo ideal
      </h3>

      <p>
        {crop.soilType}
      </p>

    </section>

    <section className={styles.card}>

      <h3>
        Plantas companheiras
      </h3>

      <ul>

        {crop.companionPlants.map(
          plant => (
            <li key={plant}>
              🌿 {plant}
            </li>
          )
        )}

      </ul>

    </section>

  </main>

</div>

  );

}