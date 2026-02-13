import { Category } from '../types';

export const klaednadur: Category = {
  id: 'klaednadur',
  name: 'Föt og klæðnaður',
  icon: '👕',
  description: 'Orðaforði um föt — tegundir, litir, efni og hvenær þau eru notuð',
  color: '#F4A261',
  subCategories: [
    {
      name: 'Tegund',
      options: [
        'bolur/stuttermabolur',
        'peysa',
        'skyrta',
        'buxur',
        'pilsið/pils',
        'jakki',
        'úlpa',
        'sokkar',
        'skór',
        'húfa',
        'hanskar',
        'trefill',
      ],
    },
    {
      name: 'Litur',
      options: [
        'rauður/rautt',
        'blár/blátt',
        'grænn/grænt',
        'gulur/gult',
        'svartur/svart',
        'hvítur/hvítt',
        'bleikur/bleikt',
        'brúnn/brúnt',
      ],
    },
    {
      name: 'Efni',
      options: ['úr ull', 'úr bómull', 'úr leðri', 'úr plasti'],
    },
    {
      name: 'Hvenær',
      options: ['á veturna', 'á sumrin', 'allt árið', 'þegar rignir', 'í sérstakar tilefni'],
    },
    {
      name: 'Á hvaða líkamshluta',
      options: [
        'á höfðinu',
        'á efri hluta líkamans',
        'á neðri hluta líkamans',
        'á fótunum',
        'á höndunum',
      ],
    },
  ],
  sentenceFrames: [
    {
      level: 'A1',
      frames: [
        'Þetta er ___.',
        'Það er ___.',
      ],
    },
    {
      level: 'A2',
      frames: [
        'Þetta er ___ sem er ___.',
        'Maður klæðist því ___.',
      ],
    },
    {
      level: 'B1',
      frames: [
        'Þetta er ___ úr ___ sem maður notar ___.',
        'Það er ___ og hentar vel ___.',
      ],
    },
  ],
};
