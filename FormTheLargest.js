function maxNumber(angka) {
  var strAngka = angka.toString();
  //   console.log(typeof strAngka)
  var arr1 = strAngka.split("");
  //   console.log(arr1)
  var temp = 0;
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr1.length; j++) {
      if (arr1[i] > arr1[j]) {
        temp = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = temp;
      }
      // var tes = arr1.join('')
    }
  }
  return arr1.join('')
}

console.log(maxNumber(231));
console.log(maxNumber(63792));
