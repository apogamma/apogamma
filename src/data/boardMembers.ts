import SabrinaSheridanPath from '/src/assets/boardmembers/SabrinaSheridan.png';
import MarieCajouxPath from '/src/assets/boardmembers/MarieCajoux.png';
import KiraPawletkoPath from '/src/assets/boardmembers/KiraPawletko.png';
import SarahMcMurryPath from '/src/assets/boardmembers/SarahMcMurry.png';
import KaitlynLimPath from '/src/assets/boardmembers/KaitlynLim.png';

export interface BoardMember {
  name: string;
  position: string;
  email: string;
  imageUrl: string;
  bio?: string;
}

export interface BoardCategory {
  title: string;
  members: BoardMember[];
}

const convertGoogleDriveUrl = (url: string): string => {
  if (url.includes('drive.google.com/open')) {
    const idMatch = url.match(/id=([^&]+)/);
    if (idMatch && idMatch[1]) {
      return `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w1000`;
    }
  } else if (url.includes('drive.google.com/file/d/')) {
    const idMatch = url.match(/d\/([^/]+)/);
    if (idMatch && idMatch[1]) {
      return `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w1000`;
    }
  }
  return url;
};

const createPlaceholder = (initials: string) => {
  return `https://placehold.co/300x375/e6f2ff/0056b3?text=${initials}`;
};

export const boardCategories: BoardCategory[] = [
  {
    title: "Executive",
    members: [
      {
        name: 'Zoe Cantor',
        position: 'President',
        email: 'president@apogamma.org',
        imageUrl: convertGoogleDriveUrl('https://drive.google.com/open?id=12DspBiF_Wy8XBJdTeHu59RHyVmYA0WQP'),
        bio: "Hi, I'm Zoe! I'm a junior studying Industrial and Labor Relations, originally from Bethesda, Maryland. Outside of APO, I am involved in SEGC, Creme de Cornell, and work as an ILR Peer Mentor and at Catherwood Library. I love playing board games, baking, and iced chai!"
      },
      {
        name: 'Erin Boell',
        position: 'Sergeant at Arms',
        email: 'ebb84@cornell.edu',
        imageUrl: convertGoogleDriveUrl('https://drive.google.com/open?id=1B2EnNAMGhpZJCQcNtnq5_IjSfg3ol015'),
        bio: "Hi, I'm Erin! I am a junior studying Public Policy. I am from Philly, and I love going to concerts, watching rom-coms, and spending time with my friends. I host an earring making service event in APO!"
      }
    ]
  },
  {
    title: "Communications",
    members: [
      {
        name: 'Ella Adams',
        position: 'VP Comm',
        email: 'vpcomm@apogamma.org',
        imageUrl: convertGoogleDriveUrl('https://drive.google.com/open?id=17FQSEHf9REsqHaR3260_aA64WAZGP4cr'),
        bio: "Hi I'm Ella and I'm a sophomore Biology & Society major in CALS! I'm from San Diego, CA and I love the beach, chill movie nights, sweet treats, coffee, and sunshine. Outside of APO, I play club field hockey at Cornell."
      },
      {
        name: 'Kaitlyn Lim',
        position: 'Public Relations Chair',
        email: 'publicrelations@apogamma.org',
        imageUrl: KaitlynLimPath,
        bio: "Hi my name is Kaitlyn Lim, and I'm the Director of Public Relations this year! I'm from Cupertino, CA and I'm currently a junior in ILR ^^ Outside of APO I am also involved in Project Hope and CSA! I really like traveling and listening to music 🫶 Feel free to reach out if you have any questions about APO ^^"
      },
      {
        name: 'Kaylee Morales',
        position: 'Historian',
        email: 'historian@apogamma.org',
        imageUrl: convertGoogleDriveUrl('https://drive.google.com/open?id=1tbOZBtPTN5aUQxrcyIMarAVxqwZJuNUt'),
        bio: "Hi, I'm Kaylee"
      },
      {
        name: 'Jing Zhang',
        position: 'Webmaster',
        email: 'webmaster@apogamma.org',
        imageUrl: createPlaceholder('JZ'),
        bio: "Hey, I'm Jing!"
      },
      {
        name: 'Leyla Rivera',
        position: 'External Relations Chair',
        email: 'externalrelations@apogamma.org',
        imageUrl: createPlaceholder('LR')
      }
    ]
  },
  {
    title: "Fellowship",
    members: [
      {
        name: 'Madison Rosario',
        position: 'VP Fellowship',
        email: 'vpfellowship@apogamma.org',
        imageUrl: convertGoogleDriveUrl('https://drive.google.com/open?id=1YA98Dxhyv43uw6CcgGfD1BVl2q5Ib9i9'),
        bio: "Hi, my name is Madison Rosario, and I am from Richmond, Virginia. I am an animal science major. I love cooking, hiking, and traveling. Outside of APO I am involved in the Western Equestrian Team, the Pre-Vet Society, and Guiding Eyes for the Blind!"
      },
      {
        name: 'Eli Barrett',
        position: 'Fellowship Assistant',
        email: 'vpfellowship@apogamma.org',
        imageUrl: createPlaceholder('EB')
      }
    ]
  },
  {
    title: "Finance",
    members: [
      {
        name: 'Karina Chakov',
        position: 'Treasurer',
        email: 'treasurer@apogamma.org',
        imageUrl: convertGoogleDriveUrl('https://drive.google.com/open?id=1uSOqjt8qPdlVnizTPKEer7ze9oMh61QV'),
        bio: "Hi, I'm Karina! I'm a Chemical Engineering major from New Jersey, and I like trivia, movies, Legos, snowboarding, board games, pickleball, roller coasters, audiobooks, Mario Kart, and more!"
      },
      {
        name: 'Ivor Mills',
        position: 'Fundraising Chair',
        email: 'fundraising@apogamma.org',
        imageUrl: createPlaceholder('IM')
      }
    ]
  },
  {
    title: "Membership",
    members: [
      {
        name: 'Sabrina Sheridan',
        position: 'VP Membership',
        email: 'vpmembership@apogamma.org',
        imageUrl: SabrinaSheridanPath
      },
      {
        name: 'Samantha Frangione',
        position: 'Administrative & Outreach Membership Assistant',
        email: 'aoma@apogamma.org',
        imageUrl: "https://drive.google.com/file/d/1vYKN3mThrr5ps2ettLtIXfJey9hwu6lK/view?usp=sharing",
        bio: "Hi, I'm Sam! I am a sophomore studying Human Development. I'm from New Jersey, and I love movie nights, going to the beach, iced chai, and spending time with my friends!"
      },
      {
        name: 'Matthew Rosenstein',
        position: 'Leadership Development Membership Assistant',
        email: 'ldma@apogamma.org',
        imageUrl: convertGoogleDriveUrl('https://drive.google.com/open?id=17rhNUwcJdhFuWMNSeSs9KSiWF7MBnbuh'),
        bio: "Hi, I'm Matthew! I am from Bethesda, Maryland and am a sophomore studying Industrial and Labor Relations. My favorite show is Abbott Elementary and my favorite soda is Dr. Pepper. In my free time I enjoy hiking, listening to music, and watching sports!"
      },
      {
        name: 'Marie Cajoux',
        position: 'Diversity & Inclusion Chair',
        email: 'diversityandinclusion@apogamma.org',
        imageUrl: MarieCajouxPath
      },
      {
        name: 'Emma Dalla Costa',
        position: 'Diversity & Inclusion Assistant',
        email: 'diversityandinclusion@apogamma.org',
        imageUrl: createPlaceholder('EDC')
      },
      {
        name: 'James Estes',
        position: 'Retention Chair',
        email: 'retention@apogamma.org',
        imageUrl: convertGoogleDriveUrl('https://drive.google.com/open?id=1r9fedvhONJ480Rr2sOzAH_YqTa2ePuvw'),
        bio: "Hi! My name is James Estes and I am a senior from Orange Country, California! My fun facts are that I have a twin brother and I play in a band called \"Crush\" on campus! My major is HBHS and I am pre-medical. I love watching anime and playing volleyball!"
      }
    ]
  },
  {
    title: "Pledge Team",
    members: [
      {
        name: 'Amanda Strocko',
        position: 'Director of Pledging',
        email: 'pledgemaster@apogamma.org',
        imageUrl: convertGoogleDriveUrl('https://drive.google.com/open?id=1tbOZBtPTN5aUQxrcyIMarAVxqwZJuNUt'),
        bio: "Hi! I'm Amanda, and I'm from Elysburg, PA. I'm a freshman majoring in Industrial and Labor Relations. My favorite place to eat in Ithaca is the Ithaca Ale House! I love spending time with friends watching movies and hiking."
      },
      {
        name: 'Zia Quinn',
        position: 'Co-Assistant Pledgemaster: Big/Little',
        email: 'pledgeteam@apogamma.org',
        imageUrl: convertGoogleDriveUrl('https://drive.google.com/open?id=1VzWFmu4X9pL_xMUsC7eWQkOsmXklrlWJ'),
        bio: "Hi I'm Zia! I'm a junior studying HBHS from Westwood, MA. I love running and baking."
      },
      {
        name: 'Vincent Chen',
        position: 'Co-Assistant Pledgemaster: Administrative',
        email: 'pledgeteam@apogamma.org',
        imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1hJdyxMV_b3SU1jFwYZ7eqnOJ3UkKcwOt/view?usp=sharing'),
        bio: "Hi, I'm Vincent!"
      },
      {
        name: 'Andy Chen',
        position: 'Co-Assistant Pledgemaster: PPG',
        email: 'pledgeteam@apogamma.org',
        imageUrl: createPlaceholder('AC'),
        bio: "Hi, I'm Andy!"
      }
    ]
  },
  {
    title: "Service",
    members: [
      {
        name: 'Kira Pawletko',
        position: 'VP Service',
        email: 'vpservice@apogamma.org',
        imageUrl: KiraPawletkoPath
      },
      {
        name: 'Kevin Kim',
        position: 'Service Learning Chair',
        email: 'servicelearningchair@apogamma.org',
        imageUrl: convertGoogleDriveUrl('https://drive.google.com/open?id=1LtM2ZDMLcmHUcRE0ep_yZaLhRVpG2h0S'),
        bio: "Hi, I'm Kevin. I'm a sophomore in the ILR School. I'm from Seoul, South Korea and love reading, volunteering, and working out. My fun fact is that I get stopped by TSA on every trip..."
      },
      {
        name: 'Yan Yu',
        position: 'On-Campus Service Assistant',
        email: 'vpservice@apogamma.org',
        imageUrl: convertGoogleDriveUrl('https://drive.google.com/open?id=1qArJV3LPfzPBTxHRjzW6136T22RD7xve'),
        bio: "Hi everyone! I'm a sophomore majoring in HBHS in the College of Human Ecology and I'm from Center Valley, Pennsylvania. In my free time, I love playing tennis, cooking, and hiking."
      },
      {
        name: 'Benny Sun',
        position: 'Off-Campus Service Assistant',
        email: 'vpservice@apogamma.org',
        imageUrl: createPlaceholder('BS')
      },
      {
        name: 'Allie Pequeno',
        position: 'Service Assistant Administrative',
        email: 'vpservice@apogamma.org',
        imageUrl: 'https://drive.google.com/file/d/1lNeLNNzzx3kv1jVhcyNClR6EF-dB7O8d/view?usp=sharing',
        bio: "Hi, I’m Allie! I am a sophomore majoring in Biological Sciences, and I’m from Chandler, Arizona. For fun, I like to travel, go hiking, listen to music, and try new restaurants. Outside of APO, I am in the Biology Scholars Program, Rho Psi Eta, and P3."
      },
      {
        name: 'Sarah McMurry',
        position: 'Philanthropy Chair',
        email: 'philanthropy@apogamma.org',
        imageUrl: SarahMcMurryPath,
        bio: "I'm Sarah! I'm a junior in A&S studying Biological Sciences and Spanish. I'm from Marietta, GA, and in my free time I love running, reading, and doing pottery."
      },
      {
        name: 'Sara Maslak',
        position: 'Philanthropy Assistant',
        email: 'philanthropy@apogamma.org',
        imageUrl: createPlaceholder('SM')
      }
    ]
  }
];