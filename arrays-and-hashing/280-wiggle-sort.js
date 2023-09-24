/**
 * 
 * 
 * 
 * 
 * 

Given an unsorted array nums, reorder it in-place such that

nums[0] <= nums[1] >= nums[2] <= nums[3]....

Input: [3, 5, 2, 1, 6, 4]
Output: [1, 6, 2, 5, 3, 4]
Explanation: This question may have multiple answers, and [2, 6, 1, 5, 3, 4] is also ok.

 */

console.log(process.env.TEST_V)
console.log(JSON.parse(process.env.TEST_V))

const inputArr = [3, 5, 2, 1, 6, 4]
// sortdArray = [1, 2, 3, 4, 5, 6]
//     outArr = [1, 4, 2, 5, 3, 6]

const merge = (left, right) => {
  const accArr = []
  // taking lowest elements from each array and add them to the result array
  // going until one of arrays is not empty
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      accArr.push(left.shift())
    } else {
      accArr.push(right.shift())
    }
  }

  // returning acc + rest elements in arrays
  return [...accArr, ...left, ...right]
}

const mergeSort = (input) => {
  if (input.length <= 1) return input

  // split array on half
  const midPoint = Math.floor(input.length / 2)
  const leftArr = input.splice(0, midPoint)

  // recursively call method for left and right side
  // join results using merge method
  return merge(mergeSort(leftArr), mergeSort(input))
}

const wiggleSort = (input) => {
  const sortedArr = mergeSort(input)
  console.log(`Sorted arr ${sortedArr}`)
  const halfIndex = Math.floor(sortedArr.length / 2)
  const resArr = []
  for (let i = 0; i <= halfIndex; i++) {
    resArr.push(sortedArr[i])
    resArr.push(sortedArr[halfIndex + i])
  }

  return resArr
}

const swap = (arr, i, j) => {
  const tmpVal = arr[i]
  arr[i] = arr[j]
  arr[j] = tmpVal
}

const wiggleSort2 = (input) => {
  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      if (input[i] > input[i + 1]) {
        swap(input, i, i + 1)
      }
    } else {
      if (input[i] < input[i + 1]) {
        swap(input, i, i + 1)
      }
    }
  }

  return input
}

// console.log(wiggleSort2(inputArr))