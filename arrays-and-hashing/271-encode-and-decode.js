/**
 * Design an algorithm to encode a list of strings to a string. 
 * The encoded string is then sent over the network and is decoded back to the original list of strings. 
 * Please implement encode and decode
 * 
 * Input: ["lint","code","love","you"]
 * Output: ["lint","code","love","you"]
 * Explanation:
 * One possible encode method is: "lint:;code:;love:;you"
 */

const encode = (words, delimiter = '#') => {
  let out = ''
  // check empty input
  if (!Array.isArray(words) || words.length <= 0) return out
  for (let w of words) {
    out += `${w.length}${delimiter}${w}`
  }

  return out
}

// 4#lint4#code4#love3#you
const decode = (encodedStr, delimiter = '#') => {
  let i = 0
  const out = []
  while (i < encodedStr.length) {
    let j = i
    while(encodedStr[j] !== delimiter) {
      j++
    }
    const strLength = parseInt(encodedStr.substr(i, j))
    out.push(encodedStr.substr(j + 1, strLength))
    i = j + 1 + strLength
  }

  return out
}


// console.log(encode(["lint","code","love","you"]))
console.log(
  decode(
    encode(["li#nt","co#de","#love","you#"])
  )
)