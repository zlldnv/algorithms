// Problem Statement
// Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

// You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

// Write a function to return the maximum number of fruits in both baskets.

// Example 1:

// Input: Fruit=['A', 'B', 'C', 'A', 'C']
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
// Example 2:

// Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
// Output: 5
// Explanation: We can put 3 'B' in one basket and two 'C' in the other basket.
// This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

const fruits_into_baskets = function (fruits) {
  let windowStart = 0;
  let max = 0;
  const currentFruits = {};
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd += 1) {
    const endCharacter = fruits[windowEnd];
    currentFruits[endCharacter] = currentFruits[endCharacter]
      ? currentFruits[endCharacter] + 1
      : 1;
    while (Object.keys(currentFruits).length > 2) {
      const startCharacter = fruits[windowStart];
      currentFruits[startCharacter] -= 1;
      if (currentFruits[startCharacter] === 0) {
        delete currentFruits[startCharacter];
      }
      windowStart += 1;
    }

    max = Math.max(max, windowEnd - windowStart + 1);
  }
  return max;
};
