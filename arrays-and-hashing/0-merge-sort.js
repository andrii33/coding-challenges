

const merge = (arr1, arr2) => {
  const sortedArr = []
  while ( arr1.length > 0 && arr2.length > 0 ) {
    if (arr1[0] <= arr2[0]) {
      sortedArr.push(arr1.shift())
    } else {
      sortedArr.push(arr2.shift())
    }
  }

  return [...sortedArr, ...arr1, ...arr2]
}

const mergeSort = (arr) => {
  if (!arr || arr.length < 2) return arr
  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  return merge(left, right)
}


const testCases = [
  [0, 4, 10, 2, 1, 4, 12],
  [1],
  [2, 1],
  [1, 2, 1, 3]
]

for (let testArr of testCases) {
  const sortedArr = mergeSort(testArr)
  console.log(`Test array:   ${JSON.stringify(testArr)}`)
  console.log(`Sorted Array: ${JSON.stringify(sortedArr)}\n`)
}
