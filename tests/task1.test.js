function replaceVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; // масив голосних літер
  let result = ''; // змінна для збереження результату

  // Проходимо по кожному символу в рядку
  for (let char of str) {
    // Якщо символ є голосною, замінюємо його на "*", якщо ні - додаємо його без змін
    if (vowels.includes(char)) {
      result += '*';
    } else {
      result += char;
    }
  }

  return result; // повертаємо результат
}

module.exports = replaceVowels;
