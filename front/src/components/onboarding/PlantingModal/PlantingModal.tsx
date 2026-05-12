import styles from './PlantingModal.module.css';

interface PlantingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PlantingModal({
  isOpen,
  onClose
}: PlantingModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>O que você quer plantar?</h2>

          <button onClick={onClose}>
            X
          </button>
        </div>

        <input
          className={styles.input}
          type="text"
          placeholder="Ex: Manjericão"
        />

        <button className={styles.primaryButton}>
          Começar meu cultivo
        </button>
      </div>
    </div>
  );
}