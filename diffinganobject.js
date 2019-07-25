// Ever wonder how tools like `git` parse your source code and determine what you've added and subtracted 
//from the last commit?

// Today we're going to build our own diffing tool to compare JavaScript objects full of fruit data!

//*Diffing an Object*

//Given JavaScript objects like this:

// ```newCode = {
//    apples: 3, 
//    oranges: 4
// }```

// ```oldCode = {
//    apples: 3, 
//    grapes: 5
// }```

//Create a function that returns an array of containing the object diff like the:

// ```diff(newCode, oldCode)```

// ```//returns: 
// // [
// //     ['-', 'grapes', 5],
// //     ['+', 'oranges',4]
// // ]```

//When you have figured this out, DM your TL the solution that you have come up with.  
//It is also highly recommended that you create a repository on Github named coding challenges 
//and upload your work to Github.  That way you keep getting green ticks on your Github graph.


//Compare 2 objects and determine the difference
//return the difference
function diff (newCode, oldCode) {
    let difference = {};
    for (let i =0; i<newCode.length; i++) {
        for (let y=0; y<oldCode.length; y++) {
            if (newCode.i === oldCode.y){
                difference.push(new)
            }
        }
    }
}


