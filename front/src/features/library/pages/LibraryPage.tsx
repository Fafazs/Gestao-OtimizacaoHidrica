import {
    useLibrary,
} from '../hooks/useLibrary';
import { CropCard }
    from '../components/CropCard/CropCard';
import { BottomNavigation } from '../../../shared/components/BottomNavigation/BottomNavigation';
import styles from './LibraryPage.module.css';
export function LibraryPage() {

    const {
        crops,
        isLoading,
    } = useLibrary();

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    return (

        <div className={styles.page}>

  <header className={styles.header}>

    <h1>
      📖 Biblioteca
    </h1>

  </header>

  <main className={styles.content}>

    <input
      placeholder="Pesquisar cultura"
      className={styles.search}
    />

    <div className={styles.grid}>

      {crops.map(crop => (

        <CropCard
          key={crop.id}
          id={crop.id}
          title={crop.title}
          imageUrl={crop.imageUrl}
        />

      ))}

    </div>

  </main>

  <BottomNavigation />

</div>
        
    );

}