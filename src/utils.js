export const isFalse = (val) => (val === 0 ? false : !val);

export const cleanObj = (obj) => {
  const res = { ...obj };
  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    if (isFalse(val)) delete res[key];
  });
  return res;
};
