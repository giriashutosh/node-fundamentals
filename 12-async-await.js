//npm global command, comes with node
//npm --versinpmon

//local dependency - use it only in this particular project
// npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>

// const _ = require("lodash")

// const items = [1, [2, 3, [4]]]
// const newItems = _.flattenDeep(items)

// console.log(newItems)
// console.log("Hyy")

const { readFile, writeFile } = require('fs').promises
//const writeFile = require('fs').promises

const getText = async () => {
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile('./content/mind-granade.txt', `Here is the changes: ${first}, ${second}`)
}

getText()

//Note-  we can use util module also like util.promisify and other approach is create new Promise()