//方法一、暴力解 (O(n^2)）
/*
var maxProfit = function(prices) {
  let profit = 0
  for(let i = 0; i < prices.length; i++){
    for(let j = i+1; j < prices.length; j++){
      if(prices[j]-prices[i] > profit) {
        profit = prices[j]-prices[i]
      }
    }
  }
  return profit
};
*/

//方法二 (O(n)）
var maxProfit = function(prices) {
  let min = Infinity
  let profit = 0
  for(let i = 0; i < prices.length; i++){
    const current = prices[i]
    if(prices[i] < min ) {
      min = prices[i]
    }
    if(current - min > profit) {
      profit = current - min
    }
  }
  return profit
};

console.log(maxProfit([7,1,5,3,6,4])) //5