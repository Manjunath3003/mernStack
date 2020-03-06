function sqList(nList) {
    for (var i = 0; i < nList.length; i++) {
        nList[i] = nList[i] * nList[i];
        console.log(nList[i]);
    }
}
var l1 = [2, 4, 6, 8];
sqList(l1);
