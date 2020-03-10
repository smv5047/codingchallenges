// Complete the solution so that it splits the string into pairs of
//two characters. If the string contains an odd number of characters
//then it should replace the missing second character of the
//final pair with an underscore ('_').

function solution(str) {
  let splitStrings = [];

  if (str.length % 2 === 0) {
    for (i = 0; i < str.length; i = i + 2) {
      let newString = str.charAt(i) + str.charAt(i + 1);
      splitStrings.push(newString);
    }
  } else {
    for (i = 0; i < str.length - 1; i = i + 2) {
      let newString = str.charAt(i) + str.charAt(i + 1);
      splitStrings.push(newString);
    }
    let finalString = str.charAt(str.length - 1) + "_";
    splitStrings.push(finalString);
  }

  console.log(splitStrings);
  return splitStrings;
}

solution("test");
