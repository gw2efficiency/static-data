// This generates the basic information via this wiki page, but still needs manual cleanup.
// https://wiki.guildwars2.com/wiki/Hungry_cat_scavenger_hunt

const existing = []

;(function () {
  function parseRow (row) {
    console.log('Parsing row', row)

    const id = parseInt(row.id.replace('cat', ''), 10)
    const image = existing.find((x) => x.id === id).image
    if (id === 23) return {id, image}

    const location = row.querySelector(`td:nth-child(1)`).innerText.split('\n')
    const waypoint = row
      .querySelector(`td:nth-child(2)`)
      .innerText.split(' — ')[0]
      .trim()
    const mapScreenshot = row.querySelector(`td:nth-child(3) img`)

    const requiredItem = row.querySelector(`td:nth-child(4)`).innerText.trim()

    const notes = row.querySelector(`td:nth-child(6)`).innerText.trim()
    const name = row
      .querySelector(`td:nth-child(7)`)
      .innerText.trim()
      .replace('.', '')
    const releaseDate = new Date(
      row
        .querySelector(`td:nth-child(8)`)
        .innerText.trim()
        .replace('th', '')
    ).toISOString()

    const description =
      `Unlocked with <strong>${requiredItem}</strong> in ` +
      `<strong>${location[0]}</strong> (${waypoint}), ${location[1]}. ${notes}`

    return {
      id,
      name,
      image,
      mapScreenshot: mapScreenshot ? mapScreenshot.src : null,
      releaseDate,
      description
    }
  }

  // eslint-disable-next-line
  console.log(Array.from($0.children).map(parseRow))
})()
