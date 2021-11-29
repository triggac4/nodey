const { readFile, watchFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf-8', (err, resultz) => {
    if (err) {
        console.log(err)
        return
    }

    const first = resultz

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }

        const second = result

        writeFile(
            './content/write.txt',
            `the result is: ${first} and ${second} `,
            (err) => {
                if (err) {
                    console.log(err)
                }
            }
        )
    })
})
console.log('nodemon running')
