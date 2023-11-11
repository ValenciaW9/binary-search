
def binary_search(arr, target)
  start = 0
  end_idx = arr.length - 1

  while start <= end_idx
    mid = (start + end_idx) / 2

    if arr[mid] == target
      return true
    elsif arr[mid] < target
      start = mid + 1
    else
      end_idx = mid - 1
    end
  end

  return false
end

# BONUS: MODIFY YOUR CODE TO RETURN THE INDEX OF THE TARGET, -1 IF NOT FOUND
def binary_search_index(arr, target)
  start = 0
  end_idx = arr.length - 1

  while start <= end_idx
    mid = (start + end_idx) / 2

    if arr[mid] == target
      return mid
    elsif arr[mid] < target
      start = mid + 1
    else
      end_idx = mid - 1
    end
  end

  return -1
end

# Testing the code
puts "Expecting: true"
puts "=>", binary_search([1, 2, 3], 3)

puts

puts "Expecting: false"
puts "=>", binary_search([3, 5, 9], 10)

# Uncomment for the bonus task
# puts
# puts "Expecting: 0"
# puts "=>", binary_search_index([1, 2, 3], 1)
# puts
# puts "Expecting: -1"
# puts "=>", binary_search_index([4, 7, 20], 100)
# Add a written explanation of your solution
##
# The binary_search function takes in an array and a target value, and returns true if the target
# value is found in the array, and false otherwise.
#
# Args:
#   arr: The `arr` parameter is an array of numbers that we want to search through.
#   target: The target is the value we are searching for in the array.
#
# Returns:
#   The binary_search method returns a boolean value indicating whether the target element is found in
# the array or not. The binary_search_index method returns the index of the target element if found,
# and -1 if not found.
