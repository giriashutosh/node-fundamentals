const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)


//if file exist it insert the content otherwise it will create
writeFileSync(
    './content/result.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
)
