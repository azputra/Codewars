function findUniq(arr) {
    // do magic
    var newArr = arr.sort()
    // console.log(newArr)
    for(var i = 0; i < newArr.length; i++){
      if (newArr[i] !== newArr[i-1] && arr[i] !== newArr[i+1]){
      return newArr[i]
      } 
    }
  }

  console.log((findUniq([ 0, 1, 0 ])))// 1);
console.log((findUniq([ 1, 1, 1, 2, 1, 1 ])))// 2);
console.log((findUniq([ 3, 10, 3, 3, 3 ])))// 10);