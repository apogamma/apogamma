export interface GazetteIssue {
  id: string;
  title: string;
  period: string;
  year: number;
  semester: 'Spring' | 'Fall';
  url: string;
  coverImage?: string;
}

export const gammaGazettes: GazetteIssue[] = [
  {
    id: 'spring-2023',
    title: 'Spring 2023 Gamma Gazette',
    period: 'Spring 2023',
    year: 2023,
    semester: 'Spring',
    url: 'https://drive.google.com/file/d/12QaKcqojQkKzabJtcnT3ZKu9nUdaxzDg/view?usp=sharing',
    coverImage: '/api/placeholder/300/400'
  },
  {
    id: 'fall-2022',
    title: 'Fall 2022 Gamma Gazette',
    period: 'Fall 2022',
    year: 2022,
    semester: 'Fall',
    url: 'https://drive.google.com/file/d/1GK7OrYJSdmH8R3Wq8KTpubqeWp2IQ_Eu/view',
    coverImage: '/api/placeholder/300/400'
  },
  {
    id: 'spring-2022',
    title: 'Spring 2022 Gamma Gazette',
    period: 'Spring 2022',
    year: 2022,
    semester: 'Spring',
    url: 'https://drive.google.com/file/d/1dki-Cs91HCmVSTGS121zQyvTCHJIaygL/view',
    coverImage: '/api/placeholder/300/400'
  },
  {
    id: 'spring-2020',
    title: 'Spring 2020 Gamma Gazette',
    period: 'Spring 2020',
    year: 2020,
    semester: 'Spring',
    url: 'https://drive.google.com/file/d/1fqdz-qlrpi2VEnoL-NOjtanwdL0HVt3h/view',
    coverImage: '/api/placeholder/300/400'
  },
  {
    id: 'fall-2019',
    title: 'Fall 2019 Gamma Gazette',
    period: 'Fall 2019',
    year: 2019,
    semester: 'Fall',
    url: 'https://drive.google.com/file/d/1slbzDdnwXr86etDmhbG3j5UkKwFuZaYe/view',
    coverImage: '/api/placeholder/300/400'
  },
  {
    id: 'spring-2019',
    title: 'Spring 2019 Gamma Gazette',
    period: 'Spring 2019',
    year: 2019,
    semester: 'Spring',
    url: 'https://drive.google.com/file/d/19K9jiYtqopTzmFylcAdEbgM-f076O2qO/view',
    coverImage: '/api/placeholder/300/400'
  },
  {
    id: 'fall-2017',
    title: 'Fall 2017 Gamma Gazette',
    period: 'Fall 2017',
    year: 2017,
    semester: 'Fall',
    url: 'https://drive.google.com/file/d/0B0Yxeeeo1nYrZ203dm02VEhncFR4b0xMaVREdjhMZFdOam9n/view?resourcekey=0-ycg76bgDb2etrbeYO5M1Tg',
    coverImage: '/api/placeholder/300/400'
  }
];

// Helper function to get all available years 
export const getGazetteYears = (): number[] => {
  const years = gammaGazettes.map(gazette => gazette.year);
  return [...new Set(years)].sort((a, b) => b - a); // Descending order
};

// Helper function to filter gazettes by year
export const getGazettesByYear = (year: number): GazetteIssue[] => {
  return gammaGazettes.filter(gazette => gazette.year === year);
};

// Get the most recent Gazette
export const getMostRecentGazette = (): GazetteIssue => {
  return gammaGazettes[0]; // Since array is already sorted by date
};

// Get total number of available Gazettes
export const getTotalGazettes = (): number => {
  return gammaGazettes.length;
};