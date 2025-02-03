import { useEffect, useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(function () {
    const storedValue = JSON.parse(localStorage.getItem(key)) || initialValue;

    return storedValue;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key],
  );

  return [value, setValue];
}
