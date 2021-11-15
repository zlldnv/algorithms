// Problem Statement
// Given a string, find the length of the longest substring, which has all distinct characters.

// Example 1:

// Input: String="aabccbb"
// Output: 3
// Explanation: The longest substring with distinct characters is "abc".
// Example 2:

// Input: String="abbbb"
// Output: 2
// Explanation: The longest substring with distinct characters is "ab".
// Example 3:

// Input: String="abccde"
// Output: 3
// Explanation: Longest substrings with distinct characters are "abc" & "cde".

const non_repeat_substring = function (str) {
  let windowStart = 0;
  let maxLength = 0;
  let letters = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const endChar = str[windowEnd];
    if (endChar in letters) {
      windowStart = Math.max(windowStart, letters[endChar] + 1);
    }
    letters[endChar] = windowEnd;
    maxLength = Math.max(windowEnd - windowStart + 1, maxLength);
  }
  return maxLength;
};
