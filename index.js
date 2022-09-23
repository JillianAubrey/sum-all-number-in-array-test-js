function sumItems(array) {
  const arraySum = array.reduce((sum, item) => {
    if (Array.isArray(item)) {
      return sum + sumItems(item);
    }
    return sum + item;
  }, 0);
  return arraySum;
}

module.exports = sumItems;