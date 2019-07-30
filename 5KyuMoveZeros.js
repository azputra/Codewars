var moveZeros = function (arr) {
    // TODO: Program me
    newArr = []
    for (var i = arr.length -1; i >= 0; i--){
      if (arr[i] === 0){
        newArr.push(arr[i])
      } else {
        newArr.unshift(arr[i])
      }
    }
    return newArr
  } 

  console.log((moveZeros([1,2,0,1,0,1,0,3,0,1]))) //[ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]
  console.log(([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])) //[ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]