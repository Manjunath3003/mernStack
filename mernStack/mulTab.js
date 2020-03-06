function mulTab(n) {
    var mul;
    var data = [];
    var jason = {};
    for (var i = 1; i <= 10; i++) {
        mul = n * i;
        console.log(mul);
        jason['mul']=mul
        data.push(mul)
    }
    console.log(jason);
    return data
}
var data = mulTab(17);

data.forEach(element => {
    console.log("Manja",element)
});
