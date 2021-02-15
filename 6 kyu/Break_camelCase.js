// complete the function
function solution(string) {
  // have to separate the capital casing of the string.

  string = string.replace(/([a-z])([A-Z])/g, '$1 $2')
  return string
}
