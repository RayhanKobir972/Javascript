const lyrics = 'tumi bondhu kala pakhi ami jeni ki .bosonto kale tomay bolte parini .sada sada kala ';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
// console.log(chars);

const partial = lyrics.slice(5,8);
const partial2 = lyrics.substring(5, 8)
console.log(partial);
console.log(partial2);

const lines = [
    'tumi bondhu kala pakhi ami jeni ki ',
    'bosonto kale tomay bolte parini ',
    'sada sada kala '
  ];

  console.log(lines.join(';'));