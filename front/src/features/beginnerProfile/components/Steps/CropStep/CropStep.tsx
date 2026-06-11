import { SelectionCard } from '../../../../../shared/components/SelectionCard/SelectionCard';
import styles from './CropStep.module.css';
import { cropOptions } from '../../../data/cropOptions';

interface CropStepProps {
  selectedValue: number | null;
  onSelect: (value: number) => void;
}

export function CropStep({
  selectedValue,
  onSelect,
}: CropStepProps) {
  return (
  <div className={styles.container}>
    {cropOptions.map(option => (
      <SelectionCard
        key={option.id}
        title={option.title}
        icon={option.icon}
        selected={selectedValue === option.id}
        onClick={() => onSelect(option.id)}
      />
    ))}
  </div>
);
}