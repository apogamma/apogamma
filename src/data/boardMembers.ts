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
        imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1t_K5Zq4CB9_yzB6ljqEOce1v0NqIVUAS/view?usp=sharing'),
        bio: "Hi, I’m Zoe! I’m a senior studying Industrial and Labor Relations, originally from Bethesda, Maryland. Outside of APO, I’m involved in SEGC, and I also work as an ILR Peer Mentor and Library Assistant. In my free time, I love playing board games, baking, and enjoying strawberry matcha!"
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
        bio: "Hi I'm Ella and I'm a junior Biology & Society major in CALS! I'm from San Diego, CA and I love the beach, movie nights, sweet treats, coffee, and sunshine. Outside of APO, I play club field hockey and do wasp research 🐝"
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
        imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1h9HT3i7Y0qwL6cO1G_rR-jKMhXodrhv_/view?usp=sharing'),
        bio: "Hi, I'm Kaylee! I’m from New York City, majoring in psychology and minoring in business. My favorite show is Shameless."
      },
      {
        name: 'Jing Zhang',
        position: 'Webmaster',
        email: 'webmaster@apogamma.org',
        imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1jmp5BBBBZBiwfCbwcQIsGacUKxmvbYvl/view?usp=sharing'),
        bio: "Hey, I'm Jing! I'm a junior in Industrial Labor Relations, and I'm from Houston, TX. Outside of APO, I'm involved in CIAS and CSA. I love hanging out with my friends, grabbing food and sweet treats, and vibing to music. I enjoy traveling and exploring new cultures, and have a cat named Aspen! Feel free to ask me anything about APO <3"
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
        position: 'Retreats Assistant',
        email: 'vpfellowship@apogamma.org',
        imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1KrKnwmrEavee99UNyKKi-wG-l0KxN0l7/view?usp=sharing'),
        bio: "Hey y’all! My name is Eli and I am a Sophomore in A&S. I was born in Texas but now I live in North Dakota. I love animals and traveling the world. I am currently studying biology but I don’t know what career path I want to take, so I will se where it takes me."
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
        name: 'Allie Pequeno',
        position: 'Fundraising Chair',
        email: 'fundraising@apogamma.org',
        imageUrl: createPlaceholder('AP')
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
        bio: "Hi, I'm Sam! I am a junior studying Human Development. I'm from New Jersey, I love movie nights, going to the beach, iced chai, and spending time with my friends!"
      },
      {
        name: 'Marie Cajoux',
        position: 'Diversity & Inclusion Chair',
        email: 'diversityandinclusion@apogamma.org',
        imageUrl: MarieCajouxPath
      },
      {
        name: 'Queenie Chen',
        position: 'Diversity & Inclusion Assistant',
        email: 'diversityandinclusion@apogamma.org',
        imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1BN1LC_PkoP42whXZ4MBXae8l1LdiTBYp/view?usp=sharing'),
        bio: "Hi, I'm Queenie! I am a sophomore majoring in biological sciences. In my free time, I like to crochet, play word hunt, and explore new food spots with friends."
      },
      {
        name: 'Matthew Rosenstein',
        position: 'Retention Chair',
        email: 'retention@apogamma.org',
        imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1KwBsRxhEvv8CgD7a2_1ppvEiTb2F4Hou/view?usp=sharing'),
        bio: "Hi, I’m Matthew! I’m from Bethesda, Maryland and am an Industrial and Labor Relations major. In my free time I enjoy going outside, watching sports, and listening to music."
      },  
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
        bio: "Hey everyone! I'm Vincent, and I am currently a sophomore majoring in Biological Sciences. I am also from Brooklyn, NY. A fun fact is that I got 3 times the amount of points on my road test than the maximum score needed to pass :("
      },
      {
        name: 'Andy Chen',
        position: 'Co-Assistant Pledgemaster: PPG',
        email: 'pledgeteam@apogamma.org',
        imageUrl: convertGoogleDriveUrl('https://drive.google.com/file/d/1WIInir0EcugPWAobVo0x7ojobdxDcCI6/view?usp=sharing'),
        bio: "Hello, my name is Andy and I am currently a Junior studying biological sciences in CAS. I am from NYC and I’m probably the best driver you know. I’m also a big fan of Studio Ghibli movies!"
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
        name: 'Ro McAteer',
        position: 'Service Learning Chair',
        email: 'servicelearningchair@apogamma.org',
        imageUrl: createPlaceholder('RM')
      },
      {
        name: 'Yan Yu',
        position: 'Off-Campus Service Assistant',
        email: 'vpservice@apogamma.org',
        imageUrl: convertGoogleDriveUrl('https://drive.google.com/open?id=1qArJV3LPfzPBTxHRjzW6136T22RD7xve'),
        bio: "Hi everyone! I'm a sophomore majoring in HBHS in the College of Human Ecology and I'm from Center Valley, Pennsylvania. In my free time, I love playing tennis, cooking, and hiking."
      },
      {
        name: 'Madeline Mezynski',
        position: 'On-Campus Service Assistant',
        email: 'vpservice@apogamma.org',
        imageUrl: createPlaceholder('MM')
      },
      {
        name: 'Nicolas Alexander',
        position: 'Service Assistant Administrative',
        email: 'vpservice@apogamma.org',
        imageUrl: createPlaceholder('NA')
      },
      {
        name: 'Sarah McMurry',
        position: 'Philanthropy Chair',
        email: 'philanthropy@apogamma.org',
        imageUrl: SarahMcMurryPath,
        bio: "I'm Sarah! I'm a junior in A&S studying Biological Sciences and Spanish. I'm from Marietta, GA, and in my free time I love running, reading, and doing pottery."
      },
      {
        name: 'Meadow Barr',
        position: 'Philanthropy Assistant',
        email: 'philanthropy@apogamma.org',
        imageUrl: createPlaceholder('MB')
      }
    ]
  }
];