// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
  // initialize empty charcter array.
    const chars = []
    
    for (const char of s) {
      if (char !== '#') {
        chars.push(char);
        continue;
      }
      
      // if # and at least one character in chars
      if (chars.length) {
        chars.pop();
      }
    }
    return chars.join('')
  };