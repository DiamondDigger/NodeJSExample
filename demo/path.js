const path = require('path')
const chalk = require('chalk')

console.log(chalk.cyan('Название файлв: ',path.basename(__filename)))
console.log(chalk.cyan('Название директории: ', path.dirname(__filename)))
console.log(chalk.cyan('Расширение файла: ', path.extname(__filename)))
console.log('Parse: ', path.parse(__filename))
console.log('Parse: ', path.parse(__filename).name)
console.log(chalk.cyan(path.join(__dirname, 'server', 'index.html')))