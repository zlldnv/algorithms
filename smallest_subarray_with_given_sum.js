const smallest_subarray_with_given_sum = function (s, arr) {
  let windowSum = 0;
  let windowStart = 0;
  let smallest = Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd += 1) {
    windowSum += arr[windowEnd];

    while (windowSum >= s) {
      smallest = Math.min(smallest, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  if (smallest === Infinity) {
    return 0;
  }

  return smallest;
};
