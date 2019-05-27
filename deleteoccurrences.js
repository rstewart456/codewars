function deleteNth(arr,n){
  var a = {};
  return arr.filter(function(x) {
    a[x] = (a[x]||0) + 1;
    return a[x] <= n;
  });
}
//deleteNth([20,37,20,21], 1);
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));
