//description
// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.


//first solution
function twoArePositive(a, b, c) {
  let count = 0;
   if (a > 0) {
   count++;
   }
   if (b > 0) {
   count++;
   }
   if (c > 0) {
    count++;
   }
  if (count === 2) {
    return true;
  } else {
    return false;
  }
}
//second solution
const twoArePositive = (a,b,c) => (a > 0) + (b > 0) +(c > 0) == 2

//third solution
function twoArePositive(a, b, c) {
    // Happy Coding
    if (a > 0 && b > 0 && c <= 0|| a > 0 && c > 0  && b <= 0|| b > 0 && c > 0 && a <= 0) {
        return true;
    } else {
        return false;
    }
  }
//forth solution
function twoArePositive(a, b, c) {
    return [a, b, c].filter(val => val > 0).length === 2
  }


console.log(twoArePositive(-4, 6, 8));// == true
console.log(twoArePositive(4, -6, 9));// == true
console.log(twoArePositive(-4, 6, 0));// == false

console.log(twoArePositive(-14, -3, -4));// == false