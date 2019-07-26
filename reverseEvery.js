function reverse(str){
    //WRITE SOME MAGIC
    console.log(str.length)
    var newStr = str.split(' ')
    var newArr = []
    var result = ''
    for (var i = 0; i < newStr.length; i++){
  //     console.log(newStr)
    if (i % 2 !== 0){
        newArr = newStr[i].split('').reverse().join('')
        result += newArr
    } else {
        result += newStr[i] + ' '
        }
    }
    return result.trim()
  }

console.log(reverse("apa ya"))