function strLi(sList:string[]):void{
    for(let i:number=0; i<sList.length;i++){
        if(sList[i].toUpperCase()=='P'){
            console.log(sList[i],i)
        }
    }

}

let sL:string[]=['a','p','c','d','m']

strLi(sL)