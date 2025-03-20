export interface FamilyHead {
  name: string;
  role?: string;
}

export interface Family {
  id: string;
  name: string;
  mascot: string;
  description: string;
  color: string;
  image: string;
  heads: FamilyHead[];
}

export const families: Family[] = [
  {
    id: 'regals',
    name: 'Regals',
    mascot: 'Donkey the Dragon',
    description: 'Crowns on heads and smiles on faces; see us at all of your favorite places; happiness and friendship, Queens and Kings; these are a few of our favorite things! Being part of the Regals Family will be your crowning achievement.',
    color: '#8A2BE2', 
    image: '/images/regals.jpg',
    heads: [
      { name: 'Summer You' },
      { name: 'Anson Li' }
    ]
  },
  {
    id: 'viakana',
    name: 'Viakana',
    mascot: 'Joey the Kangaroo',
    description: 'Viakana welcomes you to the family of hopping joeys! We hold the strongest values of kinship and knowledge, and love to have fun and enjoy each other\'s company.',
    color: '#228B22',
    image: '/images/viakana.jpg',
    heads: [
      { name: 'Kaitlyn Lim' },
      { name: 'Jason Xiong' }
    ]
  },
  {
    id: 'gladiators',
    name: 'Gladiators',
    mascot: 'Leo the Lion',
    description: 'Proud warriors of years past, we excel at leading, serving, and all around having a good time with others! With a special love for boba, popcorn, and crossing swords, we are a tight-knit, social family.',
    color: '#B8860B', 
    image: '/images/gladiators.jpg',
    heads: [
      { name: 'Calista Bordador' },
      { name: 'Julia Fritsch' }
    ]
  },
  {
    id: 'jenkins',
    name: 'Jenkins',
    mascot: 'Manny the Jaguar',
    description: 'We are AΦΩ\'s oldest family, but don\'t let our age fool you. We\'ve got personalities so blinding we have to wear sunglasses at all times. Bound by secrecy, the Jenkins clan can say no more.',
    color: '#000000', 
    image: '/images/jenkins.jpg',
    heads: [
      { name: 'Grace Chan' }
    ]
  }
];