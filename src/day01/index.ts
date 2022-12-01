import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n\n").map((items) => items.split("\n").map(Number));

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  
  return Math.max(...input.map((entry) => entry.reduce((a, b) => a + b, 0)));
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  
  return input
      .map((entry) => entry.reduce((a, b) => a + b, 0))
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((a, b) => a + b, 0);
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
