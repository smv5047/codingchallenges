//Write a function that accepts an array of 10 integers (between 0 and 9), 
//that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
    let newPhoneNumber= "("
    for (i=0; i<3; i++) {
    newPhoneNumber= newPhoneNumber + numbers[i]
      }
    newPhoneNumber = newPhoneNumber + ") "
    
    for (i=3; i<6; i++) {
    newPhoneNumber= newPhoneNumber + numbers[i]
      }
    newPhoneNumber = newPhoneNumber + "-"
     for (i=6; i<10; i++) {
    newPhoneNumber= newPhoneNumber + numbers[i]
      }
     
     return newPhoneNumber
  }