function myFunction(alfa){
    const str0 = "The quick brown fox jumps over the lazy dog.";
    const str1 = str0.toLowerCase();
    const str2 = str1.replace(/\s/g, "");
    const str3 = str2.match(/[a-z]/g);
    const str4 = [... new Set(str3)];
    const str5 = str4.length;
    if (str5 === 26) {
        return true;
    } else {
        return false;
    }
}
myFunction("The quick brown fox jumps over the lazy dog.");