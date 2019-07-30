//mereverse string yg genap
function reverse(str){
    //WRITE SOME MAGIC
    var newStr = str.split(' ')
    var newArr = []
    var result = ''
    for (var i = 0; i < newStr.length; i++){
  //     console.log(newStr)
    if (i % 2 !== 0){
        newArr = newStr[i].split('').reverse().join('')
        result += newArr + ' '
    } else {
        result += newStr[i] + ' '
        }
    }
    return result.trim()
  }

  console.log(reverse("Reverse this string, please!")) // "Reverse siht string, !esaelp"
console.log(reverse("I really don't like reversing strings!")) //"I yllaer don't ekil reversing !sgnirts"