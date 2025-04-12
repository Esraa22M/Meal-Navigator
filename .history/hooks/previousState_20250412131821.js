import { useEffect, useRef } from 'react';

export function usePrevious(value) {
    const prevRef = useRef(value);

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return prevRef.current;
}
