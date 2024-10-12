// PROBLEM 2
// Time Complexity O(N)
// Space Complexity O(1)
// DONE
function patchingArray(nums, n) {
  let count = 0;
  let i = 0;
  let missingNumber = 1;

  while (missingNumber <= n) {
    if (i >= nums.length || missingNumber < nums[i]) {
      count++;
      missingNumber *= 2;
    } else {
      missingNumber += nums[i];
      i++;
    }
  }

  return count;
}
// __________________________________________________________________
// Time Complexity O(N)
// Space Complexity O(logN)
function patchingArrayRecursive(
  nums,
  n,
  index = 0,
  missingNumber = 1,
  count = 0
) {
  // base case
  if (missingNumber > n) return count;

  if (index >= nums.length || missingNumber < nums[index]) {
    // when it is needed to patch
    return patchingArrayRecursive(nums, n, index, missingNumber * 2, count + 1);
  } else {
    // no need to patch, missingNumber can be formed
    return patchingArrayRecursive(
      nums,
      n,
      index + 1,
      missingNumber + nums[index],
      count
    );
  }
}

// __________________________________________________________________

console.log(patchingArrayRecursive([1, 3], 6));
console.log(patchingArray([1, 3], 6));
