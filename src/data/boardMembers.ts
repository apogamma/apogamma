import ZoeCantorPath from '/src/assets/boardmembers/ZoeCantor.png';
import SabrinaSheridanPath from '/src/assets/boardmembers/SabrinaSheridan.png';
import MarieCajouxPath from '/src/assets/boardmembers/MarieCajoux.png';
import JamesEstesPath from '/src/assets/boardmembers/JamesEstes.png';
import KiraPawletkoPath from '/src/assets/boardmembers/KiraPawletko.png';
import SarahMcMurryPath from '/src/assets/boardmembers/SarahMcMurry.png';

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
        imageUrl: ZoeCantorPath
      }
    ]
  },
  {
    title: "Communications",
    members: [
      {
        name: 'Ella Adams',
        position: 'VP Comm',
        email: 'comm@apogamma.org',
        imageUrl: createPlaceholder('EA')
      },
      {
        name: 'Kaitlyn Lim',
        position: 'Public Relations Chair',
        email: 'pr@apogamma.org',
        imageUrl: createPlaceholder('KL')
      },
      {
        name: 'Amanda Strocko',
        position: 'Historian',
        email: 'historian@apogamma.org',
        imageUrl: createPlaceholder('AS')
      },
      {
        name: 'Samantha Cruz',
        position: 'Webmaster',
        email: 'webmaster@apogamma.org',
        imageUrl: createPlaceholder('SC'),
        bio: 'Hey, I\'m Sam! I\'m a freshman in CAS studying CS. I\'m from South Florida and love volunteering, teaching, making games, playing games, and vibing. Outside of APO, I\'m on Hack4Impact and Circle K!'
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
        email: 'fellowship@apogamma.org',
        imageUrl: createPlaceholder('MR')
      },
      {
        name: 'Eli Barrett',
        position: 'Fellowship Assistant',
        email: 'fellowshipassistant@apogamma.org',
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
        imageUrl: createPlaceholder('KC')
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
        email: 'membership@apogamma.org',
        imageUrl: SabrinaSheridanPath
      },
      {
        name: 'Samantha Frangione',
        position: 'Administrative & Outreach Membership Assistant',
        email: 'membershipadmin@apogamma.org',
        imageUrl: createPlaceholder('SF')
      },
      {
        name: 'Matthew Rosenstein',
        position: 'Leadership Development Membership Assistant',
        email: 'membershipleadership@apogamma.org',
        imageUrl: createPlaceholder('MR')
      },
      {
        name: 'Marie Cajoux',
        position: 'Diversity & Inclusion Chair',
        email: 'diversity@apogamma.org',
        imageUrl: MarieCajouxPath
      },
      {
        name: 'Emma Dalla Costa',
        position: 'Diversity & Inclusion Assistant',
        email: 'diversityassistant@apogamma.org',
        imageUrl: createPlaceholder('EDC')
      },
      {
        name: 'James Estas',
        position: 'Retention Chair',
        email: 'retention@apogamma.org',
        imageUrl: JamesEstesPath
      }
    ]
  },
  {
    title: "Pledge Team",
    members: [
      {
        name: 'Zia Quinn',
        position: 'Director of Pledging',
        email: 'pledgemaster@apogamma.org',
        imageUrl: createPlaceholder('ZQ')
      },
      {
        name: 'Nichole Zhou',
        position: 'Co-Assistant Pledgemaster: Big/Little',
        email: 'apm-biglittle@apogamma.org',
        imageUrl: createPlaceholder('NZ')
      },
      {
        name: 'Jinyu Xu',
        position: 'Co-Assistant Pledgemaster: Administrative',
        email: 'apm-admin@apogamma.org',
        imageUrl: createPlaceholder('JX')
      },
      {
        name: 'Jeffrey Jiang',
        position: 'Co-Assistant Pledgemaster: PPG',
        email: 'apm-ppg@apogamma.org',
        imageUrl: createPlaceholder('JJ')
      }
    ]
  },
  {
    title: "Service",
    members: [
      {
        name: 'Kira Pawletko',
        position: 'VP Service',
        email: 'service@apogamma.org',
        imageUrl: KiraPawletkoPath
      },
      {
        name: 'Kevin Kim',
        position: 'Service Learning Chair',
        email: 'servicelearning@apogamma.org',
        imageUrl: createPlaceholder('KK')
      },
      {
        name: 'Yan Yu',
        position: 'On-Campus Service Assistant',
        email: 'oncampusservice@apogamma.org',
        imageUrl: createPlaceholder('YY')
      },
      {
        name: 'Benny Sun',
        position: 'Off-Campus Service Assistant',
        email: 'offcampusservice@apogamma.org',
        imageUrl: createPlaceholder('BS')
      },
      {
        name: 'Allie Pequeno',
        position: 'Service Assistant Administrative',
        email: 'serviceadmin@apogamma.org',
        imageUrl: createPlaceholder('AP')
      },
      {
        name: 'Sarah McMurry',
        position: 'Philanthropy Chair',
        email: 'philanthropy@apogamma.org',
        imageUrl: SarahMcMurryPath
      },
      {
        name: 'Sara Maslak',
        position: 'Philanthropy Assistant',
        email: 'philanthropyassistant@apogamma.org',
        imageUrl: createPlaceholder('SM')
      }
    ]
  }
];