export interface HumanOfApo {
  name: string;
  date: string;
  gradYear: string;
  position?: string;
  imageUrl: string;
  instagram?: string;
  bio?: string;
  spotlight?: string;
  isGroup?: boolean;
  members?: {
    name: string;
    gradYear: string;
    instagram?: string;
    position?: string;
  }[];
}

const alumniData: HumanOfApo[] = [
  {
    name: "Bethany Angeliu",
    date: "1/31/2021",
    gradYear: "2018", 
    imageUrl: "https://drive.google.com/file/d/1gttUpKMVSFINtvC-pKNX5BrLnHNsnA72/view?usp=sharing",
    bio: "I don't have any one standout memory, but the ones that make me smile the most are the ones related to the Family Wars. Sure, sometimes the fierceness of the competitions got a little bit out of hand (we worked to reel them in over the years!) but the camaraderie and teamwork of the families racing around campus at night was a really special feeling. Family standings are temporary, memories are forever. I find myself thinking a lot about Loaves and Fishes recently. With my class schedule manipulation, most Friday mornings I could walk down East Buffalo and dedicate 2-3 hours to prepping, serving, cleaning or otherwise helping a regular group of Townies. I really enjoyed the manual labor and being of literal service to that community, and the weekly dedication lifted me out of my sheltered bubble on the hill for much-needed perspective. Your time in APO is what you make of it! Meeting the minimum requirements every semester will be a very different experience from intentionally seeking opportunities for experiences with people you like. Life (and college) is too short to do things you don't want to do -- APO is best with intention and joy.",
    spotlight: "Jason Gurtman",
    position: "Alumni"
  },
  {
    name: "Logan Noonan",
    date: "3/6/2021",
    gradYear: "2013",
    imageUrl: "https://drive.google.com/file/d/1aY89knhunRxyCNDUpQzxcSoZ9lI3g4d1/view?usp=sharing",
    bio: "Having littles! Bake Challah, and I would sample the chocolate chips. I get to tell people I'm a frat bro! And I made lifelong friends. Complete as many of the 161 things to do at Cornell as you can. Program Management for Humanitarian and Development Aid.",
    spotlight: "N/A",
    position: "Alumni"
  },
  {
    name: "Michael Cirelli",
    date: "4/25/2021",
    gradYear: "2020",
    imageUrl: "https://drive.google.com/file/d/1dVI897pR_wSfujGhEMvDxXdDQQ91JHEw/view?usp=sharing",
    bio: "No one can capture my time in APO better than Vin Diesel in Fast and Furious 7: \"I don't have friends... I got family.\" I learned so much from people of all majors and favorite CTB orders about how to work effectively with others in meaningful service; and though we rarely drive cars off skyscrapers or yeet giant safes through the streets of Rio together, I'm still close with my Cult lineage, Jenkins Clan, and APO brothers. Being scattered across the country means you'll always have family wherever you go! In the meantime, I'm currently baking, reading, running, working out, and striving to achieve red member status at Chick-Fil-A. Besides that, I'm spending my gap years before medical school as a clinical research coordinator in thoracic surgery; my main research project involves testing a handheld device's ability to detect early stage lung cancer through breathing alone. My advice to you all is to first take a deep breath. Look around, and know that your time at Cornell will be short, but as rewarding as you make it to be. This applies to everyone (even you engineers out there): write little notes about your day. Anything that stands out, that evokes some sort of feeling, that made you laugh or cry or even get angry... sometime down the line you'll want to remember it all and see how far you've come. Also, Thursday evening is chicken tendie night at Okenshield's. Yours in LFS, Michael",
    spotlight: "Jacinto Gomez, jg777@cornell.edu",
    position: "Alumni"
  },
  {
    name: "Hunter Greene",
    date: "3/31/2021",
    gradYear: "2021",
    imageUrl: "https://drive.google.com/file/d/1KemVZfm_2UQwzoLhpMKAvSSNdMZbvupq/view?usp=sharing",
    bio: "While APO has led to so many great memories for me, I've been especially fond of Big/Little weeks because of how exciting they are for both brothers and pledges. I remember being that pledge who overanalyzed every email my big (hi Bhavya love u mom) sent to me during classes. The whole week always leads to such funny interactions, and has always ended with me growing closer to not only my Big/Littles, but also to everyone at events. I initially joined APO solely for service, yet I had no idea that the brotherhood would become such an important community to me. I've learned new ways to meaningfully impact the service areas I'm most passionate about such as poverty and diversity, while additionally I was exposed to many kind people who helped me navigate my college experience. I've even been able to grow professionally due to both technical and teamwork skills I've learned from leadership opportunities. Most recently, I've become passionate about design justice within the technology industry, specifically health technology. ",
    spotlight: "Gogo!",
    position: "Alumni" 
  },
  {
    name: "Max Griner & Zach Crispino",
    date: "2/11/2021",
    gradYear: "2022 & 2023", 
    imageUrl: "https://drive.google.com/file/d/1QDm725p_yMvOGwvM_jOYpLhyFbDKEEIl/view?usp=sharing",
    bio: "Our favorite memory occurred last semester after our finals ended. We gathered together with the previous 2 generations of Jenkins fam heads and some other APO friendos, and celebrated the end of a successful semester (where we somehow managed to fulfill our requirements) with some fun games and great company. We're looking forward to making many more such memories together, and maybe next semester we can get four generations :) Our favorite event is the one and only \"Repurposing Trash\". Nothing better than a good Tuesday night chillin' with the homies, making trash into usable goods, reselling them on the black market, getting insulted by Ellen Park, and most importantly, giving back to the community. We sincerely hope this service event will continue into the future, supporting the service hours of many a committed APO member to come. We came up together through the Jenkins Hierarchy and rose to the very top in only two short semesters (#neverstopgrinding). As co-fam heads, we tried our best to spread a general positivity and homely vibe throughout not just Jenkins, but APO as a whole, with our classic brand of self-deprecation and constant jabbing at our subpar completion of the majority of requirements. Overall, we play off of each other really well, and it's always a great time when we're together. We're excited to continue rising through the APO ranks, and we're ready to become APO's first co-presidents next semester!",
    spotlight: "Ning + Pranesh",
    position: "Former Fam Heads, Jenkins Alumni", 
    isGroup: true,
    members: [
      {
        name: "Max Griner",
        gradYear: "2023"
      },
      {
        name: "Zach Crispino",
        gradYear: "2022"
      }
    ],
  },
  {
    name: "Kendall Lane & David Chen",
    date: "3/5/2021",
    gradYear: "2022",
    imageUrl: "https://drive.google.com/file/d/1DWAD-HjinVSXr8cUngYXNxZOqaF2VS0P/view?usp=sharing",
    bio: "Hi, we're David and Kendall!! We both pledged Spring 2019. We took a lot of the same classes and we were in the same discussion sections. We also were in all of the same clubs but we were too awkward to talk to each other. Finally, a year later, we were sitting on a information session panel for incoming students and David was like \"I recognize you from somewhere\" and we've been friends ever since. Our friendship works because we just get each other. We like the same things. We both find the other funny even though we're both definitely not. Our favorite events in APO are Fingerknitting and Weave on West. We also like participating in the recruitment process and meeting pledges. When we're not doing APO things, we spend a lot of time watching movies/TV and eating. Most weekends you can find us on Kendall's couch.",
    spotlight: "Andrew Mackin Summer Hardy",
    isGroup: true,
    members: [
      {
        name: "Kendall Lane",
        gradYear: "2022",
        instagram: "@kendalllaneee"
      },
      {
        name: "David Chen",
        gradYear: "2022",
        instagram: "@cookiethesavior"
      }
    ],
    position: "Alumni" 
  },
  {
    name: "Jennifer, Gigi & Aprile",
    date: "3/22/2021",
    gradYear: "2022", 
    imageUrl: "https://drive.google.com/file/d/1bLQzYhAqKIgVpHcc9nFI9Bi1EpTsmzGp/view?usp=sharing",
    bio: "I (Jennifer) met Gigi in line at an event for an escape room after o-week. On the first day of school, I met Aprile while waiting for CHEM 2070 lecture to start and Gigi and Aprile met in that lecture too! Our favorite memory is coming to Donlon to watch While You Were Sleeping (our fav k-drama!!) and Gigi and Aprile would scream at the top of their lungs at every dramatic scene, which was like every scene. The three of us just vibe well together, whether it's watching/trying something new or just simply complaining about our classes. Getting attacked by Aprile's spontaneous aggression, hearing Gigi's whining if she gets less than 7 hours of sleep, or teasing Jen for being a southerner is very common and it's a love/hate relationship we all treasure <3 Outside of APO, we watch kdramas, eat a lot, stress about prelims and chill on the slope :)",
    spotlight: "Pranesh Rajendran or Fiwany Wijaya",
    isGroup: true,
    members: [
      {
        name: "Jennifer",
        gradYear: "2022",
        instagram: "@jxnniferhoang"
      },
      {
        name: "Gigi",
        gradYear: "2022",
        instagram: "@gigi.w3"
      },
      {
        name: "Aprile",
        gradYear: "2022",
        instagram: "@aprilecb"
      }
    ],
    position: "Alumni" 
  },
  {
    name: "Cristie Huang & Charu Murugesan",
    date: "4/11/2021",
    gradYear: "2022",
    imageUrl: "https://drive.google.com/file/d/1qsHIuj8OfuWA3t4JrwYBXQgZbnTMrWbn/view?usp=sharing",
    bio: "It was a rainy day during freshman orientation. I (Cristie) was walking to Riley Robb for our Intergroup Dialogue Project session, and I saw a girl slip outside the door because she was wearing flip flops in the rain. I laughed, and I now live with her. In the semester we pledged, we hosted our first event together: a pet rock fellowship! We bought $18 of supplies for 5 people to come, wandered outside various spots around campus to search for the optimal rocks, and listened to a rock-themed playlist (we will rock you, rockin around the christmas tree, etc). Since then, we've hosted other fellowships and speed meetings together, blessing APO with our chaotic energy.",
    spotlight: "rikka and zahyyeh",
    isGroup: true,
    members: [
      {
        name: "Cristie Huang",
        gradYear: "2022"
      },
      {
        name: "Charu Murugesan",
        gradYear: "2022"
      }
    ],
    position: "Former Fam Heads, Alumni" 
  }, 
  {
  name: "Calista Bordador & Amber Briscoe",
  date: "4/24/2025",
  gradYear: "", 
  imageUrl: "https://lh3.googleusercontent.com/d/1LiRJYj2dMBeKv7GYQbGE2S3uJ1LBIUWr",
  bio: "We met in Calculus I in our first fall here at Cornell. I (Calista) was sitting in front of Amber, and we had to work together for our first ever in-class problem set. We found out we were both living in Ganedago and decided to exchange numbers so we could work on problem sets together. Slayyy! Our favorite APO event was attending Spring '23 Formal: 00Service! We both dressed as our favorite characters from Kingsman: The Golden Circle—Amber as Agent Whiskey and Calista as Agent Galahad. On top of sharing common interests (like Marvel and Star Wars), we've supported each other through thick and thin. From the chaos of the Ganedago arsonist to fun times like Slope Day and hockey games, we've grown closer than ever, always making each other laugh when it's needed most.",
  spotlight: "Kaylee Morales, Jason Xiong",
  isGroup: true,
  members: [
    {
      name: "Calista Bordador",
      gradYear: "2025",
      instagram: ""
    },
    {
      name: "Amber Briscoe",
      gradYear: "2025",
      instagram: ""
    }
  ],
  position: "Alumni, President"
}
];

const brothersData: HumanOfApo[] = [
  {
    name: "Matthew Tsao",
    date: "4/14/2025",
    gradYear: "2028",
    imageUrl: "https://drive.google.com/file/d/1-4NneX3SKUQz7CyohHrYZvgDaYFbhpL6/view?usp=sharing", 
    bio: "My favorite APO memory would probably be meeting my fam. Everyone seems very welcoming. Working through service projects and fellowship events have been very enjoyable as well. APO has impacted my life through the continuation of service in new environments. As someone who has a lot of service experience with collaborations with organizations and co-founding a nonprofit, I am glad that I am able to contribute to service causes in college. I want to educate and make a positive impact in the health field. Through my personal experiences with entrepreneurship, research, media, and more fields, I want to learn more about nutrition and how I could close gaps to create health equity in our society. I am passionate about nutrition/health/fitness and also love creating social media content. I enjoy bettering myself, but really like to share my personal experiences with others to assist them in their own personal health journeys. Participated in hobbies like traveling and sports have always been stress-relieving to me. Also learning from my experiences truly make me happy in hopes to contributing to future success.",
    spotlight: "N/A",
    instagram: "@matt_tsa0", 
    position: "Brother"
  },
  {
    name: "Meadow Barr & Leyla Rivera",
    date: "3/23/2025",
    gradYear: "2027",
    imageUrl: "https://drive.google.com/file/d/1aQ5rfYqdjb-MP2Qka6lH9qBt8LtesnVS/view?usp=sharing",
    bio: "We met through a mutual friend! Our favorite memory together is waking up to watch the sunrise and getting Chatty Cathy's! We love going to Prisoner's Express because it is so fun and meaningful to connect with incarcerated people and share our love of journaling with them! Leyla is the pb to Meadow's jelly <333. Outside of APO, we love to go to CTB karaoke, do calc homework on Meadow's floor, or just hang out!",
    spotlight: "",
    isGroup: true,
    members: [
      {
        name: "Meadow Barr",
        gradYear: "2027",
        position: "Brother"
      },
      {
        name: "Leyla Rivera",
        gradYear: "2027",
        position: "External Relations Chair"
      }
    ],
    position: "Brothers" 
  },
  {
    name: "Grace Liu",
    date: "4/14/2025",
    gradYear: "2028",
    imageUrl: "https://drive.google.com/file/d/1BGKT0UGFhnEQ2b6MDUW1j4pPMaQ9_Qyl/view?usp=sharing", 
    bio: "My favorite memory in APO was the late night cookie baking. I had so much fun decorating cookies and bonding with the brothers! In the future, I hope to pursue a career in healthcare. I'm currently hoping to pursue a career in pediatrics or family medicine. Spending time with friends and family makes me happy! It doesn't matter what we do, but quality time is the best :).",
    spotlight: "Claire",
    position: "Brother"
  },
  {
    name: "Julia Fritsch",
    date: "4/20/2025",
    gradYear: "2025",
    imageUrl: "https://drive.google.com/file/d/134tbFioBAEiAAvtxNyMEbu3whWu2Pgnt/view?usp=sharing", 
    bio: "My favorite memory in APO is probably participating in the Art and Feminism Wikipedia Edit-a-thon! It was my first time using Wikipedia as an editor instead of just a reader and it was really exciting to expand stub articles, cite reliable sources, and add new sections to pages! I might actually make a hobby of it. After I graduate, I will be getting my Master's in Library Science with a concentration in Archives Management. I loved working with the special collections in my classes at Cornell, so I want to help preserve books and letters and photographs (and digitize them to make them as accessible as possible). Outside of classes and APO, I spend a lot of my time reading mostly fantasy and speculative fiction. Everyone should get a library card and download Libby—I've borrowed over 300 ebooks and audiobooks for free. I also love video games and typically play Overwatch (which I have been playing since 2016) at least once a day.",
    spotlight: "Calista Bordador",
    position: "Brother"
  },
  {
    name: "Eli Barrett",
    date: "4/20/2025",
    gradYear: "2028",
    imageUrl: "https://drive.google.com/file/d/1sXfs7-ZthQkiNT20w9ta08OqXus3lu0l/view?usp=sharing", 
    bio: "My favorite memory in APO is probably the first formal. It was the first time I really got to know my big and grand big and now I feel very close with them. APO has allowed me to find fellowship in all sorts of places at Cornell. I have so many connections just because everyone here has a drive to help others. In the future I want to do something with Biology. I really love animals and any career I take would hopefully be centered round them. Biology as a whole is an intriguing and powerful field that I hope to be able to utilize to help the creatures of the Earth someday. I am very passionate about animals, as my answer to what I hope to do in the future shows, but beyond that I love immersing myself in cultures and places very different from my own. This often takes the form of extensive traveling. It always makes me happy to spend times with friends especially when I can make them laugh. Hearing someone else laugh as a result of something I did or said to be funny always makes me happy. I also like spending time in with animals.",
    spotlight: "N/A",
    position: "Brother"
  },
  {
    name: "Ivor Mills",
    date: "4/21/2025",
    gradYear: "2027",
    imageUrl: "https://drive.google.com/file/d/1V0QhOZ6IsR-0dSTL5vBz4dmsb3UJiGFO/view?usp=sharing", 
    bio: "My favorite memory in APO is definitely volunteering for the Sophie Fund in the commons! The event was so much fun and I got to work alongside so many wonderful volunteers for such an amazing cause! APO has helped me to find my volunteerism again, as I feel like when I got to college, I had a lot of trouble finding opportunities to volunteer, which was a big part of my identity in high school! I hope to be a professor of organizational behavior/management at an R1 university! After graduating from undergrad, I will hopefully go on to pursue my PhD in a good business school! I am passionate about volunteerism, research, and academics, as well as hanging out with friends and socializing. I think that these activities are really meaningful to me, and help me in guiding my decisions! This is a hard question to answer, but I think that the friends I have made and being able to hang out with them is what makes me happiest. I think that the opportunity to socialize and hang with friends on campus really lets me destress and improve my own mental health!",
    spotlight: "Karina Chakov",
    instagram: "@Ivor0615",
    position: "Brother"
  },
  {
    name: "Madison Rosario",
    date: "10/20/2025",
    gradYear: "2026",
    imageUrl: "https://drive.google.com/file/d/10ENOfkLXTMsDVLnacYO4Ur659BhHjCKo/view?usp=sharing", 
    bio: "I decided to join APO because I really wanted to get back into doing service. I did a lot of volunteering in high school, and I really missed it. I also had a friend in APO who always talked about how amazing the organization is, so I finally decided to rush and join! My favorite memory in APO has to be judging the Sophie Fund Cupcake Contest with my fellow brothers. It was so much fun analyzing all the flavors and learning the meanings behind the cupcakes, as well as seeing everyone’s reactions when trying them. Another key memory for me is getting my Big and later my Littles—I’m very close to my line, and those moments really made APO feel like home. In the future, I hope to become a veterinarian, ideally working with wildlife and doing conservation work to help protect incredible species and the beautiful environment we live in.",
    spotlight: "Eli Barrett",
    position: "Brother"
  }
];

const humansOfApoData = {
  alumni: alumniData,
  brothers: brothersData
};

export default humansOfApoData;