function getFutureAge(dateOfBirth, spaDate) {

// Step 1: Parse the DOB string (DD-MM-YYYY)
const [bDay, bMonth, bYear] = dateOfBirth.split("-").map(Number);
const birthDate = new Date(bYear, bMonth - 1, bDay);

// Step 2: Parse the Future Date string (DD-MM-YYYY)
const [fDay, fMonth, fYear] = spaDate.split("-").map(Number);
const futureDate = new Date(fYear, fMonth - 1, fDay);

// Step 3: Calculate the baseline year difference
let age = futureDate.getFullYear() - birthDate.getFullYear();

// Step 4: Check if the birthday has passed in that future year
const monthDiff = futureDate.getMonth() - birthDate.getMonth();
const dayDiff = futureDate.getDate() - birthDate.getDate();

if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--; // Subtract 1 if the birthday hasn't happened yet
}

return age;

}

export default getFutureAge;