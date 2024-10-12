// Time O(n)
// Space O(n)
// DONE
function largestRectangle(heights) {
  var length = heights.length;
  var stack = [];
  var maxArea = 0;
  var height = 0;
  var width = 0;

  for (var i = 0; i <= length; i++) {
    while (
      stack.length > 0 &&
      (i === length || heights[i] <= heights[stack[stack.length - 1]])
    ) {
      height = heights[stack.pop()];
      if (stack.length === 0) {
        width = i;
      } else {
        width = i - stack[stack.length - 1] - 1;
      }
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }

  return maxArea;
}

//_____________________________________________________
// Time O(n^2)
// Space O(1)
// DONE
function largestRectangle2(heights) {
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    let minHeight = heights[i];

    for (let j = i; j < heights.length; j++) {
      minHeight = Math.min(minHeight, heights[j]);

      maxArea = Math.max(maxArea, minHeight * (j - i + 1));
    }
  }

  return maxArea;
}

console.log(largestRectangle([2, 1, 5, 6, 2, 3]));
