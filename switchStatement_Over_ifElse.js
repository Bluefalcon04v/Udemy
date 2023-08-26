// Write the same code using if else statements

const day = "mon";

switch (day) {
    case "mon":
        console.log("Today is " + day);
        console.log("Go to the gym today");
        break;
    case "tue":
        console.log("Today is " + day);
        console.log("Watch movie");
        break;
    case "wed":
    case "thu":
        console.log("Today is " + day);
        console.log("Wash dishes ");
        // break;
    case "fri":
        console.log("Missing the break above, Today is " + day);
        break;
    case "sat":
        console.log("Today is " + day);
        break;
    case "sun":
        console.log("Today is " + day);
        break;
    default:
        console.log("Not a valid day");
}



// writing same code of switch statements using if else statements 

let days = "fri";

if(days === "mon"){
    console.log("Today is " + days);
    console.log("Go to the gym today");
}else if(days === "tue"){
    console.log("Today is " + days);
    console.log("Go to the gym today");
} else if(days === "wed" || days === "thu"){
    console.log("Today is " + days);
    console.log("Wash dishes");
} else if(days === "fri"){
    console.log("Today is " + days);
} else if(days === "sat"){
    console.log("Today is " + days);
} else if(days === "sun"){
    console.log("Today is " + days);
} else {
    console.log("Not a valid day");
}
