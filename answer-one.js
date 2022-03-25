function nonConstructibleChange(coins) {
    let miminum = 1;
      
    const sortedCoins = data.coins.sort((a,b) => a-b)
      
    for(let i = 0; i < sortedCoins.length ; i += 1) {
      if(miminum < sortedCoins[i]) {
        return miminum
      }
      miminum += sortedCoins[i];
    }
      
    return miminum;
}

var data = {
    "coins": [1, 1, 1, 1, 1]
}

console.log(nonConstructibleChange(data))