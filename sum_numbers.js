function GetSum(a, b) {
    var max = Math.max(a, b);
    var min = Math.min(a, b);
    var total = 0;
    while (min <= max) {
        total += min++;
    }
    return total;
}
console.log(GetSum(-435, -584));