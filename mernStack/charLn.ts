function charLn(strLi:string[]):void{
    let k:number=5
    for(let i:number=0; i<strLi.length; i++){
        if(strLi[i].length==k){
            console.log(strLi[i],i)
        }
    }

}

let sLi:string[]=["Manju", "Prashanth", "Prsad", "Sanjay"]
charLn(sLi)