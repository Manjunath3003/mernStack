function sqList(nList:number[]):void{
    for(let i:number=0; i<nList.length; i++){
        nList[i]=nList[i]*nList[i]
        console.log(nList[i])
    }
}
let l1:number[]=[2,4,6,8]
sqList(l1)
