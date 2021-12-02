require("dotenv").config();
const axios = require("axios");

async function getInput(day) {
  const { data } = await axios.get(
    `https://adventofcode.com/2021/day/${day}/input`,
    {
      headers: {
        Cookie: "session=" + process.env.SESSION_TOKEN,
      },
    }
  );

  return data.split("\n");
}

module.exports = getInput;
