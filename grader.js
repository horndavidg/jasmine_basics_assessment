module.exports = {
    

    letterGrader: function(num){
        
        var grade = Math.floor(num)

       if (grade >= 90) {
              return "A";
          }
        if ((grade >= 80) && (grade <= 89)) {
              return "B";
          }  
        if ((grade >= 70) && (grade <= 79)) {
              return "C";
          }  
        if ((grade >= 60) && (grade <= 69)) {
              return "D";
          }  
        if ((grade >= 0) && (grade <= 59)) {
              return "F";
          }  
    },

    averageScore: function(arr){
      
      var sum = 0;
      
      for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum / arr.length;
      },
        
    medianScore: function(arr) {

        for (var i = 0; i < (arr.length); i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
            var temp = arr[j];
            arr[j] = arr [j+1];
            arr[j+1] = temp;
              
              }
       }
      //console.log(arr);  
}
  
  //console.log(arr);
  //console.log(((arr[(arr.length/2)-1])*(arr[(arr.length/2)+1])));
  //answer = (arr.length/2);
  
  var a = (arr[(arr.length/2)-1]);
  var b = (arr[(arr.length/2)]);
  
  answer = ((a + b)/2);
  return answer;
  //console.log(answer);

// ###Median

// Write a function `medianScore` which takes an array of test scores and calculates the median score.  The median is the middle value.  If there are an even number of scores, calculate the average of the middle two scores.

// ```
// medianScore([52,80,80,86,94])
// //=> 80
// ```
},

modeScore: function(arr) {

var list = {};

for (var i = 0; i < arr.length; i++) {
    
    var cat = arr[i];
    
    // you can also do it this way
    // var char = str.charAt(i);

    if (list[cat]) {

        list[cat] += 1;

                }
            
            else {

        list[cat] = 1;
    }
}

return list;

}





};

// function bubbleSort(arr) {

// for (var i = 0; i < (arr.length); i++) {
//     for (var j = 0; j < arr.length; j++) {
//        if (arr[j] > arr[j+1]) {
//           var temp = arr[j];
//           arr[j] = arr [j+1];
//           arr[j+1] = temp;
//               }
       
//        }
//       //console.log(arr);  
// }
  
//   //console.log(arr);
//   //console.log(((arr[(arr.length/2)-1])*(arr[(arr.length/2)+1])));
//   //answer = (arr.length/2);
  
//   var a = (arr[(arr.length/2)-1]);
//   var b = (arr[(arr.length/2)]);
  
//   answer = ((a + b)/2);
//   //console.log(answer);
  
// }




// var numbers = [45,67,11,13,17,6];

// bubbleSort(numbers);








// module.exports = {
//     map: function(arr, func){
//         if(!func){
//             return "You need to pass in a function";
//         }
//         //make a new result array
//         var result = [];
//         //loop through array
//         for(var i = 0; i < arr.length; i++){
//             //apply func to each value in arr
//             var value = func(arr[i])
//             //add the new value to a new array
//             result.push(value)
//         }
//         return result;
//     },
//     bark: function(){
//         return "WOOF"
//     }
// }