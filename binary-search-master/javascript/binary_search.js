function binarySearch(arr, target, startIndex = 0) {
  const middle = Math.floor(arr.length / 2);

  if (arr.length === 0) {
    return -1; // Return -1 if array is empty
  }

  if (arr[middle] === target) {
    return startIndex + middle; // Return the index of the target
  }

  if (arr[middle] > target) {
    return binarySearch(arr.slice(0, middle), target, startIndex); // Search the left half
  } else {
    return binarySearch(arr.slice(middle + 1), target, startIndex + middle + 1); // Search the right half
  }
}

// BONUS: MODIFY YOUR CODE TO RETURN THE INDEX OF THE TARGET, -1 IF NOT FOUND

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", binarySearch([1, 2, 3], 3));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", binarySearch([3, 5, 9], 10));

  console.log("");

  console.log("Expecting: 0");
  console.log("=>", binarySearchIndex([1, 2, 3], 1));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", binarySearchIndex([4, 7, 20], 100));
}

module.exports = {
  binarySearch,
  binarySearchIndex
};

/** Pseufocode
 * The binarySearch function takes in an array and a target value, and returns the index of the target
 * in the array if found, or -1 if not found.
 * @param arr - The array in which to search for the target value.
 * @param target - The target parameter is the value that you are searching for in the array.
 * @param [startIndex=0] - The `startIndex` parameter is used to keep track of the starting index of
 * the current subarray being searched. It is initially set to 0 and is updated recursively as the
 * search progresses through the left or right half of the array.
 * @returns The code is returning the index of the target element in the array. If the target is not
 * found, it returns -1.
 */