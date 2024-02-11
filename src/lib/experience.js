export function increaseExperience(years, months, days) {
  // Create a Date object to represent the starting date
  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - years);
  startDate.setMonth(startDate.getMonth() - months);
  startDate.setDate(startDate.getDate() - days);

  // Calculate the desired ending date
  const endingYears = years + 1;
  const endingMonths = 12 * endingYears + months;
  const endingDays = Math.floor(endingMonths / 12); // Get full years from months
  let remainingMonths = endingMonths % 12; // Keep remaining months

  // Adjust for February to avoid incorrect rollover due to 29-day leap years
  if (remainingMonths === 2) {
    const currentYear = startDate.getFullYear();
    const isLeapYear = currentYear % 4 === 0 && (currentYear % 100 !== 0 || currentYear % 400 === 0);
    const maxDays = isLeapYear ? 29 : 28;
    // Prevent exceeding February's max days by adjusting days or months as needed
    if (days > maxDays) {
      const dayOverflow = days - maxDays;
      days = maxDays;
      remainingMonths += Math.floor(dayOverflow / 31); // Convert overflow days to months
    }
  }

  // Set the ending date using year, remaining months, and adjusted days
  const endDate = new Date();
  endDate.setFullYear(startDate.getFullYear() + endingYears);
  endDate.setMonth(endingMonths % 12); // Remainder after full years
  endDate.setDate(days);

  // Calculate difference in years, months, and days
  const yearDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthDiff = endDate.getMonth() - startDate.getMonth();
  const dayDiff = endDate.getDate() - startDate.getDate();

  // Handle negative results for cases where starting date exceeds ending date
  const adjustedYearDiff = (yearDiff * 12 + monthDiff + dayDiff) < 0 ? -yearDiff : yearDiff;
  const adjustedMonthDiff = adjustedYearDiff === 0 ? monthDiff : (adjustedYearDiff * 12 + monthDiff + dayDiff) - (adjustedYearDiff * 12);
  const adjustedDayDiff = adjustedMonthDiff === 0 ? dayDiff : (adjustedMonthDiff * 30 + dayDiff) % 31; // Use 30 as an average month length

  // Return the formatted experience string
  return `${adjustedYearDiff} years ,  ${adjustedMonthDiff} months and ${adjustedDayDiff} days)`;
}


// new code TODO: use this!
// function calculateExperienceWithIncrements(currentYears, currentMonths, currentDays) {
//   // Ensure valid input types
//   if (typeof currentYears !== 'number' ||
//       typeof currentMonths !== 'number' ||
//       typeof currentDays !== 'number') {
//     throw new Error('Invalid input types. All arguments must be numbers.');
//   }

//   // Create a Date object representing the current date
//   const currentDate = new Date();

//   // Set the date components based on the provided experience
//   currentDate.setFullYear(currentDate.getFullYear() - currentYears);
//   currentDate.setMonth(currentDate.getMonth() + currentMonths);
//   currentDate.setDate(currentDate.getDate() + currentDays);

//   // Define the increments per year, month, and day
//   const yearsIncrement = 1;
//   const monthsIncrement = 1;
//   const daysIncrement = 1;

//   // Calculate the desired future date by incrementing year, month, and day
//   const futureDate = new Date(currentDate);
//   futureDate.setFullYear(futureDate.getFullYear() + yearsIncrement);
//   futureDate.setMonth(futureDate.getMonth() + monthsIncrement);
//   futureDate.setDate(futureDate.getDate() + daysIncrement);

//   // Compute the difference between current and future dates in years, months, and days
//   const yearsDiff = futureDate.getFullYear() - currentDate.getFullYear();
//   const monthsDiff = futureDate.getMonth() - currentDate.getMonth(); // Adjust for negative values
//   const daysDiff = futureDate.getDate() - currentDate.getDate(); // Adjust for negative values

//   // Handle potential overflow from months to years
//   if (monthsDiff < 0) {
//     yearsDiff--;
//     monthsDiff += 12;
//   }

//   // Handle potential overflow from days to months
//   if (daysDiff < 0) {
//     monthsDiff--;
//     daysDiff += 30; // Adjust for approximate month length
//   }

//   // Format the result as a string with appropriate units
//   const resultYears = yearsDiff > 0 ? yearsDiff + ' year' + (yearsDiff > 1 ? 's' : '') : '';
//   const resultMonths = monthsDiff > 0 ? monthsDiff + ' month' + (monthsDiff > 1 ? 's' : '') : '';
//   const resultDays = daysDiff > 0 ? daysDiff + ' day' + (daysDiff > 1 ? 's' : '') : '';

//   // Return the formatted result string
//   return `${resultYears} ${resultMonths} ${resultDays}`;
// }

// // Example usage:
// const currentYears = 5;
// const currentMonths = 4;
// const currentDays = 31;

// const futureExperience = calculateExperienceWithIncrements(currentYears, currentMonths, currentDays);
// console.log(futureExperience); // Output: 6 years 5 months 1 day