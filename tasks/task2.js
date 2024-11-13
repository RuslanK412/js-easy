function reverseWithoutNumbers(str) {
  // Створюємо масив для збереження символів, які не є цифрами
  const chars = [];
  
  // Перебираємо кожен символ у рядку
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    // Якщо символ не цифра, додаємо його в масив
    if (!(char >= '0' && char <= '9')) {
      chars.push(char);
    }
  }
  
  // Створюємо змінну для зворотного рядка
  let result = '';
  
  // Додаємо символи в результат у зворотному порядку
  for (let i = chars.length - 1; i >= 0; i--) {
    result += chars[i];
  }

  // Повертаємо результат
  return result;
}

console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;
