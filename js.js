const arr = [1, 0, 0, 0, 5, 7, -6, 0, 8, 0, 0];
const n = zeroTrim(arr);

function zeroTrim(arr) {
  try {
    let counter, num;
    counter = 0;
    
    arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
      num = arr[i];
      if (num === 0 && counter > 0) {
        arr.splice(i, 1);
        i--;
      }
      if (num === 0 && counter === 0) {
        counter++;
      
      }
      if (num !== 0 && counter > 0) {
        counter = 0;
      }
    } // End loop

    return arr;
  } catch {
    console.log("Something went wrong");
  }
} //End function
console.log(n);
