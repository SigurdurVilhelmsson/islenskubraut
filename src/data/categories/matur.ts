import { Category } from '../types';

export const matur: Category = {
  id: 'matur',
  name: 'Matur og drykkur',
  icon: '🍽️',
  description: 'Orðaforði um mat og drykk — tegundir, bragð og undirbúning',
  color: '#E76F51',
  subCategories: [
    {
      name: 'Tegund',
      options: ['ávöxtur', 'grænmeti', 'kjöt', 'fiskur', 'mjólkurvara', 'sælgæti', 'brauð/korn', 'drykkur'],
    },
    {
      name: 'Bragð',
      options: ['sætt', 'salt', 'súrt', 'beiskt', 'kryddað/sterkt'],
    },
    {
      name: 'Áferð/form',
      options: ['mjúkt', 'hart', 'fljótandi', 'þurrt'],
    },
    {
      name: 'Undirbúningur',
      options: ['hrátt', 'soðið', 'steikt', 'bakað', 'heitt', 'kalt', 'frosið'],
    },
    {
      name: 'Hvar',
      options: ['í eldhúsinu', 'í ísskápnum', 'í búðinni', 'á veitingastað'],
    },
    {
      name: 'Hvenær',
      options: ['í morgunmat', 'í hádegismat', 'í kvöldmat', 'sem millimál', 'alltaf/hvenær sem er'],
    },
  ],
  sentenceFrames: [
    {
      level: 'A1',
      frames: [
        'Þetta er ___.',
        'Það er ___.',
        'Maður borðar það ___.',
      ],
    },
    {
      level: 'A2',
      frames: [
        'Þetta er ___ sem er ___.',
        'Maður borðar/drekkur það ___.',
        'Það er ___.',
      ],
    },
    {
      level: 'B1',
      frames: [
        'Þetta er ___ sem bragðast ___.',
        'Það er oft borðað/drukkið ___.',
        'Mér finnst ___.',
      ],
    },
  ],
};
