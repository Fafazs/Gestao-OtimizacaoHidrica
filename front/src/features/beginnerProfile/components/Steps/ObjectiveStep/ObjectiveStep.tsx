import { SelectionCard } from '../../../../../shared/components/SelectionCard/SelectionCard';

import { objectiveOptions } from '../../../data/objectiveOptions';

interface ObjectiveStepProps {
  selectedValue: number | null;
  onSelect: (value: number) => void;
}

export function ObjectiveStep({
  selectedValue,
  onSelect,
}: ObjectiveStepProps) {
  return (
    <>
      {objectiveOptions.map(option => (
        <SelectionCard
          key={option.id}
          title={option.title}
          icon={option.icon}
          selected={selectedValue === option.id}
          onClick={() => onSelect(option.id)}
        />
      ))}
    </>
  );
}