function checkPalindrome(str) {
  str = str.toUpperCase();
  return str == str.split('').reverse().join('');
}
console.log(checkPalindrome("raR"))



//or
//
//function fastestIsPalindrome(str) {
//  var len = Math.floor(str.length / 2);
//  for (var i = 0; i < len; i++)
//    if (str[i] !== str[str.length - i - 1])
//      return false;
//  return true;
//}
//console.log(fastestIsPalindrome("raR"))