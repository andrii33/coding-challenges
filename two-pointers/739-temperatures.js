// https://leetcode.com/problems/daily-temperatures/


/**
 * Given an array of integers temperatures represents the daily temperatures, 
 * return an array answer such that answer[i] is the number of days you have 
 * to wait after the ith day to get a warmer temperature. If there is no future 
 * day for which this is possible, keep answer[i] == 0 instead.
 */

/**
 * Input: temperatures = [73,74,75,71,69,72,76,73]
 * Output: [1,1,4,2,1,1,0,0]
 */

/**
 * Input: temperatures = [30,40,50,60]
 * Output: [1,1,1,0]
 */

/**
 * Input: temperatures = [30,60,90]
 * Output: [1,1,0]
 */

const dailyTemperatures = (temperatures) => {
  if (!Array.isArray(temperatures) || temperatures.length <= 0) return []
  const answer = []
  const stack = []
  for (i = temperatures.length-1; i >= 0; i--) {
    answer[i] = 0
    while(stack.length > 0 && stack[stack.length -1].temperature <= temperatures[i]) {
      stack.pop()
    }
    if (stack.length > 0) {
      answer[i] = stack[stack.length -1].index - i
    }
    stack.push({temperature: temperatures[i], index: i})
  }
  return answer
}

const input = [73,74,75,71,69,72,76,73]
// const input = [30,60,90]
// const input = [30,40,50,60]

console.log(`INPUT ${input} ; RESULT: ${dailyTemperatures(input)}`)


