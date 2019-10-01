// Calculate and return the number of days between two dates as a string.

// Dates may be in any combination of ISO, short or long formats.

function daysBetween (start, end) {
  let dateArray = start.split("")
  console.log(dateArray)
  let monthArray = dateArray.join(0,1)
  console.log(monthArray)
}

daysBetween("01.01.2019", "01.15.2019");