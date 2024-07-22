const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Give me your name: ", (name) => {
    rl.question("Give me your age: ", (age) => {
    rl.question("Give me your travel point (Hungary,Germany,Serbia): ", (locations) => {
      console.log(`Your name: ${name}`);
      console.log(`Your age: ${age}`)
      console.log(`Your travel point: ${locations}`);
      
      const ageNumber = Number(age)
      
      if (ageNumber <= 10) {
        console.log("It will cost you 1 EURO");
    } else if (ageNumber > 60) {
        console.log("It will cost you 2 EURO");  
    } else {
        console.log("It will cost you 5 EURO");  
    }

      if ( locations === "Hungary") {
        console.log("It will be 200KM")
      } else if (locations === "Serbia") {
        console.log("It will be 500KM")
      } else if (locations === "Germany") {
        console.log("It will be 800KM")
      } else {
        console.log("Unknow location")
      }



      rl.close();
    });
});
});