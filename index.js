/** @format */

const fizzBuzz = (a, b) => {
  let i = 1;
  for (i; i <= 100; i++) {
    if (i % (a * b) == 0) console.log("SphinX Software");
    else if (i % a == 0) console.log("SphinX");
    else if (i % b == 0) console.log("Software");
    else console.log(i);
  }
};

fizzBuzz(3, 5);
