// Your code here.

function deepEqual (obj1, obj2) {
    if (obj1 === obj2) {
        return true
    }
    if (typeof obj1 !== 'object' || obj1 == null || typeof obj2 !== 'object' || obj2 == null) {
        return false
    }

    let obj1Keys = Object.keys(obj1)
    let obj2Keys = Object.keys(obj2)

      if(obj1Keys != obj2Keys) {
          return false
      }
}

// let keysA = Object.keys(a), keysB = Object.keys(b);

// if (keysA.length != keysB.length) return false;

// for (let key of obj1Keys) {
//   if (!obj2Keys.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
// }

// return true;

  
  
  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true