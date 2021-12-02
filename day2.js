const getInput = require("./getInput");

async function parseInput() {
  const input = await getInput(2);

  return input.map((i) => {
    const a = i.split(" ");

    a[1] = Number(a[i]);
  });
}

async function part1() {
  const input = await parseInput();

  let depth = 0;
  let horizontal = 0;

  input.forEach((a) => {
    if (a[0] === "forward") {
      horizontal += a[1];
    }

    if (a[0] === "down") {
      depth += a[1];
    }

    if (a[0] === "up") {
      depth -= a[1];
    }
  });

  return depth * horizontal;
}

async function part2() {
  const input = await getInput(2);

  let h = 0;
  let d = 0;
  let a = 0;

  input.forEach((i) => {
    if (i[0] === "forward") {
      h += i[1];
      d += a * i[1];
    }

    if (i[0] === "down") {
      a += i[1];
    }

    if (i[1] === "up") {
      a -= i[1];
    }
  });

  return h * d;
}
