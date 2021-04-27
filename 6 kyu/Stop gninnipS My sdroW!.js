// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
// Examples:

// spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
// spinWords("This is a test") => "This is a test" 
// spinWords("This is another test") => "This is rehtona test"

function spinWords(string){

    let str = string.split(' ');
    for (let i = 0; i < str.length; i++) {
      if (str[i].length >= 5) {
        str[i] = str[i].split('').reverse().join('');
      }
    }
    let joinStr = str.join(' ');
    return joinStr
  }

//   function spinWords(words){
//     return words.split(' ').map(function (word) {
//       return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
//   }