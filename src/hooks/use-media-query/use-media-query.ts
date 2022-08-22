import { useCallback, useEffect, useState } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const getIsMatch = (query: string) => {
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(getIsMatch(query));

  const handleChange = useCallback(() => {
    setMatches(getIsMatch(query));
  }, [query]);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [handleChange, query]);

  return matches;
};
