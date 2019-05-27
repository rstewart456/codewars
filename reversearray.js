function dataReverse(data) {
    const array = data;
    let result = [];
    let arraycopy = [...array];
    while (arraycopy.length > 0) {
       result.push(arraycopy.splice(0, 8));
    }
    var a = result.reverse();
    var b = [].concat(...a);
    return b;
}
console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));
