const path = require('path')
const fs = require('fs')

let counter = 0
let counterAdd = 0

const getFiles = (searchDir = './hh/batch') => {
    const paths = fs.readdirSync(searchDir, { withFileTypes: true })
    paths.forEach((fPath) => {
        const fileName = fPath.name
        const filePath = path.resolve(searchDir, fileName)
        const fileExt = path.extname(fileName)

        if (fPath.isDirectory()) {
            getFiles(filePath)
            return
        }

        if (!fPath.isFile()) {
            return
        }

        if (fileExt !== '.json') {
            return
        }

        const file = fs.readFileSync(filePath)
        const json = JSON.parse(file)

        counter++
        if (json.driver_license_types.lenght) counterAdd++
    });
}w

const run = () => {
    getFiles()

    console.log(counter, counterAdd)
}

run()