function diVBy(nList) {
    for (var i = 0; i < nList.length; i++) {
        if (nList[i] % 12 == 0) {
            console.log(nList[i]);
        }
    }
}
var l1 = [4, 24, 22, 31, 45];
diVBy(l1);
