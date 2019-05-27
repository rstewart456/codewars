function dataReverse(data) {
    var a = data.toString();
    var b = a.match(/.{1,16}/g);
    var c = b.reverse();
    var d = c.toString();
    var e = d.replace(/[^\w\s]/g, "");
    var g = Array.from(e).map(Number);
    console.log(d)
    return g;
}
console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));
