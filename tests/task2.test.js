function reverseWithoutNumbers(str) {
  // Створюємо масив для збереження символів, які не є цифрами
  const chars = [];
  
  // Проходимо по кожному символу в рядку
  for (let char of str) {
    // Якщо символ не є цифрою, додаємо його в масив
    if (!(char >= '0' && char <= '9')) {
      chars.push(char);
    }
  }
  
  // Перевертаємо масив символів, які не є цифрами, і повертаємо їх у вигляді рядка
  return chars.reverse().join('');
}

module.exports = reverseWithoutNumbers;
