function pigIt(str){
    //Code here
    var split = str.split(' ');
    var newArr = []
    for(var i = 0; i < split.length; i++){
      var splitKata = split[i].split('')
      if(splitKata[0] !== '!' && splitKata[0] !== '?'){
        var huruf1 = splitKata[0]
        splitKata.push(huruf1, 'a', 'y')
        splitKata.shift(huruf1)
        newArr.push(splitKata.join(''));
        } else {
        newArr.push(split[i])
        }  
    }
      return newArr.join(' ')
  }

  console.log((pigIt('Pig latin is cool'))) //'igPay atinlay siay oolcay'
  console.log((pigIt('This is my string'))) //'hisTay siay ymay tringsay'