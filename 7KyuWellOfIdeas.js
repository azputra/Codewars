function well(x){
    var goodCount=0;
      for(i=0; i<x.length; i++){
        for(j=0;j<x[i].length; j++){
        if (x[i][j].toString().toLowerCase() === 'good'){
        goodCount++;
        }
      }
    }
      if (goodCount=== 0){
        return 'Fail!';
      } else if(goodCount>0 && goodCount<=2){
        return 'Publish!';
      } else if (goodCount > 2){
        return 'I smell a series!';
      }
    }

    console.log((well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]))) // 'Fail!');
console.log((well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]))) // 'Publish!');
console.log((well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]))) // 'I smell a series!');