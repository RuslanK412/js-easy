function findMax(numbers) {
  // Ініціалізуємо max першим числом з масиву
  let max = numbers[0];

  // Перевіряємо всі елементи масиву
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]; // Оновлюємо max, якщо знайшли більше число
    }
  }

  return max; // Повертаємо найбільше число
}

module.exports = findMax;
