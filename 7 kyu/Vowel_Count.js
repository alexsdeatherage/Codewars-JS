function getCount(str) {
  var vowelsCount = 0;

  // enter your majic here

  let string = str.toString();

  for (let i = 0; i <= string.length - 1; i++){

    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u"){
         vowelsCount += 1;
    }
  }
  return vowelsCount;
}
