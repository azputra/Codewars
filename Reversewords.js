function reverseWord(str) {
  // Go for it
  var newStr = str.split(' ')
  var result = ''
  var newArr = []
  for(var i = 0; i < newStr.length; i++){
    for(var j = newStr[i].length-1; j>=0; j--){
      result += newStr[i][j]
    }
    newArr.push(result)
    result = ''
  }
  return newArr.join(' ')
}

console.log(reverseWord("The quick brown fox jumps over the lazy dog."));
console.log(reverseWord("apple"));
