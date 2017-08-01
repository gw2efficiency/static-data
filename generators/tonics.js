const content = `copy & paste from excel into here`

console.log('export default [')
const rows = content.split('\n').slice(1)
rows.map((row, i) => {
  row = row.split('\t')
  let comma = i === rows.length - 1 ? '' : ','
  console.log(`  {name: '${_(row[1])}', ids: [${row[0]}], acquisition: '${_(row[2])}', permanent: ${row[3].toLowerCase()}}${comma}`)
})
console.log(']')

function _ (string) {
  return string.replace(/'/, `\\'`)
}
