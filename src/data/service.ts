export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: string;
  thumbnail?: string;
  lastModified?: Date; 
}

export interface ServiceEvent {
  id: string;
  title: string;
  description: string;
  category: string;
  date?: string;
  location?: string;
  ongoing?: boolean;
  media?: MediaItem[];
  contactInfo?: string;
}

export interface ServiceSection {
  id: string;
  title: string;
  description: string;
  type: 'gallery' | 'event';
  media: MediaItem[];
}

// Polar Plunge Media Items
const polarPlungeMedia: MediaItem[] = [
  {
    id: 'plungers-photo',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/d/1msyP1_JSxXP46T4emo54xsDxl7Ek6ujA',
    title: 'Plungers',
    lastModified: new Date('2025-03-23') // Today
  },
  {
    id: 'cotton-eye-joe',
    type: 'video',
    url: 'https://drive.google.com/file/d/1zU-LT7VjMTHG8vcMXrZwMTHQx810_FQ6/preview',
    title: 'Cotton Eye Joe Video',
    thumbnail: 'https://lh3.googleusercontent.com/d/1zU-LT7VjMTHG8vcMXrZwMTHQx810_FQ6',
    lastModified: new Date('2025-03-23') // Today
  },
  {
    id: 'brothers-photo',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/d/1wJoQLb_LdS7GF9dDdHriDcztLGMjLs49',
    title: 'Brothers',
    lastModified: new Date('2025-03-23') // Today
  }
];

// Meals on Wheels Placemats
const mealsOnWheelsMedia: MediaItem[] = [
  {
    id: 'mow-photo-1',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/d/1SA54liGQjbkayOg7gEt4YP8JbfudcVCr',
    title: 'Meals on Wheels Placemats 1',
    lastModified: new Date('2025-02-10')
  },
  {
    id: 'mow-photo-2',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/d/1xn2-t5ubPP7xKwxY3leuB-Y67gMB5_KX',
    title: 'Meals on Wheels Placemats 2',
    lastModified: new Date('2025-02-10')
  },
  {
    id: 'mow-photo-3',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/d/1a6fj4KJtkjnEuxNmuUyIaVf3RoyalIMt',
    title: 'Meals on Wheels Placemats 3',
    lastModified: new Date('2025-02-10')
  }
];

// Sophie Fund Cupcake Contest
const sophieFundMedia: MediaItem[] = [
  {
    id: 'sophie-photo-2',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/d/1iI0CqN6TfOmDWZbq9v5SoBONMBJHS_nU',
    title: 'Sophie Fund Cupcake Contest 2',
    lastModified: new Date('2025-03-15')
  },
  {
    id: 'sophie-photo-1',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/d/1ej-GVkm7ahZAi8AQiCvxcbHo2mkG_vAn',
    title: 'Sophie Fund Cupcake Contest 1',
    lastModified: new Date('2025-03-15')
  },
  {
    id: 'sophie-photo-3',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/d/1IjE_2BXhmfxoCH7w9D7tQAXOKg5zLzlf',
    title: 'Sophie Fund Cupcake Contest 3',
    lastModified: new Date('2025-03-15')
  }
];

// Beautification Brigade
const beautificationMedia: MediaItem[] = [
  {
    id: 'beautification-photo-2',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/d/1B4_ty2o1EJPrGRgVJ9jbxOL031523SMe',
    title: 'Beautification Brigade 2',
    lastModified: new Date('2025-03-01')
  },
  {
    id: 'beautification-photo-1',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/d/1SD55FSEJVLyAHkJaDvuBcL_wktar8y3X',
    title: 'Beautification Brigade 1',
    lastModified: new Date('2025-03-01')
  },
  {
    id: 'beautification-photo-3',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/d/1grIJIOPUg4I7I2x5EhbD-BD_XK7L1DmY',
    title: 'Beautification Brigade 3',
    lastModified: new Date('2025-03-01')
  }
];

// Cards for CHAM
const cardsForChamMedia: MediaItem[] = [
  {
    id: 'cham-photo-1',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/d/1jOurdUqG1mlgGhTs8_z2zOOivSufE5nK',
    title: 'Cards for CHAM 1',
    lastModified: new Date('2025-03-20')
  },
  {
    id: 'cham-photo-2',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/d/1bd8KW0-90-TA239UJN7LTeT3w0oym-Xi',
    title: 'Cards for CHAM 2',
    lastModified: new Date('2025-03-20')
  }
];

// Earring Making for Domestic Abuse Victims
const earringMakingMedia: MediaItem[] = [
  {
    id: 'earring-photo-1',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/d/1elLDovNOhkrGhRc22Kxo-gwWtZzcC90t',
    title: 'Earring Making 1',
    lastModified: new Date('2025-03-10')
  },
  {
    id: 'earring-photo-2',
    type: 'image',
    url: 'https://lh3.googleusercontent.com/d/1YJlNMCTR_6U1nGTwocN6zow-FZIOnDw8',
    title: 'Earring Making 2',
    lastModified: new Date('2025-03-10')
  }
];

// Recent Service Gallery - Selection of 3 photos from different events
const recentServiceMedia: MediaItem[] = [
  polarPlungeMedia[0],
  earringMakingMedia[1], 
  mealsOnWheelsMedia[0] 
];

// Service Sections for the main page
export const serviceSections: ServiceSection[] = [
  {
    id: 'recent-service',
    title: 'Recent Service Events',
    description: 'Here are some highlights from our recent service activities on campus and in the greater Ithaca community.',
    type: 'gallery',
    media: recentServiceMedia
  },
  {
    id: 'polar-plunge',
    title: 'Polar Plunge',
    description: 'Brothers participate in the annual Polar Plunge to raise funds for Special Olympics. This event challenges participants to take a dip in the icy waters of Cayuga Lake during winter.',
    type: 'event',
    media: polarPlungeMedia
  },
  {
    id: 'meals-on-wheels',
    title: 'Meals on Wheels Placemats',
    description: 'Brothers create colorful placemats for Meals on Wheels recipients, bringing joy to local seniors who receive meal deliveries.',
    type: 'gallery',
    media: mealsOnWheelsMedia
  },
  {
    id: 'sophie-fund',
    title: 'Sophie Fund Cupcake Contest',
    description: 'APO brothers participate in the Sophie Fund Cupcake Contest, which raises awareness for mental health and suicide prevention in the Ithaca community.',
    type: 'gallery',
    media: sophieFundMedia
  },
  {
    id: 'beautification',
    title: 'Beautification Brigade of Ithaca',
    description: 'Our brothers work with the Beautification Brigade to clean up and enhance public spaces throughout Ithaca, creating a more vibrant and welcoming community.',
    type: 'gallery',
    media: beautificationMedia
  },
  {
    id: 'cards-for-cham',
    title: 'Cards for CHAM',
    description: 'Our brothers write heartfelt letters and cards for children at the Children\'s Hospital at Montefiore (CHAM), bringing comfort and joy to young patients during their hospital stay.',
    type: 'gallery',
    media: cardsForChamMedia
  },
  {
    id: 'earring-making',
    title: 'Earring Making for Domestic Abuse Survivors',
    description: 'APO brothers create handmade earrings for women who have experienced domestic abuse, providing a thoughtful gift and showing support for survivors.',
    type: 'gallery',
    media: earringMakingMedia
  }
];

// Service events (for potential future use and backward compatibility)
export const serviceEvents: ServiceEvent[] = [
  {
    id: 'polar-plunge',
    title: 'Polar Plunge',
    description: 'Brothers participate in the annual Polar Plunge to raise funds for Special Olympics. This event challenges participants to take a dip in the icy waters of Cayuga Lake during winter, showing their commitment to service and community support.',
    category: 'Fundraising',
    date: 'March 23, 2025',
    location: 'Cayuga Lake, Ithaca',
    media: polarPlungeMedia,
    contactInfo: 'Contact our VP of Service at vpservice@apogamma.org'
  },
  {
    id: 'cham',
    title: 'Cards for CHAM',
    description: 'Our brothers write heartfelt letters and cards for children at the Children\'s Hospital at Montefiore (CHAM). This ongoing initiative brings joy and comfort to young patients during their hospital stay and shows them that others are thinking of them during difficult times.',
    category: 'Community Outreach',
    location: 'Cornell University Campus',
    ongoing: true,
    media: cardsForChamMedia,
    contactInfo: 'Email vpservice@apogamma.org to participate'
  },
  {
    id: 'meals-on-wheels',
    title: 'Meals on Wheels Placemats',
    description: 'Brothers create colorful placemats for Meals on Wheels recipients, bringing joy to local seniors who receive meal deliveries.',
    category: 'Community Outreach',
    location: 'Cornell University Campus',
    media: mealsOnWheelsMedia,
    contactInfo: 'Email vpservice@apogamma.org to participate'
  },
  {
    id: 'earring-making',
    title: 'Earring Making for Domestic Abuse Survivors',
    description: 'APO brothers create handmade earrings for women who have experienced domestic abuse, providing a thoughtful gift and showing support for survivors.',
    category: 'Community Support',
    location: 'Cornell University Campus',
    media: earringMakingMedia,
    contactInfo: 'Email vpservice@apogamma.org to participate'
  }
];