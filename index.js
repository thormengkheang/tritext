const process = require("process");
const minimist = require("minimist");

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  let cmd = args._[0] || "help";

  if (args.version || args.v) {
    cmd = "version";
  }

  if (args.help || args.h) {
    cmd = "help";
  }

  switch (cmd) {
    case "version":
      require("./version")(args);
      break;
    case "help":
      require("./help")(args);
      break;
    default:
      require("./tritext")(args);
      break;
  }
};
