//1. var :
var a=10;
function hello(){
    console.log(a);
}
hello()
var b="guru";
function name(){
    var c= "aaru";
    console.log(b);
}
name();

var browser ="chromes";
var browser="edges";
browser="safari"
console.log(browser);

//let :block scope

let num=10
num=15;
console.log(num);

// alphabet value "hello " comes only under block scope not to the outside scope
let alphabet="hi";
if (alphabet.length>1) {
   let alphabet="hello";
    console.log(alphabet);
}
    console.log(alphabet);

//const :fixed variable we cannot reassigned once its done
/* const days=7;
days=8;
console.log(100 * days);
console.log("variables done");
*/

let sc=15;
sc=20;
console.log(sc);