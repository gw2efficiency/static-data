const input = ``

const array = input.split('\n').map(x => x.split('\t'))

const id = parseInt(array[0][0], 10)
const karma = 630

const resultIds = array[0].splice(1)
const resultCount = array[2].splice(1)
let results = []

for (let i = 0; i !== resultIds.length; i++) {
  results.push({
    id: parseInt(resultIds[i], 10),
    quantity: parseFloat(resultCount[i], 10)
  })
}

const output = {id: id, karma: karma, results: results}
console.log(output)
