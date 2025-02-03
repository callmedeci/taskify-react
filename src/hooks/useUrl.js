import { useSearchParams } from 'react-router';

export function useUrl(query) {
  const [searchParams, setSearchParams] = useSearchParams();

  function setUrl(value) {
    searchParams.set(query, value);

    setSearchParams(searchParams);
  }

  const readUrl = searchParams.get(query);

  return { readUrl, setUrl };
}
