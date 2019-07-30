function removeDuplicateWords (s) {
    // your perfect code...
    var newStr = s.split(" ");
    result = [];
    for(var i = 0; i < newStr.length; i++){
      if(result.indexOf(newStr[i]) == -1){
        result.push(newStr[i])
      }
    }
    return result.join(' ')
  }

  console.log((removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))) //'alpha beta gamma delta'