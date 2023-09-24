/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), 
 * return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
 */


/**
 * @param {character[][]} grid
 * @return {number}
 */
 const numIslands = (grid) => {
  let numIslands = 0
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === "0") {
              continue
          }
          numIslands++
          drawnLandRecursive(grid, i, j)
      }
  }

  return numIslands
};

const drawnLandRecursive = (grid, i, j) => {
  if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >=  grid[0].length ||
      grid[i][j] === "0"
  ) return
  grid[i][j] = "0"
  drawnLandRecursive(grid, i+1, j) // right
  drawnLandRecursive(grid, i, j+1) // down
  drawnLandRecursive(grid, i-1, j) // left
  drawnLandRecursive(grid, i, j-1) // up
}
