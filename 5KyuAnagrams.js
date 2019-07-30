function anagrams(word, words) {
  var result = [];
  var newWord = word
    .split("")
    .sort()
    .join("");
  for (i = 0; i < words.length; i++) {
    var newWords = words[i]
      .split("")
      .sort()
      .join("");
    if (newWord === newWords) {
      result.push(words[i]);
    }
  }
  return result;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) //['aabb', 'bbaa']

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) //['carer', 'racer']

console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])) //[]