function charLn(strLi) {
    var k = 5;
    for (var i = 0; i < strLi.length; i++) {
        if (strLi[i].length == k) {
            console.log(strLi[i], i);
        }
    }
}
var sLi = ["Manju", "Prashanth", "Prsad", "Sanjay"];
charLn(sLi);
