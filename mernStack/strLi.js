function strLi(sList) {
    for (var i = 0; i < sList.length; i++) {
        if (sList[i].toUpperCase() == 'P') {
            console.log(sList[i], i);
        }
    }
}
var sL = ['a', 'p', 'c', 'd', 'm'];
strLi(sL);
