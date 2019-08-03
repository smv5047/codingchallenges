// Your code here.

function deepEqual (obj1, obj2) {
    if (typeof obj1 == 'object' && obj1 !== null) {
      if(Object.keys(obj1) === Object.keys(obj2)) {
        x = Object.values(obj1)
        y = Object.values(obj2)
        for (let i=0; i<x.length; i++) {
          if (x[i] !== y[i]){
            return false
          }
        }
         return true
       } else if (x === y) {
           return true
         } else {
         return false
         }
    } else {
      return false
    }
    }
      else if (obj1 === obj2) {
      return true
    } else {
      return false
    }
}

  
  //  if (obj1 === obj2) {
  //    return true
  //  } else if (Object.keys(obj1) == Object.keys(obj2) ){
  //    return true
  //  }
  //  else {
  //    return false
  //  }
  
  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true