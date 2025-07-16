let day='tuesday';
let day1=day.slice(0,2);
console.log(day1);

let splitday=day.split("s");
console.log(splitday);
console.log(splitday[1].trim());

let datee='23';
let nextdate='27';
let dif=parseInt(nextdate)-parseInt(datee);
console.log(dif);

let newday=day+"is funday day";
console.log(newday);
var ss=newday.indexOf("day");
console.log(ss);

let ss1=newday.indexOf("day");
//console.log(ss1);
let count=0;
while(ss1!==-1){
    ss1=newday.indexOf("day",ss1+1);
        count++;

}
console.log(count);