import { SelectionCard } from '../../../../../shared/components/SelectionCard/SelectionCard';

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
    <>
      {resourceOptions.map(option => (
        <SelectionCard
          key={option.id}
          title={option.title}
          icon={option.icon}
          selected={selectedValue.includes(option.id)}
          onClick={() => onToggle(option.id)}
        />
      ))}
    </>
  );
}