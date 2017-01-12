module.exports = [
  {
    name: 'Siege Master',
    items: [
      // Siege weapons
      {id: 21161, quantity: 1, badges: 6},
      {id: 21156, quantity: 1, badges: 6},
      {id: 21157, quantity: 1, badges: 10},
      {id: 21158, quantity: 1, badges: 12},
      {id: 21160, quantity: 1, badges: 24},
      {id: 21159, quantity: 1, badges: 100},
      {id: 75311, quantity: 1, badges: 12},
      // Siege weapon upgrades
      {
        id: 21263,
        quantity: 1,
        badges: 12,
        crafting: {
          guides: 1,
          items: [{id: 19700, quantity: 5}, {id: 19722, quantity: 5}]
        }
      },
      {
        id: 21260,
        quantity: 1,
        badges: 12,
        crafting: {
          guides: 1,
          items: [{id: 19700, quantity: 5}, {id: 19722, quantity: 5}]
        }
      },
      {
        id: 21261,
        quantity: 1,
        badges: 20,
        crafting: {
          guides: 1,
          items: [{id: 19700, quantity: 5}, {id: 19722, quantity: 5}]
        }
      },
      {
        id: 21262,
        quantity: 1,
        badges: 24,
        crafting: {
          guides: 1,
          items: [{id: 19700, quantity: 5}, {id: 19722, quantity: 5}]
        }
      },
      {
        id: 21264,
        quantity: 1,
        badges: 48,
        crafting: {
          guides: 1,
          items: [{id: 19700, quantity: 10}, {id: 19722, quantity: 10}]
        }
      },
      {
        id: 74592,
        quantity: 1,
        badges: 24,
        crafting: {
          guides: 1,
          items: [{id: 19700, quantity: 5}, {id: 19722, quantity: 5}]
        }
      },
      {
        id: 21259,
        quantity: 1,
        badges: 500,
        crafting: {
          guides: 3,
          items: [{id: 19700, quantity: 10}, {id: 19722, quantity: 10}]
        }
      }
    ]
  },
  {
    name: 'Davis the Survivor',
    description: "Requires a guild hall with unlocked 'War Room Restoration 1'",
    items: [{id: 71473, quantity: 1, badges: 30}]
  },
  {
    name: 'Heroics Notary',
    heroicsOnly: true,
    items: [
      {id: 21263, quantity: 1, proofOfHeroics: 6},
      {id: 21260, quantity: 1, proofOfHeroics: 6},
      {id: 21261, quantity: 1, proofOfHeroics: 6},
      {id: 21262, quantity: 1, proofOfHeroics: 6},
      {id: 21264, quantity: 1, proofOfHeroics: 12},
      {id: 74592, quantity: 1, proofOfHeroics: 6}
    ]
  }
]
