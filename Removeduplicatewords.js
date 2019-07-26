function removeDuplicateWords(s) {
  var newStr = s.split(" ");
  var result = [];
  for (let i = 0; i < newStr.length; i++) {
    if (result.indexOf(newStr[i]) == -1) {
      result.push(newStr[i]);
    }
}
return result.join(' ')
}

console.log(
  removeDuplicateWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);
