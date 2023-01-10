import { useEffect, useState } from 'react';

export const isFalse = (val: unknown) => (val === 0 ? false : !val);

export const cleanObj = (obj: any) => {
  const res = { ...obj };
  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    if (isFalse(val)) delete res[key];
  });
  return res;
};

export const useMount = (cb: () => void) => {
  useEffect(() => {
    cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

// export const debounce = (func, delay) => {
//   let timer;
//   return () => {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       func();
//     }, delay);
//   };
// };

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounceValue;
};
