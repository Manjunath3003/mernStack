function minN(nlist:number[]):void{
    let min:number=nlist[0]
    let minIndex:number
    for(let i:number=1; i<nlist.length; i++){
        if (nlist[i]< min){
            min=nlist[i]
            minIndex=i

        }
      
    }
    console.log(min,minIndex)   
}

let l1:number[]=[2,4,8,6,1,5,]

minN(l1)