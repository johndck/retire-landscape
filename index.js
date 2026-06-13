import getFutureAge from "./utilities/checkFutureAge.js";
import getMilestoneDates from "./getmilestoneDates.js";
import calsMonthstoFund from "./calcMonths.js";

const dateOfBirth = "16-05-1973";
const spaDate = "05-04-2028";

const age = getFutureAge(dateOfBirth, spaDate);

console.log(`You will be ${age} at the cut off date in 2028`);

if (age < 55) {
    console.log("You have to wait until 57 to get your pension");
} else {
    console.log("You can take your pension now because you are 55");
}


const milestoneDates = getMilestoneDates(dateOfBirth);
console.log(milestoneDates);

const startDate = "15-05-2028";
const endDate = "10-06-2060";
const months = calsMonthstoFund(startDate, endDate);
console.log(`You have to fund ${months} months of later life`);




console.log("Your node app (basic) is running successfully");
