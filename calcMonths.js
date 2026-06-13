function calsMonthstoFund (startDate, endDate){

// Step 1: Parse the start and end dates
const [startDay, startMonth, startYear] = startDate.split("-").map(Number);
const [endDay, endMonth, endYear] = endDate.split("-").map(Number);

const startingDate = new Date(startYear, startMonth - 1, startDay);
const endingDate = new Date(endYear, endMonth - 1, endDay);

// 3. Calculate absolute month difference from years and months
const yearsDiff = endingDate.getFullYear() - startingDate.getFullYear();
const monthsDiff = endingDate.getMonth() - startingDate.getMonth();
const absoluteMonths = (yearsDiff * 12) + monthsDiff;

// 4. Calculate fractional days based on the target month's total days
const daysInEndMonth = new Date(endYear, endMonth, 0).getDate();
const fractionalMonths = (endDay - startDay) / daysInEndMonth;

// 5. Combine absolute and fractional months to get total months
const totalMonths = absoluteMonths + fractionalMonths;

return totalMonths;

}

export default calsMonthstoFund;