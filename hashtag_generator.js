function generateHashtag(str) {
    let len = item1(str);

    function item1(input1) {
        let a = input1.split(' ').join('');
        console.log(a);
        if (Boolean(a) == false || a.length > 139) {
            return false;
        } else {
            return item2(str);
        }
    }

    function item2(input2) {
        let a = (/\w\S*/g);
        let b = str.match(a);
        let c = "";
        for (let i = 0; i < b.length; i++) {
            c += b[i].charAt(0).toUpperCase() + b[i].substr(1).toLowerCase();
        }
        return "#" + c;
    }
    return len;
}
//return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
console.log(generateHashtag('do we have A hashTag'));