export function shufflecards(data){
   return ({
     type :'Shuffle',
     payload : data
    })
}

export function sortcards(data){
   return ({
     type :'Sortcards',
     payload : data
    })
}

export function deletecards(count){
    return ({
      type :'DeleteCard',
      payload : count
    })
}

export function addDrawnCards(count){	
     return ({
       type :'AddDrawnCard',
       payload : count
   })
}


export function sortDrawnCards(count){	
    return ({
      type :'SortDrawnCard',
      payload : count
    })
}

export function shuffleDrawnCard(count){	
    return ({
      type :'ShufflerawnCard',
      payload : count
    })
}







