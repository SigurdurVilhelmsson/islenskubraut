import { Category } from '../types';

export const stadir: Category = {
  id: 'stadir',
  name: 'Staðir og byggingar',
  icon: '🏠',
  description: 'Orðaforði um staði — tegundir bygginga og hvað maður gerir þar',
  color: '#C1121F',
  subCategories: [
    {
      name: 'Tegund',
      options: [
        'hús',
        'íbúð',
        'skóli',
        'sjúkrahús',
        'búð/verslun',
        'veitingastaður',
        'safn',
        'kirkja',
        'sundlaug',
        'leikvöllur',
      ],
    },
    {
      name: 'Staðsetning',
      options: ['í bænum/borginni', 'í úthverfi', 'á landi/sveitinni', 'við sjóinn', 'í fjöllunum'],
    },
    {
      name: 'Stærð',
      options: ['lítill/lítið', 'meðalstór/meðalstórt', 'stór/stórt'],
    },
    {
      name: 'Hvað gerir maður þar',
      options: ['borðar', 'verslar', 'syndir', 'lærir', 'vinnur', 'sefur', 'leikur sér'],
    },
  ],
  sentenceFrames: [
    {
      level: 'A1',
      frames: [
        'Þetta er ___.',
        'Maður ___ þar.',
      ],
    },
    {
      level: 'A2',
      frames: [
        'Þetta er ___ sem er ___.',
        'Maður fer þangað til að ___.',
      ],
    },
    {
      level: 'B1',
      frames: [
        'Þetta er ___ sem er staðsett ___.',
        'Fólk fer þangað til að ___ og ___.',
      ],
    },
  ],
};
