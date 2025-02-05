import { useUrl } from './useUrl';

export function useSortValues(values, defaultSortBy = 'created_at-desc') {
  const { readUrl } = useUrl('sortBy');
  const sortBy = readUrl || defaultSortBy;
  const [filed, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;

  const sortedValues = values
    .slice()
    .sort((a, b) => a[filed].localeCompare(b[filed]) * modifier);

  return [sortedValues];
}
