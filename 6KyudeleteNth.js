function deleteNth(arr,n){
    console.log('ini arr', arr)
    var obj = {}
    var result = []
    //looping untuk panjangnya array
    for(var i = 0; i < arr.length; i++){
    // menghitung banyaknya angka yang sama
      if(obj[arr[i]]){
        obj[arr[i]] += 1
      } else {
        obj[arr[i]] = 1
      }
      //menentukan jika value obj kurang dari n lalu di push
      if (obj[arr[i]] <= n){
        result.push(arr[i])
      }
    }
    return result
  }

  console.log((deleteNth([20,37,20,21], 1))) // [20,37,21]
  console.log((deleteNth([1,1,3,3,7,2,2,2,2], 3))) //[1, 1, 3, 3, 7, 2, 2, 2]