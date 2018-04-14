export default [
  {
    name: 'Trade Caches',
    description: 'Trade Caches are chests found throughout the Crystal Desert. They require a Trader\'s Key to open.',
    items: [
      { id: 83419,
        karma: 245,
        results:
        [ { id: 19683, quantity: 0.94 },
           { id: 19681, quantity: 0.62 },
           { id: 19679, quantity: 1.01 },
           { id: 19682, quantity: 0.4 } ] },
      { id: 82564,
        karma: 245,
        results: [ { id: 19718, quantity: 4.06 }, { id: 19739, quantity: 3.42 } ] },
      { id: 82946,
        karma: 245,
        results: [ { id: 19726, quantity: 7.02 }, { id: 19723, quantity: 7.85 } ] },
      { id: 83298,
        karma: 245,
        results: [ { id: 19719, quantity: 2.3 }, { id: 19728, quantity: 4.07 } ] },
      { id: 83462,
        karma: 245,
        results:
        [ { id: 24290, quantity: 0.14 },
     { id: 24291, quantity: 0.15 },
     { id: 24292, quantity: 0.16 },
     { id: 24293, quantity: 0.16 },
     { id: 24294, quantity: 0.28 },
     { id: 24295, quantity: 0.06 },
     { id: 24342, quantity: 0.16 },
     { id: 24343, quantity: 0.15 },
     { id: 24344, quantity: 0.16 },
     { id: 24345, quantity: 0.13 },
     { id: 24341, quantity: 0.29 },
     { id: 24358, quantity: 0.04 },
     { id: 24346, quantity: 0.12 },
     { id: 24347, quantity: 0.17 },
     { id: 24348, quantity: 0.15 },
     { id: 24349, quantity: 0.25 },
     { id: 24350, quantity: 0.33 },
     { id: 24351, quantity: 0.06 } ] }
    ]
  },

  {
    name: 'Mystic Forge Conversion',
    description: 'Buy four of these karma items and forge them together using the mystic forge.<br>This converts them into items you can salvage for materials.',
    chance: 0.875,
    items: [
      // Mystic forge conversions
      {
        id: 4208,
        show_result_title: true,
        karma: 504,
        vendor: 'Tiga Fierceblade',
        waypoint: '[&BN4AAAA=]',
        results: [{id: 19728, quantity: 1.3}, {id: 19719, quantity: 0.4}]
      },
      {
        id: 4674,
        show_result_title: true,
        karma: 280,
        vendor: 'Seraph Soldier Diedra',
        waypoint: '[&BPEAAAA=]',
        results: [{id: 19718, quantity: 1.3}, {id: 19739, quantity: 0.4}]
      },
      {
        id: 4685,
        show_result_title: true,
        karma: 532,
        vendor: 'Guard Barnaby',
        waypoint: '[&BBUAAAA=]',
        results: [{id: 19739, quantity: 1.3}, {id: 19718, quantity: 0.4}]
      },
      {
        id: 4743,
        show_result_title: true,
        karma: 728,
        vendor: 'Clerk Ulva',
        waypoint: '[&BIsBAAA=]',
        results: [{id: 19741, quantity: 1.3}, {id: 19739, quantity: 0.4}]
      },
      {
        id: 4765,
        show_result_title: true,
        karma: 1064,
        vendor: 'Bram Dawnrazer',
        waypoint: '[&BKQBAAA=]',
        results: [{id: 19743, quantity: 1.3}, {id: 19741, quantity: 0.4}]
      },
      {
        id: 4117,
        show_result_title: true,
        karma: 1512,
        vendor: 'Explorer Erikk',
        waypoint: '[&BHgCAAA=]',
        results: [{id: 19748, quantity: 1.3}, {id: 19745, quantity: 0.4}]
      },
      {
        id: 4812,
        show_result_title: true,
        karma: 896,
        vendor: 'Wounded Private Felix',
        waypoint: '[&BKgAAAA=]',
        results: [{id: 19730, quantity: 1.3}, {id: 19731, quantity: 0.4}]
      },
      {
        id: 4764,
        show_result_title: true,
        karma: 1064,
        vendor: 'Bram Dawnrazer',
        waypoint: '[&BKQBAAA=]',
        results: [{id: 19731, quantity: 1.3}, {id: 19730, quantity: 0.4}]
      },
      {
        id: 30384,
        show_result_title: true,
        karma: 1064,
        vendor: 'Warden Caedmon',
        waypoint: '[&BAwAAAA=]',
        results: [{id: 19726, quantity: 1.3}, {id: 19727, quantity: 0.4}]
      },
      {
        id: 30377,
        show_result_title: true,
        karma: 1008,
        vendor: 'Sangdo Swiftwing',
        waypoint: '[&BBIAAAA=]',
        results: [{id: 19726, quantity: 1.3}, {id: 19727, quantity: 0.4}]
      },
      {
        id: 29460,
        show_result_title: true,
        karma: 1260,
        vendor: 'Arcanist Aurelio Shiverpaw',
        waypoint: '[&BJkBAAA=]',
        results: [{id: 19727, quantity: 1.3}, {id: 19699, quantity: 0.4}]
      }
    ]
  },
  {
    name: 'Beaded weapons',
    description: 'Buy 75x "Sun Bead" from the vendor and then craft the (sellable) item out of them.<br>You have to discover the recipe via the "discovery" tab of your crafting profession.',
    items: [
      // Beaded weapons
      {
        id: 14882,
        karma: 1575,
        vendor: 'Cuadinti',
        waypoint: '[&BMgBAAA=]',
        crafting: {
          items: [{id: 12849, quantity: 1}, {id: 12895, quantity: 1}]
        }
      },
      {
        id: 14883,
        karma: 1575,
        vendor: 'Cuadinti',
        waypoint: '[&BMgBAAA=]',
        crafting: {
          items: [{id: 12855, quantity: 1}, {id: 12879, quantity: 1}]
        }
      },
      {
        id: 14889,
        karma: 1575,
        vendor: 'Cuadinti',
        waypoint: '[&BMgBAAA=]',
        crafting: {
          items: [{id: 12873, quantity: 1}, {id: 12895, quantity: 1}]
        }
      },
      {
        id: 14890,
        karma: 1575,
        vendor: 'Cuadinti',
        waypoint: '[&BMgBAAA=]',
        crafting: {
          items: [{id: 12921, quantity: 1}, {id: 12958, quantity: 1}]
        }
      },
      {
        id: 14892,
        karma: 1575,
        vendor: 'Cuadinti',
        waypoint: '[&BMgBAAA=]',
        crafting: {
          items: [{id: 12979, quantity: 1}, {id: 13258, quantity: 1}]
        }
      },
      {
        id: 14897,
        karma: 1575,
        vendor: 'Cuadinti',
        waypoint: '[&BMgBAAA=]',
        crafting: {
          items: [{id: 12843, quantity: 1}, {id: 12867, quantity: 1}]
        }
      },
      {
        id: 14884,
        karma: 1575,
        vendor: 'Cuadinti',
        waypoint: '[&BMgBAAA=]',
        crafting: {
          items: [{id: 12985, quantity: 1}, {id: 13246, quantity: 1}]
        }
      },
      {
        id: 14893,
        karma: 1575,
        vendor: 'Cuadinti',
        waypoint: '[&BMgBAAA=]',
        crafting: {
          items: [{id: 12903, quantity: 1}, {id: 12909, quantity: 1}]
        }
      },
      {
        id: 14898,
        karma: 1575,
        vendor: 'Cuadinti',
        waypoint: '[&BMgBAAA=]',
        crafting: {
          items: [{id: 13012, quantity: 1}, {id: 13058, quantity: 1}]
        }
      },
      {
        id: 14900,
        karma: 1575,
        vendor: 'Cuadinti',
        waypoint: '[&BMgBAAA=]',
        crafting: {
          items: [{id: 12927, quantity: 1}, {id: 12933, quantity: 1}]
        }
      },
      {
        id: 14885,
        karma: 1575,
        vendor: 'Cuadinti',
        waypoint: '[&BMgBAAA=]',
        crafting: {
          items: [{id: 12837, quantity: 1}, {id: 12885, quantity: 1}]
        }
      },
      {
        id: 14886,
        karma: 1575,
        vendor: 'Cuadinti',
        waypoint: '[&BMgBAAA=]',
        crafting: {
          items: [{id: 12861, quantity: 1}, {id: 12898, quantity: 1}]
        }
      },
      {
        id: 14888,
        karma: 1575,
        vendor: 'Cuadinti',
        waypoint: '[&BMgBAAA=]',
        crafting: {
          items: [{id: 12940, quantity: 1}, {id: 12965, quantity: 1}]
        }
      },
      {
        id: 14891,
        karma: 1575,
        vendor: 'Cuadinti',
        waypoint: '[&BMgBAAA=]',
        crafting: {
          items: [{id: 12915, quantity: 1}, {id: 12952, quantity: 1}]
        }
      },
      {
        id: 14894,
        karma: 1575,
        vendor: 'Cuadinti',
        waypoint: '[&BMgBAAA=]',
        crafting: {
          items: [{id: 12946, quantity: 1}, {id: 12965, quantity: 1}]
        }
      },
      {
        id: 14896,
        karma: 1575,
        vendor: 'Cuadinti',
        waypoint: '[&BMgBAAA=]',
        crafting: {
          items: [{id: 12972, quantity: 1}, {id: 13264, quantity: 1}]
        }
      },
      {
        id: 14895,
        karma: 1575,
        vendor: 'Cuadinti',
        waypoint: '[&BMgBAAA=]',
        crafting: {
          items: [{id: 12952, quantity: 1}, {id: 13054, quantity: 1}]
        }
      },
      {
        id: 14887,
        karma: 1575,
        vendor: 'Cuadinti',
        waypoint: '[&BMgBAAA=]',
        crafting: {
          items: [{id: 12898, quantity: 1}, {id: 12995, quantity: 1}]
        }
      },
      {
        id: 14899,
        karma: 1575,
        vendor: 'Cuadinti',
        waypoint: '[&BMgBAAA=]',
        crafting: {
          items: [{id: 13001, quantity: 1}, {id: 13250, quantity: 1}]
        }
      }
    ]
  },
  {
    name: 'Dye Cooking',
    description: "Requires the 'Cook' crafting profession on the appropriate levels",
    items: [
      {
        id: 12758,
        karma: 196,
        crafting: {items: [{id: 12250, quantity: 25}]}
      },
      {
        id: 12750,
        karma: 196,
        crafting: {
          items: [{id: 12250, quantity: 25}, {id: 12531, quantity: 25}]
        }
      },
      {
        id: 12742,
        karma: 196,
        crafting: {
          items: [
            {id: 12250, quantity: 25},
            {id: 12531, quantity: 25},
            {id: 12545, quantity: 25}
          ]
        }
      },
      {
        id: 12757,
        karma: 140,
        crafting: {items: [{id: 12135, quantity: 25}]}
      },
      {
        id: 12749,
        karma: 140,
        crafting: {
          items: [{id: 12135, quantity: 25}, {id: 12334, quantity: 25}]
        }
      },
      {
        id: 12741,
        karma: 140,
        crafting: {
          items: [
            {id: 12135, quantity: 25},
            {id: 12334, quantity: 25},
            {id: 12144, quantity: 25}
          ]
        }
      },
      {
        id: 12761,
        karma: 196,
        crafting: {items: [{id: 12255, quantity: 25}]}
      },
      {
        id: 12753,
        karma: 196,
        crafting: {
          items: [{id: 12255, quantity: 25}, {id: 12341, quantity: 25}]
        }
      },
      {
        id: 12745,
        karma: 350,
        crafting: {
          items: [{id: 12255, quantity: 25}, {id: 12341, quantity: 25}]
        }
      },
      {
        id: 12762,
        karma: 140,
        crafting: {items: [{id: 12253, quantity: 25}]}
      },
      {
        id: 12754,
        karma: 448,
        crafting: {items: [{id: 12253, quantity: 25}]}
      },
      {
        id: 12746,
        karma: 448,
        crafting: {
          items: [{id: 12253, quantity: 25}, {id: 12254, quantity: 25}]
        }
      },
      {
        id: 12763,
        karma: 140,
        crafting: {items: [{id: 12142, quantity: 25}]}
      },
      {
        id: 12755,
        karma: 140,
        crafting: {
          items: [{id: 12142, quantity: 25}, {id: 12247, quantity: 25}]
        }
      },
      {
        id: 12747,
        karma: 756,
        crafting: {
          items: [{id: 12142, quantity: 25}, {id: 12247, quantity: 25}]
        }
      }
    ]
  },
  {
    name: 'Karmic Converter',
    description: 'You can buy one of these each day from the Karmic Converter (needs "Exotic Hunter" achievement)',
    items: [
      // Crafting bags
      {
        id: 67248,
        karma: 4998,
        random_results: {
          output: 3,
          quantity_min: 1,
          quantity_max: 1,
          items: [24358, 24351, 24277, 24357, 24289, 24300, 24283, 24295]
        }
      },
      {
        id: 67258,
        karma: 4998,
        random_results: {
          output: 5,
          quantity_min: 2,
          quantity_max: 4,
          items: [24341, 24350, 24276, 24356, 24288, 24299, 24282, 24294]
        }
      },
      {
        id: 67245,
        karma: 4998,
        random_results: {
          output: 5,
          quantity_min: 2,
          quantity_max: 4,
          items: [24345, 24349, 24275, 24355, 24287, 24363, 24281, 24293]
        }
      },
      {
        id: 67256,
        karma: 4998,
        random_results: {
          output: 5,
          quantity_min: 2,
          quantity_max: 4,
          items: [24343, 24347, 24274, 24354, 24286, 24298, 24280, 24292]
        }
      },
      {
        id: 67255,
        karma: 4998,
        random_results: {
          output: 5,
          quantity_min: 3,
          quantity_max: 5,
          items: [24344, 24348, 24273, 24353, 24285, 24297, 24279, 24291]
        }
      },
      {
        id: 67254,
        karma: 4998,
        random_results: {
          output: 5,
          quantity_min: 3,
          quantity_max: 5,
          items: [24342, 24346, 24272, 24352, 24284, 24296, 24278, 24290]
        }
      },
      // Tropy bags
      {
        id: 67267,
        karma: 4998,
        random_results: {
          output: 1,
          quantity_min: 1,
          quantity_max: 1,
          items: [24305, 24340, 24330, 24325, 24320, 24315, 24310, 24335]
        }
      },
      {
        id: 67268,
        karma: 4998,
        random_results: {
          output: 3,
          quantity_min: 1,
          quantity_max: 1,
          items: [24304, 24309, 24314, 24319, 24324, 24329, 24334, 24339]
        }
      },
      {
        id: 67269,
        karma: 4998,
        random_results: {
          output: 3,
          quantity_min: 1,
          quantity_max: 1,
          items: [24303, 24308, 24313, 24318, 24323, 24328, 24333, 24338]
        }
      },
      // Sigil bags
      {
        id: 67265,
        karma: 4998,
        random_results: {
          output: 3,
          quantity_min: 1,
          quantity_max: 1,
          items: [
            24546,
            24550,
            24553,
            24556,
            24559,
            24563,
            24566,
            24569,
            24574,
            24577,
            24579,
            24581,
            24586,
            24588,
            24590,
            24593,
            24596,
            24598,
            24602,
            24604,
            24606,
            24608,
            24611,
            24614,
            24617,
            24620,
            24623,
            24626,
            24629,
            24633,
            24635,
            24638,
            24641,
            24644,
            24647,
            24650,
            24653,
            24656,
            24659,
            24662,
            24665,
            24668,
            24671,
            24674,
            24677,
            24680,
            24683,
            24808,
            24864,
            24867,
            36054,
            68434
          ]
        }
      },
      {
        id: 67266,
        karma: 4998,
        random_results: {
          output: 3,
          quantity_min: 1,
          quantity_max: 1,
          items: [
            24547,
            24549,
            24552,
            24557,
            24558,
            24564,
            24565,
            24568,
            24573,
            24576,
            24585,
            24587,
            24595,
            24603,
            24610,
            24613,
            24616,
            24619,
            24622,
            24625,
            24628,
            24631,
            24634,
            24637,
            24640,
            24643,
            24646,
            24649,
            24652,
            24657,
            24660,
            24663,
            24666,
            24669,
            24670,
            24673,
            24676,
            24679,
            24682,
            24807,
            24861,
            24862,
            24863,
            24866,
            36055,
            68439
          ]
        }
      },
      // Rune bags
      {
        id: 67263,
        karma: 4998,
        random_results: {
          output: 3,
          quantity_min: 1,
          quantity_max: 1,
          items: [
            24686,
            24690,
            24692,
            24695,
            24698,
            24701,
            24704,
            24707,
            24710,
            24713,
            24716,
            24719,
            24722,
            24725,
            24728,
            24731,
            24734,
            24737,
            24740,
            24743,
            24746,
            24749,
            24752,
            24755,
            24758,
            24761,
            24764,
            24767,
            24770,
            24775,
            24778,
            24781,
            24784,
            24787,
            24790,
            24793,
            24796,
            24799,
            24802,
            24805,
            24811,
            24814,
            24817,
            24820,
            24823,
            24826,
            24829,
            24832,
            24835,
            24838,
            38205,
            68435
          ]
        }
      },
      {
        id: 67264,
        karma: 4998,
        random_results: {
          output: 3,
          quantity_min: 1,
          quantity_max: 1,
          items: [
            24685,
            24689,
            24693,
            24694,
            24697,
            24700,
            24705,
            24706,
            24709,
            24712,
            24715,
            24718,
            24721,
            24724,
            24727,
            24730,
            24733,
            24736,
            24739,
            24742,
            24745,
            24748,
            24751,
            24754,
            24759,
            24760,
            24763,
            24766,
            24769,
            24774,
            24777,
            24780,
            24783,
            24786,
            24789,
            24792,
            24795,
            24798,
            24801,
            24804,
            24810,
            24813,
            24816,
            24819,
            24822,
            24825,
            24828,
            24831,
            24834,
            24837,
            38204,
            68438
          ]
        }
      },
      // Bag of scrap
      {
        id: 67246,
        karma: 4998,
        random_results: {
          output: 3,
          quantity_min: 1,
          quantity_max: 1,
          items: [
            21653,
            21654,
            21655,
            21656,
            21657,
            21658,
            21659,
            21660,
            21661,
            21662,
            21663,
            21664,
            21665,
            21666,
            21667,
            21668,
            21669,
            21670,
            21671,
            21672,
            21673,
            21674,
            21675,
            21678,
            21679,
            21680,
            21681,
            21682,
            21683,
            21684,
            21685,
            21686,
            21687,
            21688,
            21689,
            21690,
            21691,
            21692,
            21693,
            21694,
            21695,
            22325,
            22326,
            22327,
            22328,
            22329,
            22330,
            22331,
            41733,
            41734,
            41735,
            41736,
            41737,
            43552,
            43553,
            43554,
            43555,
            43556,
            45039,
            45040,
            45041,
            45042,
            45043
          ]
        }
      },
      // Bag of jewels
      {
        id: 9262,
        karma: 4998,
        random_results: {
          output: 3,
          quantity_min: 1,
          quantity_max: 1,
          items: [
            24473,
            24474,
            24475,
            24476,
            24508,
            24509,
            24510,
            24511,
            24512,
            24513,
            24514,
            24515,
            24516,
            24517,
            24518,
            24519,
            24520,
            24521,
            24522,
            24523,
            24524,
            24531,
            24532,
            24533,
            24891,
            24892,
            24893,
            24894,
            24895
          ]
        }
      }
    ]
  },
  {
    name: 'Jewelry Boxes',
    description: 'Buy the jewelry boxes from any karma vendor in Orr and open them.<br>Use all the karma consumables you get out of them and sell the rest.',
    items: [
      {
        id: 39088,
        karma: 2475,
        vendor: 'Agent Crandle',
        waypoint: '[&BO4CAAA=]',
        results: [
          {
            id: 39223,
            quantity: 2.981,
            buy: {price: 50},
            sell: {price: 50}
          },
          // Unidentifiable objects
          {id: 35750, quantity: 0.001},
          {id: 35748, quantity: 0.001},
          {id: 35749, quantity: 0.001},
          {id: 35747, quantity: 0.001},
          {id: 24335, quantity: 0.002},
          {id: 24305, quantity: 0.004},
          {id: 24340, quantity: 0.004},
          {id: 24330, quantity: 0.004},
          {id: 24325, quantity: 0.004},
          {id: 24320, quantity: 0.004},
          {id: 24315, quantity: 0.004},
          {id: 24310, quantity: 0.004}
        ]
      }
    ]
  },
  {
    name: 'Mystic clovers',
    description: 'Buy obsidian shards, craft mystic clovers and hope for random materials',
    items: [
      // Mystic clovers
      {
        id: 19675,
        karma: 2100,
        vendor: 'Tactician Deathstrider',
        waypoint: '[&BPoCAAA=]',
        results: [
          // t6
          {chance: 0.0485, quantity: 3, id: 24295},
          {chance: 0.0527, quantity: 3, id: 24358},
          {chance: 0.0591, quantity: 3, id: 24351},
          {chance: 0.0457, quantity: 3, id: 24277},
          {chance: 0.0522, quantity: 3, id: 24357},
          {chance: 0.0477, quantity: 3, id: 24289},
          {chance: 0.0524, quantity: 3, id: 24300},
          {chance: 0.0481, quantity: 3, id: 24283},
          // t6 common
          {chance: 0.0494, quantity: 2, id: 19746},
          {chance: 0.0392, quantity: 2, id: 19685},
          {chance: 0.0547, quantity: 2, id: 19737},
          {chance: 0.0456, quantity: 2, id: 19712},
          // ectoplasm
          {chance: 0.0114, quantity: 2, id: 19721},
          // Lodestones
          {chance: 0.004, quantity: 1, id: 24305},
          {chance: 0.004, quantity: 1, id: 24340},
          {chance: 0.004, quantity: 1, id: 24330},
          {chance: 0.004, quantity: 1, id: 24325},
          {chance: 0.004, quantity: 1, id: 24320},
          {chance: 0.004, quantity: 1, id: 24315},
          {chance: 0.004, quantity: 1, id: 24310},
          // essence / coin / treasure
          {chance: 0.0104, quantity: 1, id: 24335},
          {chance: 0.0109, quantity: 5, id: 19976},
          {chance: 0.0151, quantity: 1, id: 9267}
        ],
        crafting: {
          spiritshards: 0.6,
          items: [{id: 19976, quantity: 1}, {id: 19721, quantity: 1}]
        }
      }
    ]
  }
]
