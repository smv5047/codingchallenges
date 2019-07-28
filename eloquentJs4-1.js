function range(start, end, step) {
    let newRange =[];
    if (step >0) {
    for (let i = start; i<= end; i+=step) {
      newRange.push(i);
    }
    } else if (step < 0) {
      for (let i = start; i>= end; i+=step) {
        newRange.push(i);
     }
    } else { 
       for (let i = start; i<= end; i++) {
     newRange.push(i);  
     }
    }
    return newRange;
  }
  
  function sum(array) {
    let summedArray= 0;
    for (let i = 0; i< array.length; i++) {
     summedArray += array[i]
    }
    return summedArray;
  }
  
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55