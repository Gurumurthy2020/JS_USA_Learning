//map
let number=[1,2,3,4];
let sc=number.map(n=>n*5);
console.log(sc);

//filter

let nm=[1,5,7,9,15,20];
let as=nm.filter((a)=>a%5 ==0);
console.log(as);

let employee= [
    {name:"john",age:30,gender:"male"},
    {name:"qas",age:20,gender:"female"},
    {name:"wsx",age:35,gender:"male"},
    {name:"rfv",age:45,gender:"female"},
    {name:"tgb",age:95,gender:"male"}
];

let newas=employee.filter(e=> {
    return e.age>20 && e.gender =="female"
});
console.log(newas);

//reduce
let er=[74,15,95,756];
let ee=er.reduce((add,num)=> add+num,0);
console.log(ee);

let er1=[74,15,95,756];
let er2=er1.reduce((max,nu)=> 
{
    if(nu > max){
        return nu;
    }
    else{
        return max;
    }
},er1[0]);
console.log(er2 );

let er24=er1.reduce((min,nu)=>{
    if(nu<min){
        return nu;
    }
    else{
        return min;
    }
},er1[0]);
console.log(er24 );
