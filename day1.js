const getInput = require("./getInput");

async function parseInput() {
  const input = await getInput(1);
  return input.map(Number);
}

async function part1() {
  const input = await parseInput();

  let count = 0;

  input.forEach((num, i) => {
    if (i && num > input[i - 1]) {
      count++;
    }
  });

  return count;
}

async function part2() {
  const input = await parseInput();

  let count = 0;

  input.forEach((num, i) => {
    let first = input.slice(i - 3, i);
    let second = input.slice(i - 2, i + 1);

    if (first.length && second.length) {
      const firstSum = first.reduce((a, b) => a + b);
      const secondSum = second.reduce((a, b) => a + b);

      if (secondSum > firstSum) {
        count++;
      }
    }
  });

  return count;
}
