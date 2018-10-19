const clipboardy = require("clipboardy");

module.exports = args => {
  const input = args._[0];
  const cleanInput = input.replace(/ /g, "").toUpperCase();

  console.log("");
  console.log(
    "="
      .repeat(cleanInput.length)
      .split("")
      .join(" ")
  );
  console.log("");

  const inputList = [...cleanInput].map((e, i) => {
    const output = cleanInput
      .substring(0, cleanInput.length - i)
      .split("")
      .join(" ");
    console.log(output);
    return output;
  });

  clipboardy.writeSync(inputList.join("\n"));

  console.log("");
  console.log(
    "="
      .repeat(cleanInput.length)
      .split("")
      .join(" ")
  );
  console.log("");

  console.log("Copied to clipboard!");
  console.log("");
};
