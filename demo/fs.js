//File System
const fs = require('fs')
const path = require('path')

fs.mkdir(path.join(__dirname, 'test'), (err)=>{
    if (err) {
        throw err
    }

    console.log('Папка создана')
})

const filePath = path.join(__dirname, 'test','text.txt')

fs.writeFile(filePath, 'Hello NodeJS from created file!', err => {
    if (err) {
        throw err
    }

    console.log('Файл создан')
});

fs.appendFile(filePath, '\nSome new data in file', err => {
    if (err) {
        throw err
    }

    console.log('Файл изменен')
});

fs.readFile(filePath, 'utf-8',(err, content) => {
    if (err) {
        throw err
    }

    console.log('Содержимое файла:\n',content)

    // const data = Buffer.from(content)
    // console.log('Content: ', data.toString())
});