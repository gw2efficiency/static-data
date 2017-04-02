let buildings = [
  {
    id: 'notary',
    name: 'Notary',
    layout: [
      [null, null, 240, null, null, null, 127, 229, 58],
      [null, null, 407, null, null, null, 397, 641]
    ]
  },
  {
    id: 'tavern',
    name: 'Tavern',
    layout: [
      [null, null, 359, null, null, 504, 428, 450, 234, 632, 253, 514, 570, 366, 271, 622],
      [null, null, 424, null, null, 840, 841, 238, 446, 221, 522, 227, 494, 157, 113, 558, 246, 159]
    ]
  },
  {
    id: 'mine',
    name: 'Mine',
    layout: [
      [null, null, 285, null, null, 331, 169, 310, 636],
      [null, null, 506, null, null, 120, 443, 486, 391, 301],
      [null, null, 398, null, null, 324, 546, 287]
    ]
  },
  {
    id: 'workshop',
    name: 'Workshop',
    layout: [
      [null, null, 380, null, null, 174, 180, 242, 778, 775, 368, 320, 440, 509, 782, 770, 272, 466, 640],
      [null, null, 204, null, null, 498, 467, 779, 768, 417, 600, 552, 785, 773, 208, 462, 586, 781, 774, 232, 408, 313]
    ]
  },
  {
    id: 'market',
    name: 'Market',
    layout: [
      [null, null, 350, null, null, 478, 390, 260, 38, 70, 182, 630, 638, 55],
      [null, null, 602, null, null, 445, 765, 167, 328, 210, 452, 375, 78, 213, 564, 309, 536]
    ]
  },
  {
    id: 'arena',
    name: 'Arena',
    layout: [
      [null, null, 434, null, null, 236, 156],
      [null, null, 162, null, null, 379, 129, 381, 308, 360, 524, 610, 520, 451, 152, 342, 501, 269, 165, 314, 421, 170, 353, 416, 351]
    ]
  },
  {
    id: 'warroom',
    name: 'War Room',
    layout: [
      [null, null, 288, null, null, 557, 550, 322, 354, 382, 176, 756, 290, 303, 605, 415, 458, 423, 444, 233, 621, 334, 615, 275],
      [null, null, 130, null, null, 292, 433, 422, 402, 256, 489, 613, 585, 572, 608, 442, 491, 282, 151, 476, 245, 123, 207, 335, 392, 347, 140, 598, 495]
    ]
  }
]

// Generate a flat "upgrades" id array from the upgrade layout
buildings = buildings.map(building => {
  building.upgrades = building.layout
    .reduce((a, b) => a.concat(b), [])
    .filter(Boolean)

  return building
})

export default buildings
