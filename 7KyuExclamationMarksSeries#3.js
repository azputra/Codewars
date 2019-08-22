function remove(str){
    var stringAwal = "";
    for(var i = 0; i < str.length; i++){
      if(str[i] !== "!"){
        stringAwal += str[i];
      }
    }
    var tandaAkhir = "";
    for(var j = str.length - 1; str[j] === "!"; j--){
      tandaAkhir += str[j];
    }
    return stringAwal + tandaAkhir;
  }

console.log((remove("Hi!"))) //"Hi!"
console.log((remove("Hi!!!"))) //"Hi!!!"
console.log((remove("!Hi"))) //"Hi"
console.log((remove("!Hi!"))) //"Hi!"
console.log((remove("Hi! Hi!") //"Hi Hi!"
console.log((remove("Hi"))) //"Hi"