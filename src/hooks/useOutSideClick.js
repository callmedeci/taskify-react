import { useEffect, useRef } from 'react';

export function useOutSideClick(action, isListenOnCapturing = true) {
  const ref = useRef(null);

  useEffect(
    function () {
      function handler(e) {
        if (ref.current && !ref.current?.contains(e.target)) action();
      }

      document.addEventListener('click', handler, isListenOnCapturing);

      return () =>
        document.removeEventListener('click', handler, isListenOnCapturing);
    },
    [action, isListenOnCapturing],
  );

  return ref;
}
