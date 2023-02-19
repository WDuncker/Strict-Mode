// Strict Mode

"use strict"; // Enables strict mode

// const interface = "audio";
// console.log(interface);

// interface is a reserved keyword. If strict mode is on, js will let you know about keywords so you can avoid using them

let hasDriversLicense;
const passTest = true;

if (passTest) {
  hasDriversLicense = true; // strict mode will also alert you to any typos or issues in your code on the console
}

if (hasDriversLicense) {
  console.log("Sally can drive!");
}
