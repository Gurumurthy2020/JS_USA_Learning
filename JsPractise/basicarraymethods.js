let markkss=[25,35,45,95];
markkss.push(25);
console.log(markkss);

markkss.pop(74);
console.log(markkss);

markkss.shift(99);
console.log(markkss);

markkss.unshift(74);
console.log(markkss);

console.log(markkss.indexOf(45));

console.log(markkss.includes(95));

let slicemarks=markkss.slice(1,3);
console.log(slicemarks);

let splicedmarks=markkss.splice(1,2,99);
console.log(splicedmarks);
console.log(markkss);

var summ=0;
for(let i=0;i<markkss.length;i++){
    summ=summ+markkss[i];
        console.log(markkss[i]);
        
}
console.log(summ);

var max=[152,956,74,85,99];
var totalll=max.reduce((sum,max)=>sum+max,0);
console.log(totalll);

var sc=[12,45,95,10,18];
let even=[];
for(let a=0;a<sc.length;a++){
    if (sc[a]%2==0) {        
        even.push(sc[a]);
        }
}
console.log(even);
let as=sc.filter(sc=>sc%2==0);
console.log(as);

let asx=sc.map(sc=>sc*5);
console.log(asx);
console.log("--------");
