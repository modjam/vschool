var x = 1;
function fact(n) {
  for(var i=1; i<=n; i++) {
    x=x*i;
  }
  return x;
}
console.log(fact(4));