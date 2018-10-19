const menus = {
  main: `
    tritext [command] <options>

    version ............ show package version
    help ............... show help menu for a command`
};

module.exports = () => {
  console.log(menus.main);
};
