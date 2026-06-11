import styles from './profilePage.module.css';

import {
  useProfile,
} from '../hooks/useProfile';

import {
  BottomNavigation,
} from '../../../shared/components/BottomNavigation/BottomNavigation';

export function ProfilePage() {

  const {
    profile,
    isLoading,
  } = useProfile();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (!profile) {
    return <div>Perfil não encontrado</div>;
  }

  return (

    <div className={styles.page}>

      <header className={styles.header}>

        <div className={styles.logoArea}>

          <div className={styles.logo}>
            🌱
          </div>

          <h1>
            AgroCloud
          </h1>

        </div>

        <div className={styles.avatar}>
          👨‍🌾
        </div>

      </header>

      <main className={styles.content}>

        <h2 className={styles.pageTitle}>
          Perfil
        </h2>

        <section className={styles.onlineBanner}>

          <span>
            ☁️
          </span>

          <strong>
            Online e sincronizado
          </strong>

        </section>

        <section className={styles.profileCard}>

          <h3>
            {profile.name}
          </h3>

          <p>
            {profile.email}
          </p>

        </section>

        <section className={styles.stats}>

          <div className={styles.statCard}>

            <span>
              🌱
            </span>

            <strong>
              {profile.totalFields}
            </strong>

            <small>
              Campos
            </small>

          </div>

          <div className={styles.statCard}>

            <span>
              📋
            </span>

            <strong>
              {profile.pendingTasks}
            </strong>

            <small>
              Pendentes
            </small>

          </div>

        </section>

        

      </main>

      <BottomNavigation />

    </div>

  );

}