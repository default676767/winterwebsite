window.WINTER_DATA = {
  // Categories shown on the rotating radial dial (top to bottom)
  categories: [
    { id: 'shiny-dex', label: 'Shiny Dex' },
    { id: 'updates',   label: 'Updates' },
    { id: 'all',       label: 'Showcase', default: true },
    { id: 'team',      label: 'Team' },
    { id: 'bounties',  label: 'Bounties' }
  ],

  // Color themes (synced with CSS variables in styles.css)
  themes: [
    {
      id: 'dark',
      label: 'Dark',
      swatch: '#161616',
      bg: 'linear-gradient(135deg, #161616 0%, #161616 100%)'
    },
    {
      id: 'frost',
      label: 'Frost',
      swatch: '#2d4e73',
      bg: 'radial-gradient(circle at 80% 18%, #1b2f45 0%, #0e1824 48%, #070c12 100%)'
    },
    {
      id: 'glacier',
      label: 'Glacier',
      swatch: '#23545e',
      bg: 'radial-gradient(circle at 78% 20%, #143238 0%, #0b1c20 50%, #050d0f 100%)'
    },
    {
      id: 'permafrost',
      label: 'Permafrost',
      swatch: '#31386b',
      bg: 'radial-gradient(circle at 82% 18%, #1d2140 0%, #101226 48%, #070812 100%)'
    },
    {
      id: 'black-ice',
      label: 'Black Ice',
      swatch: '#3c4754',
      bg: 'radial-gradient(circle at 80% 18%, #242b33 0%, #13171c 50%, #090b0e 100%)'
    }
  ],

  // Member Showcases — copy any block below to add a new entry
  showcases: [
    {
      idx: '01',
      member: 'Tien',
      profile: {
        joined: 'June 2026',
        rank: 'Executive',
        favShiny: 'Bidoof',
        outfit: '',
        discord: 'https://discord.gg/P7bAQYxUd',
        discordLabel: '@jhn3'
      },
      cats: ['shiny-dex', 'team'],
      shinies: [
        { name: 'Manectric', dex: 310 },
        { name: 'Mightyena', dex: 262 },
        { name: 'Bidoof', dex: 399, best: true },
        { name: 'Luxio', dex: 404 },
        { name: 'Gastrodon', dex: 423 },
        { name: 'Tyranitar', dex: 248 },
        { name: 'Heatmor', dex: 631 },
        { name: 'Gabite', dex: 444 },
        { name: 'Bibarel', dex: 400 },
        { name: 'Dusclops', dex: 356 },
        { name: 'Golurk', dex: 623 },
        { name: 'Magcargo', dex: 219 },
        { name: 'Wailmer', dex: 320 },
        { name: 'Corphish', dex: 341 },
        { name: 'Octillery', dex: 224 },
        { name: 'Klinklang', dex: 601 },
        { name: 'Walrein', dex: 365 },
        { name: 'Luvdisc', dex: 370 },
        { name: 'Bibarel', dex: 400 },
        { name: 'Scraggy', dex: 559 },
        { name: 'Delibird', dex: 225 },
        { name: 'Pelipper', dex: 279 },
        { name: 'Breloom', dex: 286 },
        { name: 'Marshtomp', dex: 259 },
        { name: 'Krookodile', dex: 553 },
        { name: 'Toxicroak', dex: 454 }
      ]
    },
    {
      idx: '02',
      member: 'Kaito',
      profile: {
        joined: 'Mar 2025',
        rank: 'Officer',
        favShiny: 'Metagross',
        region: 'Unova',
        discord: 'discord.gg/teamwinter',
        discordLabel: '@kaito'
      },
      cats: ['shiny-dex', 'updates', 'team'],
      shinies: [
        { name: 'Metagross', dex: 376 },
        { name: 'Volcarona', dex: 637 },
        { name: 'Hydreigon', dex: 635 },
        { name: 'Chandelure', dex: 609 },
        { name: 'Zoroark', dex: 571 },
        { name: 'Gengar', dex: 94 },
        { name: 'Umbreon', dex: 197 },
        { name: 'Milotic', dex: 350 },
        { name: 'Salamence', dex: 373 },
        { name: 'Haxorus', dex: 612 },
        { name: 'Bisharp', dex: 625 },
        { name: 'Garchomp', dex: 445 },
        { name: 'Gliscor', dex: 472 },
        { name: 'Weavile', dex: 461 },
        { name: 'Rotom', dex: 479 },
        { name: 'Absol', dex: 359 },
        { name: 'Ninetales', dex: 38 },
        { name: 'Flygon', dex: 330 }
      ]
    },
    {
      idx: '03',
      member: 'Sora',
      profile: {
        joined: 'May 2025',
        rank: 'Hunter',
        favShiny: 'Dragonite',
        region: 'Johto / Kanto',
        discord: 'discord.gg/teamwinter',
        discordLabel: '@sora'
      },
      cats: ['shiny-dex', 'bounties', 'team'],
      shinies: [
        { name: 'Dragonite', dex: 149 },
        { name: 'Lapras', dex: 131 },
        { name: 'Altaria', dex: 334 },
        { name: 'Gardevoir', dex: 282 },
        { name: 'Gallade', dex: 475 },
        { name: 'Roserade', dex: 407 },
        { name: 'Togekiss', dex: 468 },
        { name: 'Ampharos', dex: 181 },
        { name: 'Espeon', dex: 196 },
        { name: 'Vaporeon', dex: 134 },
        { name: 'Kingdra', dex: 230 },
        { name: 'Starmie', dex: 121 },
        { name: 'Froslass', dex: 478 },
        { name: 'Mismagius', dex: 429 },
        { name: 'Mienshao', dex: 620 },
        { name: 'Lilligant', dex: 549 }
      ]
    },
    {
      idx: '04',
      member: 'Ren',
      profile: {
        joined: 'Jul 2025',
        rank: 'Hunter',
        favShiny: 'Lucario',
        region: 'Sinnoh',
        discord: 'discord.gg/teamwinter',
        discordLabel: '@ren'
      },
      cats: ['shiny-dex', 'updates', 'bounties', 'team'],
      shinies: [
        { name: 'Charizard', dex: 6 },
        { name: 'Lucario', dex: 448 },
        { name: 'Scizor', dex: 212 },
        { name: 'Spiritomb', dex: 442 },
        { name: 'Electivire', dex: 466 },
        { name: 'Magmortar', dex: 467 },
        { name: 'Dusknoir', dex: 477 },
        { name: 'Aggron', dex: 306 },
        { name: 'Steelix', dex: 208 },
        { name: 'Houndoom', dex: 229 },
        { name: 'Arcanine', dex: 59 },
        { name: 'Nidoking', dex: 34 },
        { name: 'Crobat', dex: 169 },
        { name: 'Reuniclus', dex: 579 },
        { name: 'Escavalier', dex: 589 },
        { name: 'Ferrothorn', dex: 598 },
        { name: 'Darmanitan', dex: 555 },
        { name: 'Conkeldurr', dex: 534 }
      ]
    },
    {
      idx: '06',
      member: 'Yooh',
      profile: {
        joined: 'Nov 10, 2012',
        rank: 'Member',
        favShiny: 'Togepi',
        region: '',
        discord: '',
        discordLabel: ''
      },
      cats: ['shiny-dex', 'team'],
      shinies: [
        { name: 'Togepi', dex: 175, best: true },
        { name: 'Krabby', dex: 98 },
        { name: 'Ditto', dex: 132 },
        { name: 'Caterpie', dex: 10 },
        { name: 'Kingler', dex: 99 },
        { name: 'Politoed', dex: 186 },
        { name: 'Garchomp', dex: 445 },
        { name: 'Metapod', dex: 11 },
        { name: 'Trubbish', dex: 568 },
        { name: 'Beautifly', dex: 267 },
        { name: 'Pelipper', dex: 279 },
        { name: 'Weedle', dex: 13 },
        { name: 'Wailmer', dex: 320 },
        { name: 'Wailord', dex: 321 },
        { name: 'Porygon', dex: 137 },
        { name: 'Golett', dex: 622 },
        { name: 'Pidgeot', dex: 18 },
        { name: 'Budew', dex: 406 },
        { name: 'Basculin', dex: 665 },
        { name: 'Bronzong', dex: 437 },
        { name: 'Parasect', dex: 47 },
        { name: 'Staryu', dex: 120 },
        { name: 'Poochyena', dex: 261 },
        { name: 'Koffing', dex: 109 },
        { name: 'Meowth', dex: 52 },
        { name: 'Abra', dex: 63 },
        { name: 'Bronzong', dex: 437 },
        { name: 'Bronzong', dex: 437 },
        { name: 'Kecleon', dex: 352 },
        { name: 'Oddish', dex: 43 },
        { name: 'Carvanha', dex: 318 },
        { name: 'Whismur', dex: 293 },
        { name: 'Minccino', dex: 572 },
        { name: 'Pidgey', dex: 16 },
        { name: 'Girafarig', dex: 203 },
        { name: 'Bibarel', dex: 400 },
        { name: 'Darumaka', dex: 554 },
        { name: 'Swellow', dex: 277 },
        { name: 'Scraggy', dex: 559 },
        { name: 'Cubchoo', dex: 613 },
        { name: 'Delibird', dex: 225 },
        { name: 'Croagunk', dex: 453 },
        { name: 'Breloom', dex: 286 },
        { name: 'Arbok', dex: 24 },
        { name: 'Pikachu', dex: 25 }
      ]
    },
    {
      idx: '05',
      member: 'Ford',
      profile: {
        joined: '',
        rank: 'Member',
        favShiny: '',
        region: '',
        discord: '',
        discordLabel: ''
      },
      cats: ['shiny-dex', 'team'],
      shinies: [  
        {"name": "Metagross","dex": 376},
        {"name": "Bisharp","dex": 625},
        {"name": "Sceptile","dex": 254},
  {
    "name": "Staryu",
    "dex": 120
  },
  {
    "name": "Smeargle",
    "dex": 235
  },
  {
    "name": "Crawdaunt",
    "dex": 342
  },
  {
    "name": "Hydreigon",
    "dex": 635
  },
  {
    "name": "Darmanitan",
    "dex": 555
  },
  {
    "name": "Krookodile",
    "dex": 553
  },
  {
    "name": "Toxicroak",
    "dex": 454
  },
  {
    "name": "Weavile",
    "dex": 461
  },
  {
    "name": "Mienshao",
    "dex": 620
  },
  {
    "name": "Poliwrath",
    "dex": 62
  },
  {
    "name": "Ninetales",
    "dex": 38
  },
  {
    "name": "Scrafty",
    "dex": 560
  },
  {
    "name": "Banette",
    "dex": 354
  },
  {
    "name": "Gothitelle",
    "dex": 576
  },
  {
    "name": "Weezing",
    "dex": 110
  },
  {
    "name": "Chandelure",
    "dex": 609
  },
  {
    "name": "Whirlipede",
    "dex": 544
  },
  {
    "name": "Scolipede",
    "dex": 545
  },
  {
    "name": "Beautifly",
    "dex": 267
  },
  {
    "name": "Poochyena",
    "dex": 261
  },
  {
    "name": "Poochyena",
    "dex": 261
  },
  {
    "name": "Kricketune",
    "dex": 402
  },
  {
    "name": "Bellossom",
    "dex": 182
  },
  {
    "name": "Steelix",
    "dex": 208
  },
  {
    "name": "Graveler",
    "dex": 75
  },
  {
    "name": "Golem",
    "dex": 76
  },
  {
    "name": "Rapidash",
    "dex": 78
  },
  {
    "name": "Rhyperior",
    "dex": 464
  },
  {
    "name": "Mankey",
    "dex": 56
  },
  {
    "name": "Wingull",
    "dex": 278
  },
  {
    "name": "Tentacool",
    "dex": 72
  },
  {
    "name": "Octillery",
    "dex": 224
  },
  {
    "name": "Slakoth",
    "dex": 287
  },
  {
    "name": "Meowth",
    "dex": 52
  },
  {
    "name": "Magikarp",
    "dex": 129
  },
  {
    "name": "Horsea",
    "dex": 116
  },
  {
    "name": "Gurdurr",
    "dex": 533
  },
  {
    "name": "Xatu",
    "dex": 178
  },
  {
    "name": "Blitzle",
    "dex": 522
  },
  {
    "name": "Voltorb",
    "dex": 100
  },
  {
    "name": "Pansear",
    "dex": 513
  },
  {
    "name": "Ditto",
    "dex": 132
  },
  {
    "name": "Escavalier",
    "dex": 589
  },
  {
    "name": "Accelgor",
    "dex": 617
  },
  {
    "name": "Ludicolo",
    "dex": 272
  },
  {
    "name": "Pikachu",
    "dex": 25
  },
  {
    "name": "Masquerain",
    "dex": 284
  },
  {
    "name": "Vanilluxe",
    "dex": 584
  },

{ "name": "Marill", "dex": 183 },
        { "name": "Smeargle", "dex": 235 }
      ]
    },
    {
      idx: '07',
      member: 'Soaked',
      profile: {
        joined: '',
        rank: 'Member',
        favShiny: '',
        region: '',
        discord: '',
        discordLabel: ''
      },
      cats: ['shiny-dex', 'team'],
      shinies: [
        { name: 'Psyduck', dex: 54 },
        { name: 'Tentacruel', dex: 73 },
        { name: 'Tentacool', dex: 72 },
        { name: 'Camerupt', dex: 323 },
        { name: 'Ponyta', dex: 77 },
        { name: 'Floatzel', dex: 419 },
        { name: 'Gyarados', dex: 130 },
        { name: 'Sneasel', dex: 215 },
        { name: 'Teddiursa', dex: 216 },
        { name: 'Vulpix', dex: 37 },
        { name: 'Houndour', dex: 228 },
        { name: 'Luxio', dex: 404 },
        { name: 'Duskull', dex: 355 },
        { name: 'Amoonguss', dex: 591 },
        { name: 'Misdreavus', dex: 200 },
        { name: 'Flaaffy', dex: 180 },
        { name: 'Tauros', dex: 128 },
        { name: 'Parasect', dex: 47 },
        { name: 'Banette', dex: 354 },
        { name: 'Arbok', dex: 24 },
        { name: 'Cubchoo', dex: 613 },
        { name: 'Crustle', dex: 558 },
        { name: 'Slowbro', dex: 80 },
        { name: 'Delibird', dex: 225 },
        { name: 'Hoothoot', dex: 163 },
        { name: 'Donphan', dex: 232 },
        { name: 'Rhydon', dex: 112 },
        { name: 'Cacnea', dex: 331 },
        { name: 'Magby', dex: 240 },
        { name: 'Darumaka', dex: 554 },
        { name: 'Growlithe', dex: 58 },
        { name: 'Seviper', dex: 336 },
        { name: 'Scraggy', dex: 559 },
        { name: 'Girafarig', dex: 203 },
        { name: 'Ariados', dex: 168 },
        { name: 'Jynx', dex: 124 },
        { name: 'Cubchoo', dex: 613 },
        { name: 'Shelmet', dex: 616 },
        { name: 'Stunfisk', dex: 618 },
        { name: 'Magneton', dex: 82 },
        { name: 'Palpitoad', dex: 536 },
        { name: 'Karrablast', dex: 588 },
        { name: 'Spiritomb', dex: 442 },
        { name: 'Pikachu', dex: 25 },
        { name: 'Beedrill', dex: 15 },
        { name: 'Mantine', dex: 226 },
        { name: 'Aron', dex: 304 },
        { name: 'Frillish', dex: 592 },
        { name: 'Hippowdon', dex: 450 },
        { name: 'Onix', dex: 95 },
        { name: 'Rapidash', dex: 78 },
        { name: 'Horsea', dex: 116 },
        { name: 'Duskull', dex: 355 },
        { name: 'Baltoy', dex: 343 }
      ]
    }
  ]
};