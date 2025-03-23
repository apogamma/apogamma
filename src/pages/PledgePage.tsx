import React, { useState, useEffect } from 'react';
import { File, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarMenu from '../components/SidebarMenu';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import '../styles/pledgepage.css';

interface Requirement {
  name: string;
  value: string;
}

interface Faq {
  question: string;
  answer: React.ReactNode;
}

interface OpenFaqs {
  [key: number]: boolean;
}

const PledgePage = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [openFaqs, setOpenFaqs] = useState<OpenFaqs>({});
  const [showFullContent, setShowFullContent] = useState<boolean>(false);

  useEffect(() => {
    checkIfFallSemester();
  }, []);

  const checkIfFallSemester = () => {
    const currentDate = new Date();
    const fallSemesterStart = new Date(2025, 7, 20); 
    
    if (currentDate >= fallSemesterStart) {
      setShowFullContent(true);
    }
  };

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const toggleFaq = (faqId: number): void => {
    setOpenFaqs(prev => ({
      ...prev,
      [faqId]: !prev[faqId]
    }));
  };

  const pledgeRequirements: Requirement[] = [
    { name: 'Service', value: '13 Hours' },
    { name: 'Fellowship', value: '8 Fellowships (with a maximum of 2 SSEs)' },
    { name: 'Leadership', value: '1.5 Leadership Credits' },
    { name: 'Speed Meetings', value: '3 Speed Meetings' },
    { name: 'DEI', value: '2 Credits' },
    { name: 'Gammas', value: '3 Gammas' },
    { name: 'General Meetings', value: '3 GMs' },
    { name: 'Special Events', value: '2 (Induction & Initiation)' },
    { name: 'Elections', value: '1 Election (if you don\'t attend you will be docked service hours!)' }
  ];

  const pledgeFaqs: Faq[] = [
    {
      question: 'I always see these acronyms in my APO emails, what do they mean?',
      answer: (
        <ul className="list-unstyled">
          <li><strong>LFS:</strong> Leadership Friendship Service</li>
          <li><strong>SSE:</strong> Spontaneous Social Event</li>
          <li><strong>AWL:</strong> All Who Look/Listen</li>
          <li><strong>NIB:</strong> Newly Initiated Brother</li>
          <li><strong>GM:</strong> General Meeting</li>
          <li><strong>CAPS:</strong> Chapter Assessment Planning Session</li>
        </ul>
      )
    },
    {
      question: 'What is the difference between inductions and initiations?',
      answer: 'Inductions is when rushees become pledges. Initiations is when pledges become brothers.'
    },
    {
      question: 'Where do I check out APO events?',
      answer: 'Sign up and log into Docubro. Go to Events > View Event Calendar, you will then be able to see all of the events available this semester, color coded according to their categories.'
    },
    {
      question: 'How do I know if I will be inducted or not?',
      answer: 'All who successfully complete the Rush requirements will be inducted into our chapter! You will receive an email with Inductions information from the Pledgemaster.'
    },
    {
      question: 'I am a girl, am I still a brother?',
      answer: 'Yes!'
    },
    {
      question: 'I cannot afford dues. Can I still join?',
      answer: 'Of course! Financial circumstance should not bar you from joining our chapter. Please email the pledgemaster at pledgemaster@apogamma.org for ANY related questions and concerns.'
    },
    {
      question: 'I have other commitments, how much time does APO take?',
      answer: 'On average, you will spend 4-5 hours per week at events during your pledging semester!'
    },
    {
      question: 'I\'m still not sure that I want to join, where can I learn more?',
      answer: 'Email the pledgemaster at pledgemaster@apogamma.org for more information. Or, explore this website! You will find plenty of details about our brothers and events.'
    },
    {
      question: 'What should my Letter of Intent look like?',
      answer: 'Your letter of intent should be about 1 page (300-400 words), 12pt font, double spaced. When writing, think about the following: How did you hear about us? Why are you interested in joining? What will you bring to the brotherhood? What do you hope to gain from this experience? This is NOT a subjective evaluation, just be yourself!'
    }
  ];

  return (
    <div className="overflow-hidden" id="top">
      <PageHeader 
        title="Pledge Information" 
        subtitle="Alpha Phi Omega - Gamma Chapter at Cornell University"
        onToggleMenu={toggleMenu}
      />

      <SidebarMenu 
        isOpen={menuOpen} 
        onClose={toggleMenu} 
        activeLink="pledge"
      />

      <div className="container pb-5">
        {showFullContent ? (
          // Full content for Fall 2025
          <>
            <div className="pledge-intro">
              <p>
                Welcome to the Alpha Phi Omega Gamma Chapter's pledge program! Here you'll find all the information 
                you need to successfully complete your pledging semester and become a brother.
              </p>
            </div>



            <div className="mb-5">
              <h2 className="category-title">Fall 2025 Requirements</h2>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="requirements-card p-4">
                    <p className="text-center mb-4">
                      In order to be successfully initiated, you must earn/attend the following:
                    </p>
                    {pledgeRequirements.map((req, index) => (
                      <div key={index} className="req-item">
                        <span className="req-name">{req.name}:</span>
                        <span className="req-value">{req.value}</span>
                      </div>
                    ))}
                    <p className="text-center mt-4">
                      If you have any questions, please email the Director of Pledging at <a href="mailto:pledgemaster@apogamma.org">pledgemaster@apogamma.org</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="helpful-links">
              <h3 className="text-center">Helpful Links</h3>
              <ul className="helpful-links-list text-center">
                <li>
                  <a href="https://www.apoonline.org/gamma/" target="_blank" rel="noopener noreferrer">
                    <File size={18} className="me-2" />
                    Docubro
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-5">
              <h2 className="category-title">Frequently Asked Questions</h2>
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  {pledgeFaqs.map((faq, index) => {
                    const isOpen = openFaqs[index];
                    
                    return (
                      <div key={index} className="faq-item">
                        <div 
                          className="faq-question"
                          onClick={() => toggleFaq(index)}
                        >
                          <span>{faq.question}</span>
                          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                        
                        {isOpen && (
                          <div className="faq-answer">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        ) : (
          // Coming soon message
          <div className="coming-soon-container">
            <div className="pledge-intro">
              <p>
                Welcome to the Alpha Phi Omega Gamma Chapter's pledge program!
              </p>
            </div>
            <div className="coming-soon-banner">
              <h3>FALL 2025 COMING SOON</h3>
            </div>
            <div className="contact-info text-center mt-5">
              <p>
                For inquiries about pledging, please contact our Pledgemaster:
              </p>
              <a href="mailto:pledgemaster@apogamma.org" className="btn btn-primary px-4 py-2 fw-bold">
                <Mail className="me-2" size={18} /> Contact Pledgemaster
              </a>
            </div>
          </div>
        )}
      </div>

      {showFullContent && (
        <div className="contact-section py-5">
          <div className="container text-center">
            <h2 className="fw-bold mb-4">Still Have Questions?</h2>
            <p className="mb-4">
              Can't find the information you're looking for? Reach out to our Pledgemaster for assistance!
            </p>
            <a href="mailto:pledgemaster@apogamma.org" className="btn btn-light px-4 py-2 fw-bold">
              <Mail className="me-2" size={18} /> Contact Pledgemaster
            </a>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default PledgePage;