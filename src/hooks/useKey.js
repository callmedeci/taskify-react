import { useEffect } from 'react';

function useKey(action, key) {
  useEffect(
    function () {
      function handler(e) {
        if (e.key === key) action();
      }

      document.addEventListener('keydown', handler);

      () => document.removeEventListener('keydown', handler);
    },
    [action, key],
  );
}

export default useKey;
