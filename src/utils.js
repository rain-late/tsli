import { useEffect, useState } from 'react';

export const isFalse = (val) => (val === 0 ? false : !val);

export const cleanObj = (obj) => {
  const res = { ...obj };
  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    if (isFalse(val)) delete res[key];
  });
  return res;
};

export const useMount = (cb) => {
  useEffect(() => {
    cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const debounce = (func, delay) => {
  let timer;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  };
};

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounceValue;
};
