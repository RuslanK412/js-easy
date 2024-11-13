function findMax(numbers) {
  // Ініціалізуємо змінну max як перший елемент масиву
  let max = numbers[0]; 

  // Перебираємо всі елементи масиву, починаючи з другого
  for (let i = 1; i < numbers.length; i++) {
    // Якщо поточне число більше за max, то оновлюємо max
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  
  // Повертаємо найбільше число
  return max;
}

// Приклади використання:
console.log(findMax([3, 5, 7, 2, 8])); // Виведе: 8
console.log(findMax([10, 20, 5, 30])); // Виведе: 30

module.exports = findMax;
