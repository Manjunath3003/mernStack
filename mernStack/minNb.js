function minN(nlist) {
    var min = nlist[0];
    var minIndex;
    for (var i = 1; i < nlist.length; i++) {
        if (nlist[i] < min) {
            min = nlist[i];
            minIndex = i;
        }
    }
    console.log(min, minIndex);
}
var l1 = [2, 4, 8, 6, 1, 5,];
minN(l1);
