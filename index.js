function superbowlWin(record){
    let findWinner = record.find(
        function(element){
            if(element.result === 'W'){
                return element.result
            }
   
    })
    if(findWinner){
        return findWinner.year
    }
    else{
        return undefined
    }
};