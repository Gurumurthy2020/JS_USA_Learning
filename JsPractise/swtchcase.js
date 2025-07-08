function checkday(dayNumber){
    let day;
    switch (dayNumber) {
        case 0:
            day="Sunday";
            break;
         case 1:
            day="Monday";
            break;
         case 2:
            day="Tuesday";
            break;
         case 3:
            day="Wednesday";
            break;
         case 4:
            day="Thursday";
            break;
         case 5:
            day="Friday";
            break;
         case 6:
            day="Saturday";
            break;
    
        default:
            console.log("invalid");
            break;
    }
    return day;
}

console.log(checkday(5));
console.log(checkday(6));

function browsername(brw){
    let browser ;
    switch (brw) {
        case "chrome":
            console.log("chrome launched")
            break;
        case "edge":
            console.log("edge launched")
            break;
        case "safari":
            console.log("safari launched")
            break;
    
        default:
            console.log("invalid browswer")
            break;
    }
    return browser;
}
browsername("safari");


function chennaipincode(xx){
    let pincode;
    switch(xx){
        case "60153":
            console.log("this is pammal")
            break;
        case "60154":
            console.log("this is ambature")
            break;
        default :
        console.log("not valid one")
        break;
    }
    return pincode;
}

chennaipincode("60153");
chennaipincode("000");
