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
    }
  ]
};