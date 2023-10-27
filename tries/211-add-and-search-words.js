/**
  
  Design a data structure that supports adding new words and finding if a string matches any previously added string.

  Implement the WordDictionary class:

  WordDictionary() Initializes the object.
  void addWord(word) Adds word to the data structure, it can be matched later.
  bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

  Example:

  Input
  ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
  [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
  Output
  [null,null,null,null,false,true,true,true]

  Explanation
  WordDictionary wordDictionary = new WordDictionary();
  wordDictionary.addWord("bad");
  wordDictionary.addWord("dad");
  wordDictionary.addWord("mad");
  wordDictionary.search("pad"); // return False
  wordDictionary.search("bad"); // return True
  wordDictionary.search(".ad"); // return True
  wordDictionary.search("b.."); // return True

  Constraints:

  1 <= word.length <= 25
  word in addWord consists of lowercase English letters.
  word in search consist of '.' or lowercase English letters.
  There will be at most 2 dots in word for search queries.
  At most 104 calls will be made to addWord and search.


  SOLUTION:
  1. Implement Trie node structure
   Trie node has:
   - isEndOfNode bool value
   - children array (length of alphabet) 
 2. Implement method to add word to the trie
   - add function to calculate index - charcode offset from A using `charCodeAt()`. A would be 0
   - iterate throw the input word letters 
   - get letter index and add it to childrens array
   - move root position to the letter that was just added
   - mark the last node isEndOfNode=true 
 3. Implement method to search word in the trie
   - iterate throw the input word letters 
   - use function to get the word index letter
   - if children does not exist return false
   - move root positon to the children
   - return true if the last letter was found with isEndOfNode=true
      d
     e 
  * b  d
     a 
      c 
       k

 b..k
 */

const ALPHABET_LENGTH = 26;

class TrieNode {
    isEndOfWord = false
    childrens = new Array(ALPHABET_LENGTH)
}

class WordDictionary {
    root = new TrieNode()
    addWord(word) {
        if (!this.isValidString(word)) return
        let currentRoot = this.root
        for (let i = 0; i < word.length; i++) {
          const index = this.getLetterIndex(word, i)
          if (!currentRoot.childrens[index]) {
            currentRoot.childrens[index] = new TrieNode()
          }
          currentRoot = currentRoot.childrens[index]
        }
        currentRoot.isEndOfWord = true
    }

    search(word) {
        if (!this.isValidString(word)) return false

        return this.reccursiveSearch(word, 0, this.root)
    }

    reccursiveSearch(word, i, currentRoot) {
        if (i >= word.length && (currentRoot.isEndOfWord === true || word[i] === '.')) {
          return true
        } else {
          let nextI = i+1
          if (word[i] !== '.') {
            const index = this.getLetterIndex(word, i)
            if (!currentRoot.childrens[index])
              return false
            return this.reccursiveSearch(word, nextI, currentRoot.childrens[index])
          } else {
            for (let j = 0; j < currentRoot.childrens.length; j++) {
              if (!currentRoot.childrens[j]) continue;
              const res = this.reccursiveSearch(word, nextI, currentRoot.childrens[j])
              if (res) return res
            }
            return false
          }
        }
    }

    getLetterIndex(word, letterPosition) {
      return word.charCodeAt(letterPosition) - 'a'.charCodeAt(0)
    }

    isValidString(word) {
      return ((typeof word === 'string' || word instanceof String) && word.length > 0)
    }
};
