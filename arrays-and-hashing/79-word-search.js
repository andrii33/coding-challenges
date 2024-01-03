/**
  Given an m x n grid of characters board and a string word, return true if word exists in the grid.

  The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const nLength = board.length - 1
  const mLength = board[0].length - 1
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  const dfs = (i, j, k) => {
      if (i < 0 || j < 0 || i > nLength || j > mLength || board[i][j] !== word[k]) {
          return false
      }
      if (k === word.length - 1) {
          return true
      }
      let tmpChar = board[i][j]
      board[i][j] = '#'
      for (let dir of directions) {
          const x = j + dir[0]
          const y = i + dir[1]
          if (dfs(y, x, k+1)) {
              return true
          }
      }
      board[i][j] = tmpChar
  }

  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          if (dfs(i, j, 0)) {
              return true
          }
      }
  }

  return false
};
