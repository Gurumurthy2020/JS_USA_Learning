let lang=["c","java","c++"];
lang.push("js");
console.log(lang);

//pop
let numb=[1,2,3,1,4];
numb.pop();
console.log(numb);

//shift
let fruit=["apple","orange","manong"];
let fistfruit=fruit.shift();
fruit.shift();
console.log(fruit);
console.log(fistfruit);

//unshift
let color=["red","orange","black"];
 color.unshift("pink");
 console.log(color);

 //splic
 let animals=["zebra","lion","snake"];
 animals.splice(0,2,"kong","cheeta");
 console.log(animals);

 //slice
 let asd=[1,4,7,9,10];
 let esd=asd.slice(1,2);
 console.log(esd);

 //concat
 let fru=["apple","orange"];
 let qa=[1,2];
 let ne=fru.concat(qa);
 console.log(ne);

 //index of
 let qw=["asd","qas","poi","poi"];
 let ws=qw.indexOf("poi");
 console.log(ws);

 let secondindex=qw.indexOf("poi",qw.indexOf("poi")+1);
 console.log(secondindex);

 //includes
 let cus=["admin","cus","vendo"];
 let flags=cus.includes("cus","ee");
 console.log(flags);

  console.log("------------");

 //foreach 
 let n =[1,2,3,4,5];
 n.forEach((e)=>{
    if(e%2==0){
        console.log(e);
    }
 })
