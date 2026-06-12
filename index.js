import getFutureAge from "./utilities/checkFutureAge.js";


const age = getFutureAge("30-04-1975", "05-04-2028");

if (age < 55) {
    console.log("You have to wait until 57 to get your pension");
} else {
    console.log("You can take your pension now because you are 55");
}

console.log("Your node app (basic) is running successfully");
