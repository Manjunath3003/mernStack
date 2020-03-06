function diVBy(nList:number[]):void{
    for(let i:number=0; i<nList.length; i++){
        if(nList[i]%12==0){
        console.log(nList[i])

        }
    }
}

let l1:number[]=[4,24,22,31,45]

diVBy(l1)//how to return the value and printing it outside the function