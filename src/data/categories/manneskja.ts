import { Category } from '../types';

export const manneskja: Category = {
  id: 'manneskja',
  name: 'Manneskja',
  icon: '👤',
  description: 'Orðaforði um fólk — útlit, starf og athafnir',
  color: '#7B2CBF',
  subCategories: [
    {
      name: 'Staða',
      options: ['á lífi', 'látin', 'skálduð persóna'],
    },
    {
      name: 'Frægð',
      options: ['fræg', 'ekki fræg'],
    },
    {
      name: 'Starf/hlutverk',
      options: [
        'leikari',
        'íþróttamaður',
        'söngvari',
        'stjórnmálamaður',
        'nemandi',
        'kennari',
        'læknir',
        'lögreglumaður',
        'kokkur',
        'listamaður',
      ],
    },
    {
      name: 'Aldur',
      options: ['barn', 'unglingur', 'fullorðinn', 'aldraður/öldruð'],
    },
    {
      name: 'Útlit',
      options: [
        'há/hár',
        'lág/lágur',
        'ung/ungur',
        'gömul/gamall',
        'með sítt hár',
        'með stutt hár',
        'sköllótt',
        'með gleraugu',
        'án gleraugna',
        'með skegg',
        'án skeggs',
      ],
    },
    {
      name: 'Athafnir',
      options: ['vinnur', 'lærir', 'syngur', 'spilar', 'ferðast', 'eldar', 'les', 'teiknar'],
    },
  ],
  sentenceFrames: [
    {
      level: 'A1',
      frames: [
        'Þetta er ___.',
        'Hún/Hann er ___.',
        'Hún/Hann ___.',
      ],
    },
    {
      level: 'A2',
      frames: [
        'Þetta er ___ sem er ___.',
        'Hún/Hann er ___ og ___.',
        'Hún/Hann vinnur sem ___.',
      ],
    },
    {
      level: 'B1',
      frames: [
        'Ég held að þetta sé ___ vegna þess að ___.',
        'Þessi manneskja er ___ og er þekkt/óþekkt fyrir ___.',
      ],
    },
  ],
};
