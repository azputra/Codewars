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
    return Number(arr1.join(''))
  }

  console.log((maxNumber(213))) //321
  console.log((maxNumber(7389))) //9873
  console.log((maxNumber(63792))) //97632
  console.log((maxNumber(566797))) //977665
  console.log((maxNumber(1000000))) //1000000