// Функція замінює всі голосні літери на символ '*'

function replaceVowels(str) {
  // Масив голосних букв (як малих, так і великих)
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  
  // Пустий рядок, де будемо збирати результат
  let result = '';
  
  // Проходимо кожен символ в рядку
  for (let i = 0; i < str.length; i++) {
    // Якщо символ голосний, додаємо '*' до результату
    if (vowels.includes(str[i])) {
      result += '*';
    } else {
      // Якщо не голосний, додаємо сам символ
      result += str[i];
    }
  }
  
  // Повертаємо результат
  return result;
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;
