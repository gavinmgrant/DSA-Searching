'use strict';

// 7. Max profit
// The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. 
// If you had to buy shares in the company on a particular day, and sell the shares on a subsequent day, 
// write an algorithm to work out what the maximum profit you could make would be.

const prices = [128, 97, 121, 123, 98, 97, 105];

const maxProfit = array => {
    if (array.length < 2) {
        return 'Not enough share prices to compare'
    };

    let currMax = array[1] - array[0];
    let dayToBuy = 0;
    
    // start iterating on day 2 since day 1 has no price before 
    for (let i = 1; i < array.length; i++) {
        let profit = array[i] - array[i - 1];
        console.log(`index: ${i}, price: ${array[i]}, profit: ${profit}`);
        if (profit > currMax) {
            // assign the new highest profit to the current max value
            currMax = profit;
            dayToBuy = i + 1;
        }
    }

    return `Buy the stock on day ${dayToBuy} for a profit of $${currMax}`;
};

console.log(maxProfit(prices));