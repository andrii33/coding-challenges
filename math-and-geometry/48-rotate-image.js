/**
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:


Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 

Constraints:

n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  // new raw = old column
  // new column = (length - 1) - old raw
  // column = 
  // 00 => 03, 01 => 13, 02 => 23, 03 => 33
  // 10 => 02, 11 => 12, 12 => 22, 13 => 32
  // 20 => 01, 21 => 11, 22 => 21, 23 => 31
  // 30 => 00, 31 => 10, 32 => 20, 33 => 30
  
 let l = 0
 let r = matrix.length - 1
 while (l < r) {
     for (let i = 0; i < (r - l); i++) {
         let top = l
         let bot = r
         console.log(`l${l} r${r} top${top} bot${bot} i${i}`)
         let tmpTLeft = matrix[top][l + i]
         
         matrix[top][l + i] = matrix[bot - i][l]
         
         matrix[bot - i][l] = matrix[bot][r - i]
        
         matrix[bot][r - i] = matrix[top + i][r]
       
         matrix[top + i][r] = tmpTLeft
     }
     l++
     r--
     console.log(`l${l} r${r}`)
 }
  
 return matrix
};