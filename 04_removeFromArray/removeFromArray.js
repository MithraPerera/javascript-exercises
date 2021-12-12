const removeFromArray = function(providedArray, ...Args) {
     const modfiedArray = [...providedArray];
          for (let i = 0; i < Args.length; i++) {
               modfiedArray.forEach((element, index) => {
               if (Args[i] === element) {
                    modfiedArray.splice(index, 1);
                   // break;   
               }
          });
          }
          return modfiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
