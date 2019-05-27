function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    var a = startPriceOld;
    var b = startPriceNew;
    var c = 0;
    var d = savingperMonth;
    var f = percentLossByMonth;
    var e = 0; //months//
    var k = 0; //savings + startPriceOld//
    var i = 0;
    if (startPriceOld > startPriceNew) {
        return [0, startPriceOld - startPriceNew];
    } else {
        while (b > k) {
            //console.log(c);
            e++;
            if (e % 2 == 0) {
                f += 0.5;
            }
            var g = (a * f) / 100;
            //console.log(g);
            a = a - g;
            g = 0;
            var h = (b * f) / 100;
            b = b - h;
            h = 0;
            c = c + d;
            k = a + c
        }
    }
    i = k - b;
    return [e, Math.round(i)];
}
console.log(nbMonths(2000, 8000, 1000, 1.5));