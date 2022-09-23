const chalk = require('chalk');

const consoleMessage = (prefix, fileName, color = 'cyan') => {
  console.log(`${prefix} ${chalk[color](fileName)}`);
}

module.exports = {
  consoleMessage,
};
