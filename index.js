module.exports = () => {
  const process = require("process");
  const input = process.argv[2];
  const cleanInput = input.replace(/ /g, "").toUpperCase();

  console.log("");
  console.log(
    "="
      .repeat(cleanInput.length)
      .split("")
      .join(" ")
  );
  console.log("");
  for (let i = 0; i < cleanInput.length; i++) {
    console.log(
      cleanInput
        .substring(0, cleanInput.length - i)
        .split("")
        .join(" ")
    );
  }
  console.log("");
  console.log(
    "="
      .repeat(cleanInput.length)
      .split("")
      .join(" ")
  );
  console.log("");
};
