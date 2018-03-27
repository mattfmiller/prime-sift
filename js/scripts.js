$(function() {
  $("#form").submit(function(event) {
    var userInput = parseInt($("#userInput").val());
    var tmpArray = [];
    var userArray = [];
    var output = [];

    for (var i = 2; i <= userInput; i ++) {
      userArray.push(i);
    }

      for (var i = userArray[0]; i < userInput; i = array[0]) {
        for(var j = i, k = i; j < userInput; j += i) {
          removeMultiples:
          var index = userArray.indexOf(j);
          if (index === -1)
                  continue removeMultiples;
          else
            userArray.splice(index,1);
        }
        tmpArray.push(k)
        }
        userArray.unshift(tmpArray);
        return userArray;


        console.log(userArray);
    // var eratosthenes = function(n) {
    //     // Eratosthenes algorithm to find all primes under n
    //     var array = [], upperLimit = Math.sqrt(n), output = [];
    //
    //     // Make an array from 2 to (n - 1)
    //     for (var i = 0; i < n; i++) {
    //         array.push(true);
    //     }
    //
    //     // Remove multiples of primes starting from 2, 3, 5,...
    //     for (var i = 2; i <= upperLimit; i++) {
    //         if (array[i]) {
    //             for (var j = i * i; j < n; j += i) {
    //                 array[j] = false;
    //             }
    //         }
    //     }
    //
    //     // All array[i] set to true are primes
    //     for (var i = 2; i < n; i++) {
    //         if(array[i]) {
    //             output.push(i);
    //         }
    //     }
    //
    //     return output;
    }; console.log(eratosthenes(70));
    event.preventDefault();
  });
});
