function reverseArray(arr) {
    let newArr = [];
    for (let i =0; i<arr.length; i++) {
      newArr.unshift(arr[i])
    }
    return newArr
  }
  
  function reverseArrayInPlace(arr) {
    for (let i =arr.length-2; i>-1; i--) {
      let x = arr[i]
      arr.splice(i,1);
      arr.push(x)
    }
    return arr
  }
  
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]