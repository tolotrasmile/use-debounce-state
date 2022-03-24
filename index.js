import { useState, useEffect } from 'react';

const useDebounce = (initialValue, delay) => {
  const [value, setValue] = useState(initialValue);
  useEffect(
    () => {
      const handler = setTimeout(() => setValue(initialValue), delay);
      return () => clearTimeout(handler);
    },
    [initialValue, delay]
  );
  return value;
};

const useDebounceState = (initialValue, delay) => {
  const [value, setValue] = useState(initialValue);
  const debounceValue = useDebounce(value, delay);
  return [value, setValue, debounceValue];
};

export { useDebounce, useDebounceState };
