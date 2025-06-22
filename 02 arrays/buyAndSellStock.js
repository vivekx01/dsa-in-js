// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let maxProfit = 0;
    let minimum = prices[0];
    for (let i = 1; i < prices.length; i++){
        let profit = prices[i] - minimum;
        if (profit > maxProfit){
            maxProfit = profit;
        } 
        if (prices[i] < minimum){
            minimum = prices[i];
        }
    }
    return maxProfit;
};

// var maxProfit = function(prices) {
//     let maxProfit = 0;
//     let buyDay = 0;
//     for (let i = 0; i < prices.length; i++){
//         let buyPrice = prices[buyDay];
//         for (let j = i+1; j < prices.length; j++){
//             let sellPrice = prices[j];
//             let profit = sellPrice - buyPrice;
//             if (profit > 0 && profit > maxProfit){
//                 maxProfit = profit;
//             }
//         }
//         buyDay++;
//     }
//     return maxProfit;
// };

