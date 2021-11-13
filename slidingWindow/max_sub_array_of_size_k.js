// Problem Statement
// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

// Example 1:

// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].
// Example 2:

// Input: [2, 3, 4, 1, 5], k=2
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].

const max_sub_array_of_size_k = function (k, arr) {
  let slidingWindow = 0;
  for (let i = 0; i < k; i += 1) {
    slidingWindow += arr[i];
  }
  let max = slidingWindow;

  for (let z = 0; z < arr.length - k; z += 1) {
    slidingWindow -= arr[z];
    slidingWindow += arr[z + k];
    if (slidingWindow > max) {
      max = slidingWindow;
    }
  }
  return max;
};
