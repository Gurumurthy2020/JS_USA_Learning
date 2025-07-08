for(let i=0; i<=5; i++){
    console.log(i);
}

for(let i=0; i<=10;i++){
    if(i%2 !==0){
        console.log("not even number", i);
    }
    
}

const name1=["guru","ishu" ,"aaru"];
for( const n in name1){
    console.log(n);
}

for(const a of name1){
    console.log(a);
}

let p=1;
while(p<=10){
    console.log(p);
    p++;
    //++p
    //p=p+1;
}
let h =1;
do {
    console.log(h);
    h++;
} while (h<=10);