import { SelectionCard } from '../../../../../shared/components/SelectionCard/SelectionCard';
import styles from './ResouceStep.module.css';
import { resourceOptions } from '../../../data/resourceOptions';

interface ResourceStepProps {
  selectedValue: number[];
  onToggle: (id: number) => void;
}

export function ResourceStep({
  selectedValue,
  onToggle,
}: ResourceStepProps) {
  return (
  <div className={styles.container}>

    {resourceOptions.map(option => (
      <SelectionCard
        key={option.id}
        title={option.title}
        icon={option.icon}
        selected={selectedValue.includes(option.id)}
        onClick={() => onToggle(option.id)}
      />
    ))}
  </div>
);
}