function printerError(s) {
    var a = /[n-z]/gi;
    var b = s.match(a);
    var c = "0"; // full lenght of s
    var d = "0"; //
    for (i = 0; i < s.length; i++) {
        c++;
    }
    if (b) {
        for (x = 0; x < b.length; x++) {
            d++;
        }
    }
    return d + "/" + c
}
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));