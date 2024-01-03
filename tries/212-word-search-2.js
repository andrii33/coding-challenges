/**
 Given an m x n board of characters and a list of strings words, return all words on the board.

 Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

 Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
 Output: ["eat","oath"]
*/

class TrieNode {
  children = {}
  is_end_word = false
}

class WordTrie {
  root = new TrieNode()
  insert(word) {
      let currNode = this.root
      for (let c of word) {
          if (!currNode.children[c]) {
              currNode.children[c] = new TrieNode()
          }
          currNode = currNode.children[c]
          
      }
      currNode.is_end_word = true
  }
}


/**
* @param {character[][]} board
* @param {string[]} words
* @return {string[]}
*/
var findWords = function(board, words) {
  // init words trie structure
  const wordsTrie = new WordTrie()
  words.map(w => wordsTrie.insert(w))
 
  const rowCount = board.length - 1
  const colCount = board[0].length - 1
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  const result = []
  const dfs = (i, j, node, wordPath) => {
      if (node.is_end_word) {
          node.is_end_word = false
          result.push(wordPath)
      }
      if (i < 0 || j < 0 || i > rowCount || j > colCount || !node.children[board[i][j]]) {
          return false
      }
      const currChar = board[i][j]
      board[i][j] = '#'
      for (let dir of directions) {
          const mi = i + dir[0]
          const nj = j + dir[1]
          dfs(mi, nj, node.children[currChar], wordPath + currChar)
      }
      board[i][j] = currChar
  }
  
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          for (let c of Object.keys(wordsTrie.root.children)) {
              if (board[i][j] === c) dfs(i, j, wordsTrie.root, '')
          }
      }
  }

  return result
};
