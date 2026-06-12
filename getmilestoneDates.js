function getMilestoneDates(dateOfBirth) {

// 1. Parse the DOB string (DD-MM-YYYY)
const [day, month, year] = dateOfBirth.split("-").map(Number);
const birthDate = new Date(year, month - 1, day);

// 2. Define the milestone ages you want to find
const milestones = [57, 67, 75, 87];
const results = {};

// 3. Loop through milestones and calculate the new dates
milestones.forEach(age => {
    // Create a new date by adding the age to the birth year
    const milestoneDate = new Date(year + age, month - 1, day);


    // Format the date as DD-MM-YYYY// Format the date back to a clean readable string (DD-MM-YYYY)
        const formattedDate = milestoneDate.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).replace(/\//g, '-'); // Swap slashes for hyphens

        results[`age_${age}`] = formattedDate;
    });

    return results;

}

export default getMilestoneDates;