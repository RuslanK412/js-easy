function countOccurrences(str, char) {
  let count = 0; // Ініціалізуємо лічильник

  // Проходимо через кожен символ в рядку
  for (let i = 0; i < str.length; i++) {
    // Якщо поточний символ дорівнює шуканому, збільшуємо лічильник
    if (str[i] === char) {
      count++;
    }
  }

  return count; // Повертаємо кількість входжень
}

module.exports = countOccurrences;
