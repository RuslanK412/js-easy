function sumArray(numbers) {
  let sum = 0; // Створюємо змінну для збереження суми, початково вона 0

  // Перебираємо кожен елемент у масиві numbers
  for (let number of numbers) {
    sum += number; // Додаємо поточне число до суми
  }

  return sum; // Повертаємо загальну суму
}

console.log(sumArray([1, 2, 3, 4, 5])); // Виведе: 15
console.log(sumArray([10, 20, 30]));    // Виведе: 60

module.exports = sumArray;
