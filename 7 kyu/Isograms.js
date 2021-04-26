// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str){
    let string = str.toLowerCase();
    if (!string.match(/(.).*\1/i)) {
        return true
    } else {
      return false
    }
  }
  
  // (.) - Match any character, and put it into a capture group
  // .* - Match zero or more characters
  // \1 - Followed by the same character of the earlier capture group