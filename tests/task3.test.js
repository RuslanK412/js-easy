function sumArray(numbers) {
  let sum = 0; // Ініціалізація змінної для зберігання суми

  // Проходимо по кожному числу в масиві та додаємо його до суми
  for (let number of numbers) {
    sum += number;
  }

  // Повертаємо суму
  return sum;
}

module.exports = sumArray;
