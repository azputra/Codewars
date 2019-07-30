function whoseBicycle(diary1, diary2, diary3) {
    // good luck

    var temp = []
    var result1 = 0
    var result2 = 0
    var result3 = 0

    for (var peringkat in diary1){
      result1 += diary1[peringkat]
      } temp.push(result1)
    
    for (var peringkat in diary2){
      result2 += diary2[peringkat]
    } temp.push(result2)
    
    for (var peringkat in diary3){
      result3 += diary3[peringkat]
    } temp.push(result3)

    console.log(temp)
      if (temp[2] >= temp[0] && temp[2] >= temp[1]){
        return 'I need to buy a bicycle for my third son.'
      } else if (temp[1] >= temp[0] && temp[1] >= temp[2]){
        return 'I need to buy a bicycle for my second son.'
      } else if (temp[0] >= temp[1] && temp[0] >= temp[2]){
        return 'I need to buy a bicycle for my first son.'
    }
  }

    console.log(whoseBicycle(
                                    {
                                      'algebra': 6,
                                      'history': 7,
                                      'physics': 8,
                                      'geography': 9,
                                      'chemistry': 10
                                    },
                                    {
                                      'algebra': 8,
                                      'history': 7,
                                      'physics': 8,
                                      'geography': 9,
                                      'chemistry': 10
                                    },
                                    {
                                      'algebra': 6,
                                      'history': 5,
                                      'physics': 5,
                                      'geography': 9,
                                      'chemistry': 10
                                    }
                                  )) //'I need to buy a bicycle for my second son.'
    
    console.log((whoseBicycle(
                                    {
                                      'algebra': 6,
                                      'history': 7,
                                      'physics': 8,
                                      'geography': 9,
                                      'chemistry': 10
                                    },
                                    {
                                      'algebra':6,
                                      'history': 7,
                                      'physics': 8,
                                      'geography': 9,
                                      'chemistry': 10
                                    },
                                    {
                                      'algebra': 6,
                                      'history': 7,
                                      'physics': 8,
                                      'geography': 9,
                                      'chemistry': 10
                                    }
                                  ))) //'I need to buy a bicycle for my third son.'
    
        console.log((whoseBicycle(
                                    {
                                      'algebra': 6,
                                      'history': 7,
                                      'physics': 8,
                                      'geography': 9,
                                      'chemistry': 5
                                    },
                                    {
                                      'algebra':6,
                                      'history': 7,
                                      'physics': 8,
                                      'geography': 9,
                                      'chemistry': 10
                                    },
                                    {
                                      'algebra': 6,
                                      'history': 7,
                                      'physics': 8,
                                      'geography': 9,
                                      'chemistry': 10
                                    }
                                  ))) // 'I need to buy a bicycle for my third son.'
    
        console.log((whoseBicycle(
                                    {
                                      'algebra': 3,
                                      'history': 7,
                                      'physics': 8,
                                      'geography': 4,
                                      'chemistry': 10
                                    },
                                    {
                                      'algebra':6,
                                      'history': 7,
                                      'physics': 8,
                                      'geography': 9,
                                      'chemistry': 4
                                    },
                                    {
                                      'algebra': 9,
                                      'history': 7,
                                      'physics': 9,
                                      'geography': 9,
                                      'chemistry': 10
                                    }
                                  ))) // 'I need to buy a bicycle for my third son.'