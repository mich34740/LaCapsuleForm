function capitalizeWords(str) {
  return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}
module.exports = {
  capitalizeWords
};
