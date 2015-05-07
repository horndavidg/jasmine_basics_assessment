var grade = require("../grader.js")

describe("Testing the Grader Application", function(){
    
    it("Returns the letter grade for a given test score", function(){
        expect(grade.letterGrader(93)).toEqual("A")
        expect(grade.letterGrader(87)).toEqual("B")
        expect(grade.letterGrader(72)).toEqual("C")
        expect(grade.letterGrader(68)).toEqual("D")
        expect(grade.letterGrader(32)).toEqual("F")
        expect(grade.letterGrader(89.75)).toEqual("B")

})

    it("Returns the average score from an array of scores", function(){
        expect(grade.averageScore([35, 35, 35])).toEqual(35)
        expect(grade.averageScore([45, 55, 65])).toEqual(55)
        expect(grade.averageScore([15, 88, 71])).toEqual(58)

       

})

    it("Returns the median score from an array of scores", function(){
        expect(grade.medianScore([35, 35, 35, 35])).toEqual(35)
        expect(grade.medianScore([35, 32, 56, 15, 15, 15, 15, 15, 15, 15, 35, 15])).toEqual(15)
        expect(grade.medianScore([16, 17, 17, 17])).toEqual(17)

// ###Median

// Write a function `medianScore` which takes an array of test scores and calculates the median score.  The median is the middle value.  If there are an even number of scores, calculate the average of the middle two scores.

// ```
// medianScore([52,80,80,86,94])
// //=> 80
// ```

})


 it("Returns the mode score from an array of scores", function(){
        expect(grade.modeScore([35, 35, 35, 35])).toEqual(35)
        expect(grade.modeScore([35, 15, 15, 55, 15])).toEqual(15)
       

})


})


// **Instructions:** Fork and clone this repository.  Create a file called `grader.js` and write the following functions inside of it.  You must have full test coverage(write a bunch of jasmine tests for each function).  This is an open-book exercise.  Feel free to refer to your notes and the jasmine docs.

// ###Mode

// Write a function `modeScore` which takes an array of test scores and calculates the mode score.  The mode is the value that appears most often.

// ```
// modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])
// //=> 92
// ```






// var app = require("../map.js")

// describe("the map function", function(){
//     it("maps a function to a new array", function(){
//         expect(app.map([1,2,3], function(x){
//             return x * 2;
//         })).toEqual([2,4,6]);

//         expect(app.map(["jAyA", "anDERS", "matthew"], function(str){
//             return str.toUpperCase();
//         })).toEqual(["JAYA", "ANDERS", "MATTHEW"]);
//     });

//     it("handles invalid arguments", function(){
//         expect(app.map([1,2,3])).toEqual("You need to pass in a function")
//     });
// });