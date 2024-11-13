function countOccurrences(str, char) {
  // Перетворюємо рядок в масив символів та фільтруємо тільки ті, що дорівнюють char
  return str.split(char).length - 1;
}

console.log(countOccurrences("hello world", 'o')); // Виведе: 2
console.log(countOccurrences("banana", 'a'));       // Виведе: 3

module.exports = countOccurrences;
