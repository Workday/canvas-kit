import chalk from 'chalk';

export const consoleMessage = (prefix, fileName, color = 'cyan') => {
  console.log(`${prefix} ${chalk[color](fileName)}`);
};
