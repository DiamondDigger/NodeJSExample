const chalk = require('chalk')
const text = require('./data')

console.log(chalk.cyan('Hello NodeJS'))
console.log(chalk.cyan(text))
console.log(chalk.red(__dirname))
console.log(chalk.red(__filename))

