const input = [1, 2, 3, 4, 5];
const out=input.map(q=>q*2);
console.log(out);

const op=input.filter(n=>n%2==0);
console.log(op);



const input1=[25,44,11,98,12];
const input2=input1.reduce((as,ws)=>{
    return ws < as ?ws :as;
},15);
console.log(input2);

let expenses=[120,250,356,475,95];
let total=expenses.reduce((total,expenses)=>total+expenses,0);
console.log(total);
//let highest=expenses.reduce((a,crntnum)=>(a>crntnum?a:crntnum),expenses[0]);
let lowest=expenses.reduce((a,crntnum)=>(a<crntnum?a:crntnum),expenses[0]);

let highest=Math.max(...expenses);

// let number=expenses.reduce((intial,currentno)=>{
//     if(intial>currentno){
//         return intial;
//     }
//     else{
//         return currentno;
//     }
//  })
console.log(highest)
console.log(lowest)

let studentsNames=["aaru","guru","ishu","amma"];
studentsNames.unshift("appa");
console.log(studentsNames)
studentsNames.pop();
console.log(studentsNames)
studentsNames.sort();
console.log(studentsNames)

const productPrices = [10,25,35,40,50];
let discountedPrices=productPrices.map(productPrices=>productPrices*0.9);
console.log(discountedPrices)
let affordableProducts =discountedPrices.filter(discountedPrices=>discountedPrices<50);
console.log(affordableProducts)
let total2=affordableProducts.reduce((a,affordableProducts)=>(a+affordableProducts),0);
console.log(total2)