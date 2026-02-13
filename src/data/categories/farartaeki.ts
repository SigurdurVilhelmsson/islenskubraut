import { Category } from '../types';

export const farartaeki: Category = {
  id: 'farartaeki',
  name: 'Farartæki',
  icon: '🚗',
  description: 'Orðaforði um farartæki — á landi, sjó og í lofti',
  color: '#264653',
  subCategories: [
    {
      name: 'Tegund',
      options: ['bíll', 'rúta', 'hjól/reiðhjól', 'mótorhjól', 'lest', 'flugvél', 'skip/bátur', 'sleði', 'hlaupahjól'],
    },
    {
      name: 'Hvar fer það',
      options: ['á landi', 'á sjó/vatni', 'í lofti', 'á snjó'],
    },
    {
      name: 'Stærð',
      options: ['lítið', 'meðalstórt', 'stórt', 'risastórt'],
    },
    {
      name: 'Eiginleikar',
      options: ['hefur hjól', 'hefur ekki hjól', 'með vél', 'án vélar', 'hraðvirkt', 'hægvirkt'],
    },
    {
      name: 'Hvenær notað',
      options: ['á veturna', 'á sumrin', 'allt árið', 'í sérstökum tilfellum'],
    },
    {
      name: 'Fjöldi farþega',
      options: ['einn', 'fáir', 'margir'],
    },
  ],
  sentenceFrames: [
    {
      level: 'A1',
      frames: [
        'Þetta er ___.',
        'Það fer ___.',
        'Það er ___.',
      ],
    },
    {
      level: 'A2',
      frames: [
        'Þetta er ___ sem fer ___.',
        'Það hefur ___ og er ___.',
      ],
    },
    {
      level: 'B1',
      frames: [
        'Þetta farartæki er ___ sem er notað til að ___.',
        'Það getur flutt ___ og fer ___.',
      ],
    },
  ],
};
