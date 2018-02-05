const dollarAmount = 0.10
const piggyBank = {}

// Your magic code here--------

let valueQuarter = .25;
let valueDime = .10;
let valueNickel = .05;
let valuePenny = .01; 

// i think i want to approach this by multiplying each value by 1. IF it === .10 then it will populate the dimes value. IF NOT === .10 it will evaluate to 0, and it may need to be a string?
// or, since the value populating the dimes property is 1, the question we want to ask is "how many (of each coin) === dollarAmount (.10). the answer for dimes will be 1. we could start by stating:

// if dollarAmount is the same as valueQuarter then piggyBank.quarters
if (dollarAmount === valueQuarter) {
    piggyBank.quarters = 1;
} 
else if (dollarAmount === valueDime) {
    piggyBank.dimes = 1; 
} else if (dollarAmount === valueNickel) {
    piggyBank.nickels = 1; 
} else  if (dollarAmount === valuePenny) {
    piggyBank.pennies = 1; 
} else {
    console.log("We don't know");
}
// the below is a start on the calculation to leave room for the dollar amount to change
// function convertToCoins("whatever dollar amount"){
  /* calculate how many coins to give Melissa when she gives me whatever dollar amount she has */
  /* "whatever dollar amount" / .25
  "whatever dollar amount" / .10
  "whatever dollar amount" / .05
  "whatever dollar amount" / .01
} */


/* this is what output should be:
piggyBank = {
    quarters: 0,
    dimes: 1,
    nickels: 0,
    pennies: 0
}*/

// -----------------------------
console.log(piggyBank);