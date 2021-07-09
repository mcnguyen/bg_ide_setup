// Assume that you have a blockchain that has ordered its blocks by some
// “priority” score in an array. The values these priority scores can take
// on can be both positive or negative - an example blockchain configuration
// may look like this:
//
// Priority Data: [-6, -3, -1, 1, 4, 7]
//
// One day, we decide to re-sort the chain's block priorities, this time by
// the absolute value of the block’s previous priority (eg. a block with
// priority: -6 becomes weighed priority: 6).
//
// For example, in the block above, we would sort our new blockchain as
// follows (both answers are acceptable):
//
// Sorted Priority 1: [-1, 1, -3, 4, -6, 7]
//
// or
//
// Sorted Priority 2: [1, -1, -3, 4, -6, 7]
//
// Your task is to implement this sorting —> transforming any array of block
// priorities that was previously sorted by priority into a new array, that
// is now sorted by the absolute value of this priority.

// Time Complexity: O(n)
// Space Complexity: O(n) since there is only one resulting array
function prioritize(blockPriorities) {
  const result = [];

  if (!blockPriorities || blockPriorities.length === 0) {
    return result;
  }

  // Find a midpoint to split the array into negative and positive halves
  //
  // Time Complexity: O(n)
  let mid = -1;
  while (mid < blockPriorities.length && blockPriorities[++mid] < 0) {}
  let left = mid - 1;
  let right = mid;

  // Merge the two halves
  //
  // Time complexity: O(n)
  while (left >= 0 && right < blockPriorities.length) {
    let leftValue = blockPriorities[left];
    let rightValue = blockPriorities[right];
    if (Math.abs(leftValue) < rightValue) {
      // result.unshift(leftValue); // not O(1) but DESC order
      result.push(leftValue);  // O(1) and ASC order
      left--;
    } else {
      // result.unshift(rightValue); // not O(1) but DESC order
      result.push(rightValue); // O(1) and ASC order
      right++;
    }
  }

  // Merge the extra elements since the 2 halves might not have equal lengths
  //
  // Time complexity: O(n)
  while (left >= 0) {
    result.push(blockPriorities[left--]); // O(1)
  }

  // Time complexity: O(n)
  while (right < blockPriorities.length) {
    result.push(blockPriorities[right++]); // O(1)
  }

  return result;
}

console.log(prioritize([-6, -3, -1, 1, 4, 7]));
