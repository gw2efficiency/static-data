export default [
  {
    name: 'Siege Master',
    items: [
      // Siege weapons
      {id: 74677, quantity: 1, badges: 40},
      {id: 39715, quantity: 1, badges: 25},
      {id: 42003, quantity: 1, badges: 25},
      {id: 42004, quantity: 1, badges: 50},
      {id: 39717, quantity: 1, badges: 25},
      {id: 21259, quantity: 1, badges: 150}
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
      {id: 74677, quantity: 1, proofOfHeroics: 15},
      {id: 39715, quantity: 1, proofOfHeroics: 10},
      {id: 42003, quantity: 1, proofOfHeroics: 10},
      {id: 42004, quantity: 1, proofOfHeroics: 20},
      {id: 39717, quantity: 1, proofOfHeroics: 10},
      {id: 21259, quantity: 1, proofOfHeroics: 50}
    ]
  }
]
