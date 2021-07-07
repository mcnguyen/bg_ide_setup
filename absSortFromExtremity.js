
// Assume that you have a blockchain that has ordered its blocks by some “priority” score in an array. The values these priority scores can take on can be both positive or negative - an example blockchain configuration may look like this:
//
// Priority Data: [-6, -3, -1, 1, 4, 7]
//
// One day, we decide to re-sort the chain's block priorities, this time by the absolute value of the block’s previous priority (eg. a block with priority: -6 becomes weighed priority: 6).
//
// For example, in the block above, we would sort our new blockchain as follows (both answers are acceptable):
//
// Sorted Priority 1: [-1, 1, -3, 4, -6, 7]
//
// or
//
// Sorted Priority 2: [1, -1, -3, 4, -6, 7]
//
// Your task is to implement this sorting —> transforming any array of block priorities that was previously sorted by priority into a new array, that is now sorted by the absolute value of this priority.


// Time Complexity: O(n^2) because of the Array.unshift() calls
// Space Complexity: O(n) as there is only one sorted array in the result
function prioritize(blockPriorities) {
  const result = [];

  if (!blockPriorities || blockPriorities.length === 0) {
    return result;
  }

  let left = 0;
  let right = blockPriorities.length - 1;

  while (left <= right) {
    const leftValue = blockPriorities[left];
    const rightValue = blockPriorities[right];

    if (Math.abs(leftValue) > Math.abs(rightValue)) {
      result.unshift(leftValue); // ASC order but O(n)
      // result.push(leftValue); // O(1) but DESC order
      left++;
    } else {
      result.unshift(rightValue); // ASC order but O(n)
      // result.push(rightValue); // O(1) but DESC order
      right--;
    }
  }

  return result;
}

console.log(prioritize([-6, -3, -1, 1, 4, 7]));

