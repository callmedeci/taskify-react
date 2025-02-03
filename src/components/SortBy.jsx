import { useUrl } from '../hooks/useUrl';
import Select from './Select';

function SortBy({ options = [] }) {
  const { setUrl, readUrl } = useUrl('sortBy');
  const sortBy = readUrl || 'date-desc';

  function handleChange(value) {
    setUrl(value);
  }

  return <Select onChange={handleChange} value={sortBy} options={options} />;
}

export default SortBy;
