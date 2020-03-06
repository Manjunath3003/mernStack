function swapEl(naList) {
    var a;
    a = naList[0];
    naList[0] = naList[-1];
    naList[-1] = a;
    console.log(naList);
}
var a1 = ['manju', 'Akshay', 'Gaurav'];
swapEl(a1); // Getting an exta undefined values at the output
