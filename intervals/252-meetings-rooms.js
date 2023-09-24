/***
 * Description
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

Example1

Input: intervals = [(0,30),(5,10),(15,20)]
Output: false
Explanation: 
(0,30), (5,10) and (0,30),(15,20) will conflict
Example2

Input: intervals = [(5,8),(9,15)]
Output: true
Explanation: 
Two times will not conflict 
 */

/**
 * Definition of Interval:
 * 
 */
 class Interval {
    constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

class Solution {
  /**
   * @param intervals: an array of meeting time intervals
   * @return: if a person could attend all meetings
   */
  canAttendMeetings(intervals) {
    intervals = intervals.sort((a, b) => a.start - b.start)
    for (let i = 1; i < intervals.length; i++) {
      const l = intervals[i-1]
      const r = intervals[i]
      if (l.end < r.start) return false
    }

    return true
  }
}

let intervals = []
intervals.push(new Interval(0,30))
intervals.push(new Interval(5,10))
intervals.push(new Interval(15,20))

const s = new Solution()
console.log(s.canAttendMeetings(intervals))

intervals = []
intervals.push(new Interval(5,8))
intervals.push(new Interval(8,15))
console.log(s.canAttendMeetings(intervals))