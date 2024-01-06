const content = `copy & paste from excel into here`

console.log('export default [')
const rows = content.split('\n').slice(1).filter(x => !!x.trim())
rows.map((row, i) => {
  row = row.split('\t')
  let comma = i === rows.length - 1 ? '' : ','

  let json = [
    `group: '${_string(row[1])}'`,
    `title: '${_string(row[3])}'`,
    `key: '${_string(row[4])}'`,
    `sprite: '${_string(row[5])}'`,
    `gold: ${_bool(row[6])}`,
    `by_playtime: ${_bool(row[7])}`,
    `decimals: ${_int(row[8])}`
  ].join(', ')

  // 0           - 1     - 2           - 3     - 4   - 5       - 6     - 7           - 8
  // group sort  - group - title sort  - title - key - sprite  - gold  - by_playtime - decimals

  console.log(`  {${json}}${comma}`)
})
console.log(']')

function _string (string) {
  return string.replace(/'/g, `\\'`)
}

function _bool (x) {
  return x === 'TRUE'
}

function _int (x) {
  return parseInt(x, 10)
}
