function peopleInLine(tickets) {
    var a = 0; // a = 25 //
    var b = 0; // b = 50 //
    var c = 0; // c = 100 //
    var g = 0; // Not Enough Money for Change. //
    for (x = 0; x < peopleInLine.length; x++) {
        if (peopleInLine[x] == 100) {
            if (b >= 1 && a >= 1) {
                b--;
                a--;
                c++;
            } else if (b == 0 && a >= 3) {
                a -= 3;
                c++;
            } else {
                g++;
            }
        }
        if (peopleInLine[x] == 50) {
            if (a >= 1) {
                a -= 1;
                b++;
            } else if (a == 0) {
                g++;
            }
        }
        if (peopleInLine[x] == 25) {
            a++;
        }
    }
    if (g >= 1) {
        return "NO"
    } else {
        return "YES"
    }
}
console.log(tickets([25, 25, 50, 50, 50]));