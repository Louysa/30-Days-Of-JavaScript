// Write a pattern which identify if a string is a valid JavaScript variable

const isValidVariable = (variable) => {
  const pattern = /^[a-z_$][a-z0-9_$]*$/i;
  return pattern.test(variable);
};

console.log(isValidVariable('name')); // true
console.log(isValidVariable('name1')); // true
console.log(isValidVariable('1name')); // false
console.log(isValidVariable('name_1')); // true
console.log(isValidVariable('name-1')); // false

function tenMostFrequentWords(paragraph){
    const words = paragraph.match(/\b\w+\b/g);
    const wordCount = {};
    words.forEach(word => {
        word = word.toLowerCase();
        if (wordCount[word]) {
        wordCount[word]++;
        } else {
        wordCount[word] = 1;
        }
    });
    const sortedWords = Object.keys(wordCount).sort((a, b) => wordCount[b] - wordCount[a]);
    return sortedWords.slice(0, 10);
}

console.log(tenMostFrequentWords('The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.')); // ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog']


function cleanText(text){
    return text.replace(/[^A-Za-z\s]+/g, '').trim();
}
console.log(cleanText('The quic^^%%#k brown fox jumps over the lazy dog.')); // 'The quick brown fox jumps over the lazy dog'