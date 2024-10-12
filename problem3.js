// PROBLEM 3
// Time Complexity O(N^2)
// Space Complexity O(N)
// DONE
function countSmaller(nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    answer.push(count);
  }
  return answer;
}
// __________________________________________________________________

// Binary Search
// Time Complexity O(NlogN)
//  Space Complexity O(n)
// DONE
function countSmaller2(nums) {
  const sortedArray = [];
  const result = [];

  function binarySearch(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (sortedArray[mid] >= target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    const index = binarySearch(sortedArray, num);
    result.push(index);
    sortedArray.splice(index, 0, num);
  }

  return result.reverse();
}
// __________________________________________________________________
