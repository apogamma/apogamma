export interface Faq {
    question: string;
    answer: string;
  }
  
  export interface FaqCategory {
    id: string;
    title: string;
    faqs: Faq[];
  }
  
  export const faqCategories: FaqCategory[] = [
    {
      id: 'service',
      title: 'Service',
      faqs: [
        {
          question: 'Can I get credit for service done outside of APO?',
          answer: 'If you participated with at least two other brothers, you can fill out the Outside Service Project application within two weeks to petition for credit. Note that you can only be awarded up to 5 hours of Outside Service Project credit.'
        },
        {
          question: 'How do I get credit for attending a virtual service event?',
          answer: 'Service Team has posted virtual service opportunities with links to different organizations\' pages where you can find information about how to volunteer. Each event has a total of 3 shifts (each worth 1 service hour). If you are interested in volunteering with an org, sign up for the number of shifts you plan to volunteer, and please send some sort of proof to the event chair. All virtual events reoccur biweekly, so if you volunteer for more than 3 hours, you can still get credit for it! Be sure to read the event descriptions, as some events are more of a time commitment than others. We will not be enforcing the 48 hour rule, but please remember, you are still representing Cornell and APO!'
        },
        {
          question: 'I have an idea for a new service project! Can I make it an APO event?',
          answer: 'Yep! Just fill out the project approval form here (also in the VPS signature) and wait for a response before posting to Docubro.'
        },
        {
          question: 'I was 48-hour ruled but I was at the event! What do I do?',
          answer: 'Things happen and sometimes you end up on the wrong list or the chair misses you. Just message your event chair and let service team know. You can also petition Service Team to remove the penalty.'
        },
        {
          question: 'I was sick the day of my service event. Can you remove my 48-Hour Rule penalty?',
          answer: 'Please contact service team and the event chair before your event if you are not able to attend due to illness. If you believe that you have a special circumstance (ie medical emergency or other serious illness) you can petition service team at vpservice.apogamma@gmail.com with an explanation of your situation.'
        },
        {
          question: 'The event I attended ended early. Will I still get full hours?',
          answer: 'No. You will receive credit for the number of hours the event actually lasted.'
        },
        {
          question: 'What do I do if I can\'t make my shift but it\'s too late to take myself off of the list?',
          answer: 'Try to find someone to take your shift. You can do this independently or use the Facebook group Alpha Phi Omega (Gamma) – Shift Swaps. Just make sure that your replacement notes that they are subbing for you when they sign in. If you can\'t attend because you are sick, please contact service team and the event chair before the event so we don\'t 48-hour rule you if you can\'t find a replacement.'
        },
        {
          question: 'What does chairing an event do? How do I chair an event?',
          answer: 'Chairing a virtual service event will get you 0.5 leadership credit for a one-time event or 1 leadership credit/month for a recurring event. There are two ways to chair a virtual service event. 1) Chair an event that is already up (involves collecting proof that the people who signed up volunteered and submitting the attendance). 2) Create a Zoom event on Docubro for one of the virtual service projects we already have up. In this case, you will be in charge of leading the service event and submitting attendance at the end.'
        }
      ]
    },
    {
      id: 'fellowship',
      title: 'Fellowship and Retreats',
      faqs: [
        {
          question: 'Do I need approval beforehand to put a fellowship on the calendar?',
          answer: 'Nope! Feel free to put up any event that you find interesting and is inclusive!'
        },
        {
          question: 'How do I submit attendance for a fellowship?',
          answer: 'You can submit fellowship attendance here.'
        },
        {
          question: 'I want to host a fellowship but don\'t have any ideas, what should I do?',
          answer: 'We are always looking for more people to host fellowships! Check out this list of Fellowships that Need Hosts, or send an email to vpfellowship@apogamma.org saying that you\'re interested in hosting a fellowship!'
        },
        {
          question: 'What is a SSE?',
          answer: 'A SSE, or Spontaneous Social Event, is an impromptu fellowship that\'s spontaneous – hence the name! Whenever five or more brothers or pledges happen to do something together (APO appropriate), you can count it as a SSE, which counts as fellowship credit. Only 2 SSEs per semester count towards your fellowship credit, though. To record a SSE, put it on the calendar sometime (the exact date and time isn\'t important, but make sure you create it in the future so you aren\'t locked out of it). Make the name SSE: [some title here], and add a description as well as the people who were present.'
        }
      ]
    },
    {
      id: 'leadership',
      title: 'Leadership',
      faqs: [
        {
          question: 'How can I get more involved in pledging?',
          answer: 'As a brother, you have many opportunities to continue your involvement in pledging. These include becoming a PPGL, a speed meeting host, and/or a Big. Emails detailing all the information about each of these usually go out at the beginning of each semester. Moreover, all pledging materials will be posted on the Pledge Information page.'
        },
        {
          question: 'How is Leadership Credit awarded for Bigs?',
          answer: 'Every Big must go through training each semester that they plan to take a little. Overall, leadership credit is awarded to Bigs who complete a certain number of requirements. If these are satisfied, Bigs will receive 1 leadership credit for each new Little. This leadership credit will appear automatically on Docubro at the end of the semester.'
        },
        {
          question: 'How is leadership credit awarded for chairing service projects?',
          answer: 'Leadership credits are awarded as follows for service projects: 0.5 credits for chairing a single, one-time service project upon completion of the requirements as listed in the Chapter Standing Rules. 1 credit for chairing a weekly service project over the increment of 28 upon completion of the requirements as listed in the Chapter Standing Rules.'
        },
        {
          question: 'How is leadership credit awarded for hosting fellowships?',
          answer: 'Leadership credit for hosting fellowships is awarded as follows: 1 credit for chairing three individual fellowship activities, 1 credit for chairing a biweekly fellowship for the whole semester, or 1 credit for chairing a weekly fellowship for half of the semester.'
        },
        {
          question: 'What are some ways that I can earn leadership credit?',
          answer: 'There are lots of ways to earn leadership credit! Some of the most common are being a Big, serving as a PPGL, and hosting fellowships. Check out the full list of leadership opportunities in the Gamma Guide.'
        }
      ]
    },
    {
      id: 'reimbursements',
      title: 'Reimbursements',
      faqs: [
        {
          question: 'How do I get a reimbursement?',
          answer: '1) Make a purchase for APO. 2) Take a picture of the receipt and email it to treasurer@apogamma.org. 3) Fill out the Reimbursement Form. 4) Wait patiently for the cash flow. If you do not get a reimbursement within 3 days, send the treasurer an email!'
        }
      ]
    },
    {
      id: 'docubro',
      title: 'Docubro',
      faqs: [
        {
          question: 'If I am at a service event and there is not an official APO sign in sheet, how should I sign in?',
          answer: 'Contact the event coordinator, which can be seen on Docubro.'
        },
        {
          question: 'What is DocuBro?',
          answer: 'DocuBro is a system the chapter uses to keep track of events and membership information. Every member and platform owns an account on this platform.'
        },
        {
          question: 'What is the difference between a locked event and a closed event on DocuBro?',
          answer: 'Locked event: you cannot unsign up for the event (service events usually lock 3 days before the start of the event while fellowships lock at the start of the event). Closed event: you cannot sign up for the event (usually close at start of event).'
        },
        {
          question: 'What should I do if I am sick but have a service event to go to?',
          answer: 'Please do not go to the service event! Your personal health is way more important. Make sure to fill out the sick form in Vice President of Service email signature. If possible, try to find a substitute because organizations do count on us!'
        }
      ]
    },
    {
      id: 'membership',
      title: 'Membership',
      faqs: [
        {
          question: 'What are the types of membership?',
          answer: 'There are four types of membership in APO Gamma: Active, Associate, Excused, and Inactive. Active members are undergraduate or graduate students who have completed a Pledging program and meet all chapter requirements. Associate membership is for one semester only and carries all rights except holding office and taking a new little. Excused membership is for those away from campus who are not required to pay dues or complete requirements. Inactive membership is for those who choose to no longer participate.'
        },
        {
          question: 'How do I become an Associate Member?',
          answer: 'Under extraordinary circumstances, you may petition the Executive Board for Associate Membership by filling out the Associate Membership form before Docubro closes. Most, if not all requests will be granted.'
        },
        {
          question: 'How do I become an Excused Member?',
          answer: 'Members who are unable to be Active Members for a semester due to being away from campus can fill out the Excused Membership form. Excused members don\'t pay dues or complete requirements and can be reinstated to Active Membership upon return to campus.'
        },
        {
          question: 'How do I get Honor Cords?',
          answer: 'You can request an honor cord if you have been active for 3 or more semesters. If you have less than 3 active semesters or you are not going to be active in the semester that you are graduating, you must petition for an honor cord. Note: These 3 active semesters do not include your pledging semester, but do include an Associate semester. Please fill out the honor cords form to petition/request honor cords!'
        }
      ]
    },
    {
      id: 'requirements',
      title: 'Requirements',
      faqs: [
        {
          question: 'What are the membership requirements?',
          answer: 'For Spring 2025, Active members need 15 service hours, 8 fellowships, 2.5 leadership credits, 3 speed meetings, 3 DEIs, 5 Gammas, 4 meetings, 2 special events, 1 election, and $50 dues. Associate members have reduced requirements including 8 service hours, 5 fellowships, and 1 leadership credit. Pledges have their own set of requirements. Please check the Gamma Guide for the complete breakdown of requirements for all membership types.'
        },
        {
          question: 'What are Gammas?',
          answer: 'Gammas can be obtained through filling out the many surveys sent out by EB or by bringing supplies/food to events.'
        },
        {
          question: 'What counts as a Special Event?',
          answer: 'Special Events include Elections and the prior semester\'s initiations and inductions.'
        }
      ]
    }
  ];