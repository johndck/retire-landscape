function convertDate(date){

    const dateStr = date;

    // 1. Split the string into [day, month, year]
    const [day, month, year] = dateStr.split("-").map(Number);
    
    // 2. Create the Date object (subtract 1 from month for 0-indexing)
    const convertedDate = new Date(year, month - 1, day);
    // 3. Convert to a number (Unix timestamp in milliseconds)
    const convertedTimestamp = convertedDate.getTime();
    return convertedTimestamp;

}

export default convertDate;