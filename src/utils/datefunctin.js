const date = new Date(); // This gets the current date and time

// Now, format the date as desired
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  fractionalSecondDigits: 3, // Milliseconds
  hour12: false, // Use 24-hour format
  timeZoneName: "short"
};
export const  todaysdate=date
 export const formattedDate = date.toLocaleString("en-US", options);
