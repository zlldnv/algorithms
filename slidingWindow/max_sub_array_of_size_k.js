const max_sub_array_of_size_k = function (k, arr) {
  let slidingWindow = 0;
  for (let i = 0; i < k; i += 1) {
    slidingWindow += arr[i];
  }

  if (k === arr.length) {
    return slidingWindow;
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
