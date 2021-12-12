const repeatString = function(phrase, numberOfRepeats) {
     let i = 0, repeatedPhrase = "";
     if (numberOfRepeats < 0) {
          return "ERROR";
     }
     while (i < numberOfRepeats) {
          repeatedPhrase += phrase;
          i++;
     }
     return repeatedPhrase;
};

// Do not edit below this line
module.exports = repeatString;
