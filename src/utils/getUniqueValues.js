const getUniqueValues = (array, key) => {
  return [...new Set(array.map((item) => item[key]))].sort();
};

export default getUniqueValues;
