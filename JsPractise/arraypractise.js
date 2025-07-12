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

