import { useEffect } from 'react';

function useShortcutHandler(
  [firstCode, secondCode],
  action,
  isListenOnCapture = true,
) {
  useEffect(
    function () {
      const keyCodes = new Set();

      function handler(e) {
        keyCodes.add(e.keyCode);
        const firstKey = [...keyCodes.values()].at(0) === firstCode;

        if (
          keyCodes.has(firstCode) &&
          keyCodes.has(secondCode) &&
          firstKey &&
          keyCodes.size === 2
        ) {
          keyCodes.clear();
          action();
        }

        if (keyCodes.size > 2) keyCodes.clear();
      }

      document.addEventListener('keydown', handler, isListenOnCapture);

      () => document.removeEventListener('keydown', handler, isListenOnCapture);
    },
    [action, firstCode, isListenOnCapture, secondCode],
  );
}

export default useShortcutHandler;
