export const getNested = (object, key) => {
  if (!key) { return object; }
  const tokens = key.split('.');
  const property = tokens.shift();
  return object[property] ? getNested(object[property], tokens.join('.')) : null;
};

export const putNested = (object, key, value) => {
  if (!key) { return value; }
  const tokens = key.split('.');
  const property = tokens.shift();
  return {
    ...object,
    [property]: putNested(object[property] || {}, tokens.join('.'), value),
  };
};
