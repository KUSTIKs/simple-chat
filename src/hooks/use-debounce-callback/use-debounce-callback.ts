import { useEffect } from 'react';

export const useDebounceCallback = (
  callback: () => void | Promise<void>,
  delay: number
) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => callback(), delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [callback, delay]);
};
