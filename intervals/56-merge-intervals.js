/**
 * 
 * Given an array of intervals where intervals[i] = [starti, endi], 
 * merge all overlapping intervals, and return an array of the non-overlapping 
 * intervals that cover all the intervals in the input.
 * 
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let mergedIntervals = []
  let i = 0
  while (i < intervals.length) {
      if (i+1 < intervals.length && intervals[i][1] >= intervals[i+1][0]) { // merge needed
          j = i + 1
          let secondPoint = intervals[i][1] > intervals[j][1] ? intervals[i][1] : intervals[j][1] // taking biggest second point from the intervals
          while (j+1 < intervals.length && secondPoint >= intervals[j+1][0]) { // looking for the last interval to merge
              j++
              if (secondPoint < intervals[j][1]) secondPoint = intervals[j][1] // updating the second point to be max
          }
          
          mergedIntervals.push([intervals[i][0], secondPoint])
          i = j+1
      } else {
          mergedIntervals.push(intervals[i])
          i++
      }
  }

  return mergedIntervals
};