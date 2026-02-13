import { Category } from '../types';

export const dyr: Category = {
  id: 'dyr',
  name: 'Dýr',
  icon: '🐾',
  description: 'Orðaforði um dýr — gæludýr, villt dýr og húsdýr',
  color: '#2D6A4F',
  subCategories: [
    {
      name: 'Tegund',
      options: ['gæludýr', 'villt dýr', 'húsdýr (búfénaður)'],
    },
    {
      name: 'Líffræðilegur flokkur',
      options: ['spendýr', 'fugl', 'fiskur', 'skriðdýr', 'froskdýr', 'skordýr'],
    },
    {
      name: 'Búsvæði',
      options: ['á landi', 'í vatni', 'í lofti', 'á landi og í vatni'],
    },
    {
      name: 'Útlit',
      options: [
        'hefur feld',
        'hefur fjaðrir',
        'hefur hreistur',
        'hefur hala',
        'hefur gogg',
        'hefur horn',
        'hefur fjóra fætur',
        'hefur tvo fætur',
        'flýgur',
        'syndir',
        'hleypur',
      ],
    },
    {
      name: 'Stærð',
      options: ['lítið', 'meðalstórt', 'stórt', 'mjög stórt'],
    },
    {
      name: 'Fæða',
      options: ['étur plöntur (grasæta)', 'étur kjöt (kjötæta)', 'étur bæði (alæta)'],
    },
  ],
  sentenceFrames: [
    {
      level: 'A1',
      frames: [
        'Þetta er dýr.',
        'Það er ___.',
        'Það hefur ___.',
      ],
    },
    {
      level: 'A2',
      frames: [
        'Þetta er ___ sem býr ___.',
        'Það hefur ___ og ___.',
        'Það étur ___.',
      ],
    },
    {
      level: 'B1',
      frames: [
        'Ég held að þetta sé ___ vegna þess að ___.',
        'Þetta dýr er ___ og ___.',
        'Það er líkt ___ en ólíkt ___.',
      ],
    },
  ],
};
