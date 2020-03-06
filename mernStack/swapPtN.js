function swapPtN(nList) {
    for (var i = 0; i < nList.length; i++) {
        if (nList[i] < 0) {
            nList[i] = -nList[i];
        }
        else {
            nList[i] = -nList[i];
        }
        console.log(nList[i]);
    }
}
var l1 = [1, -2, -4, 5, 6];
swapPtN(l1);
