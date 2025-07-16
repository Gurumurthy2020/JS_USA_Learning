const Ppers=require ('./basicclasses')
function aa(){
    for(let i=0;i<4;i++){
        console.log(i);
    }
            //console.log(i);

    for(var j=0;j<4;j++){
        console.log(j);
    }
            console.log(j);
}
aa();

let pd2 = new Ppers("aaru","vishwanath");
console.log(pd2.fullname());
