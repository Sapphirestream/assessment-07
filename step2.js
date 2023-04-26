const perf = require("execution-time")();

const sumZero = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let n = 0; n < nums.length; n++) {
      if (nums[i] + nums[n] === 0) {
        return true;
      }
    }
  }

  return false;
};

perf.start(); // Starts timer
sumZero([1, 2, 5, -2]);
let resultsSumZero = perf.stop();
console.log("SumZero: ", resultsSumZero.preciseWords);

//SumZero:  38.2 μs
//sumZero - probably would have an inefficient runtime due to being a brute force solution that runs over everything twice

//console.log(sumZero([1, 2, 5, -2]));
//console.log(sumZero([1,3,4,2]))

const hasUniqueChars = (word) => {
  split = word.toLowerCase().split("").sort();

  for (let i = 0; i < split.length; i++) {
    if (split[i] === split[i + 1]) {
      return true;
    }
  }

  return false;
};

perf.start(); // Starts timer
hasUniqueChars("Thebrownfox");
let resultsUniqueChars = perf.stop();
console.log("UniqueChars: ", resultsUniqueChars.preciseWords);
//UniqueChars:  33.3 μs

//propably a relatively fast runtime since it is only going over the array once, and comparing two values at a time

//console.log(hasUniqueChars("Hello"));
//console.log(hasUniqueChars("Bye"));
//console.log(hasUniqueChars("Thebrownfox"));

const isPangram = (string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const lower = string.toLowerCase();

  for (let i = 0; i < alphabet.length; i++) {
    if (!string.includes(alphabet[i])) {
      return false;
    }
  }

  return true;
};

perf.start(); // Starts timer
hasUniqueChars("Thebrownfox");
let resultsPangram = perf.stop();
console.log("Pangram: ", resultsPangram.preciseWords);

// probaby a long runtime because it is checking the include method on every single character in your string

//console.log(isPangram("hello"));
//console.log(isPangram("The quick brown fox jumps over the lazy dog"));

const findLongestWord = (words) => {
  const lengths = words.map((word) => {
    return word.length;
  });

  return Math.max(...lengths);
};

// most likely an efficient runtime because .length feels like it would be a quick function to execute

//console.log(findLongestWord(["hi", "hello"]));
//console.log(findLongestWord(["hi", "hello", "Hollow Knight"]));
