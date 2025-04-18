import { useEffect, useRef } from 'react';

export function usePrevious(value) {
    const prevRef = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
