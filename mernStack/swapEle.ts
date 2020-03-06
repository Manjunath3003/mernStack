function swapEl(naList:string[]):void{
    let a:string
    a=naList[0]
    naList[0]=naList[-1]
    naList[-1]=a
    console.log(naList)
}
let a1:string[]=['manju','Akshay','Gaurav']
swapEl(a1)// Getting an exta undefined values at the output