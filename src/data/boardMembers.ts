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
  
  export const boardCategories: BoardCategory[] = [
    {
      title: "Executive",
      members: [
        {
          name: 'Zoe Cantor',
          position: 'President',
          email: 'president@apogamma.org',
          imageUrl: 'src/assets/boardmembers/ZoeCantor.png'
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
          imageUrl: 'https://placehold.co/300x375/e6f2ff/0056b3?text=EA'
        },
        {
          name: 'Kaitlyn Lim',
          position: 'Public Relations Chair',
          email: 'pr@apogamma.org',
          imageUrl: 'https://placehold.co/300x375/e6f2ff/0056b3?text=KL'
        },
        {
          name: 'Amanda Strocko',
          position: 'Historian',
          email: 'historian@apogamma.org',
          imageUrl: 'https://placehold.co/300x375/e6f2ff/0056b3?text=AS'
        },
        {
          name: 'Samantha Cruz',
          position: 'Webmaster',
          email: 'webmaster@apogamma.org',
          imageUrl: 'https://placehold.co/300x375/e6f2ff/0056b3?text=SC',
          bio: 'Hey, I\'m Sam! I\'m a freshman in CAS studying CS. I\'m from South Florida and love volunteering, teaching, making games, playing games, and vibing. Outside of APO, I\'m on Hack4Impact and Circle K!'
        },
        {
          name: 'Leyla Rivera',
          position: 'External Relations Chair',
          email: 'externalrelations@apogamma.org',
          imageUrl: 'https://placehold.co/300x375/e6f2ff/0056b3?text=LR'
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
          imageUrl: 'https://placehold.co/300x375/e6f2ff/0056b3?text=MR'
        },
        {
          name: 'Eli Barrett',
          position: 'Fellowship Assistant',
          email: 'fellowshipassistant@apogamma.org',
          imageUrl: 'https://placehold.co/300x375/e6f2ff/0056b3?text=EB'
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
          imageUrl: 'https://placehold.co/300x375/e6f2ff/0056b3?text=KC'
        },
        {
          name: 'Ivor Mills',
          position: 'Fundraising Chair',
          email: 'fundraising@apogamma.org',
          imageUrl: 'https://placehold.co/300x375/e6f2ff/0056b3?text=IM'
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
          imageUrl: 'src/assets/boardmembers/SabrinaSheridan.png'
        },
        {
          name: 'Samantha Frangione',
          position: 'Administrative & Outreach Membership Assistant',
          email: 'membershipadmin@apogamma.org',
          imageUrl: 'https://placehold.co/300x375/e6f2ff/0056b3?text=SF'
        },
        {
          name: 'Matthew Rosenstein',
          position: 'Leadership Development Membership Assistant',
          email: 'membershipleadership@apogamma.org',
          imageUrl: 'https://placehold.co/300x375/e6f2ff/0056b3?text=MR'
        },
        {
          name: 'Marie Cajoux',
          position: 'Diversity & Inclusion Chair',
          email: 'diversity@apogamma.org',
          imageUrl: 'src/assets/boardmembers/MarieCajoux.png'
        },
        {
          name: 'Emma Dalla Costa',
          position: 'Diversity & Inclusion Assistant',
          email: 'diversityassistant@apogamma.org',
          imageUrl: 'https://placehold.co/300x375/e6f2ff/0056b3?text=EDC'
        },
        {
          name: 'James Estas',
          position: 'Retention Chair',
          email: 'retention@apogamma.org',
          imageUrl: 'src/assets/boardmembers/JamesEstes.png'
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
          imageUrl: 'https://placehold.co/300x375/e6f2ff/0056b3?text=ZQ'
        },
        {
          name: 'Nichole Zhou',
          position: 'Co-Assistant Pledgemaster: Big/Little',
          email: 'apm-biglittle@apogamma.org',
          imageUrl: 'https://placehold.co/300x375/e6f2ff/0056b3?text=NZ'
        },
        {
          name: 'Jinyu Xu',
          position: 'Co-Assistant Pledgemaster: Administrative',
          email: 'apm-admin@apogamma.org',
          imageUrl: 'https://placehold.co/300x375/e6f2ff/0056b3?text=JX'
        },
        {
          name: 'Jeffrey Jiang',
          position: 'Co-Assistant Pledgemaster: PPG',
          email: 'apm-ppg@apogamma.org',
          imageUrl: 'https://placehold.co/300x375/e6f2ff/0056b3?text=JJ'
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
          imageUrl: 'src/assets/boardmembers/KiraPawletko.png'
        },
        {
          name: 'Kevin Kim',
          position: 'Service Learning Chair',
          email: 'servicelearning@apogamma.org',
          imageUrl: 'https://placehold.co/300x375/e6f2ff/0056b3?text=KK'
        },
        {
          name: 'Yan Yu',
          position: 'On-Campus Service Assistant',
          email: 'oncampusservice@apogamma.org',
          imageUrl: 'https://placehold.co/300x375/e6f2ff/0056b3?text=YY'
        },
        {
          name: 'Benny Sun',
          position: 'Off-Campus Service Assistant',
          email: 'offcampusservice@apogamma.org',
          imageUrl: 'https://placehold.co/300x375/e6f2ff/0056b3?text=BS'
        },
        {
          name: 'Allie Pequeno',
          position: 'Service Assistant Administrative',
          email: 'serviceadmin@apogamma.org',
          imageUrl: 'https://placehold.co/300x375/e6f2ff/0056b3?text=AP'
        },
        {
          name: 'Sarah McMurry',
          position: 'Philanthropy Chair',
          email: 'philanthropy@apogamma.org',
          imageUrl: 'src/assets/boardmembers/SarahMcMurry.png'
        },
        {
          name: 'Sara Maslak',
          position: 'Philanthropy Assistant',
          email: 'philanthropyassistant@apogamma.org',
          imageUrl: 'https://placehold.co/300x375/e6f2ff/0056b3?text=SM'
        }
      ]
    }
  ];