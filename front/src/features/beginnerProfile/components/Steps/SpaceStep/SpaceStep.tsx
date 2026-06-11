import { SelectionCard } from '../../../../../shared/components/SelectionCard/SelectionCard';

import { spaceOptions } from '../../../data/spaceOptions';
import styles from './SpaceStep.module.css';
interface SpaceStepProps {
  selectedValue: number | null;
  onSelect: (value: number) => void;
}

export function SpaceStep({
  selectedValue,
  onSelect,
}: SpaceStepProps) {
  return (
  <div className={styles.container}>
    {spaceOptions.map(option => (
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