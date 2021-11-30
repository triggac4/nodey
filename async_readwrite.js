const { readFile, writeFile } = require('fs').promises

async function asyncDoMyWork() {
    try {
        const result = await readFile('./content/first.txt', 'utf-8')
        const result2 = await readFile('./content/second.txt', 'utf-8')
        writeFile(
            './content/write.txt',
            `${result} and ${result2} are the two result of the function`,
            { flag: 'a' }
        )
        console.log('task done')
    } catch (e) {
        console.log(e)
    }
}
console.log('work start')
asyncDoMyWork()
console.log('stack cleared')

// let readFileAsync = (path, encoding) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, encoding, (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }
// let writeFileAsync = (path, text) => {
//     return new Promise((resolve, reject) => {
//         writeFile(path, text, () => {
//             resolve('done writing')
//         })
//     })
// }

// async function asyncDoMyWork() {
//     try {
//         const result = await readFileAsync('./content/first.txt', 'utf-8')
//         const result2 = await readFileAsync('./content/second.txt', 'utf-8')
//         writeFileAsync(
//             './content/write.txt',
//             `${result} and ${result2} are the two result of the function`
//         )
//         console.log('task done')
//     } catch (e) {
//         console.log(e)
//     }
// }
// console.log('work start')
// asyncDoMyWork()
// console.log('stack cleared')
