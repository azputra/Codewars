function validParentheses(parens) {
  //TODO
//   console.log(parens);
  countBuka = 0;
  countTutup = 0;
  for (i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      countBuka += 1;
    } else {
      countTutup += 1;
    }
    if (parens[0] === ")" || parens[parens.length - 1] === "(") {
      return false;
    }
  }
  return countBuka === countTutup;
}

console.log(validParentheses( "()" )) //true);
console.log(validParentheses( "())" )) //false);