function rot13(str) {
    const decode = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const code =   "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
    let item = "";
    let ind = ""
    for (let index of str) {
         if(decode.includes(index)) {
          item = decode.indexOf(index);
          ind += code.charAt(item);
         } else {
           ind += index;
         }
    }
    return ind
  }
  console.log(rot13("Ubj pna lbh gryy na rkgebireg sebz na vagebireg ng AFA?"));