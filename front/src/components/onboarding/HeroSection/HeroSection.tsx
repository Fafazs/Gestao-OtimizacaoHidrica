import styles from './HeroSection.module.css';

import seedlingImage from '../../../assets/images/seedling.png';

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <img
          src={seedlingImage}
          alt="Planta germinando"
        />
      </div>

      <div className={styles.textContent}>
        <h2>Olá! Bem-vindo ao AgroCloud.</h2>

        <p>
          Pra te ajudar melhor,
          conta pra gente: quem é você hoje?
        </p>
      </div>
    </section>
  );
}