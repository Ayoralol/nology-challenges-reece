function getPINs(observed) {
  let PINarray = observed.split("").map((num) => {
    switch (num) {
      case "1":
        return ["1", "2", "4"];
      case "2":
        return ["1", "2", "3", "5"];
      case "3":
        return ["2", "3", "6"];
      case "4":
        return ["1", "4", "5", "7"];
      case "5":
        return ["2", "4", "5", "6", "8"];
      case "6":
        return ["3", "5", "6", "9"];
      case "7":
        return ["4", "7", "8"];
      case "8":
        return ["5", "7", "8", "9", "0"];
      case "9":
        return ["6", "8", "9"];
      case "0":
        return ["8", "0"];
    }
  });

  let outputArray = [];
  generatePINs(PINarray, "", 0, outputArray);

  return outputArray;
}

function generatePINs(PINarray, currentPIN, depth, outputArray) {
  if (depth === PINarray.length) {
    outputArray.push(currentPIN);
    return;
  }

  for (let i = 0; i < PINarray[depth].length; i++) {
    const newPIN = currentPIN + PINarray[depth][i];
    generatePINs(PINarray, newPIN, depth + 1, outputArray);
  }
}

console.log(getPINs("369"));
//  * A function that takes a string of numbers and returns an array of all the possible PINs that could be created from those numbers.
//  * The order of the array does not matter.
//  * The PINs will always be 4 digits long.
//  * The PINs will always be numbers.
