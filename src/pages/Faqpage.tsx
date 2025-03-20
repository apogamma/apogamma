import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Mail } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarMenu from '../components/SidebarMenu';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import { faqCategories } from '../data/faq';
import '../styles/faq.css';

interface OpenFaqsState {
  [key: string]: boolean;
}

const FaqPage = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [openFaqs, setOpenFaqs] = useState<OpenFaqsState>({});

  useEffect(() => {
    if (window.location.hash !== '#top') {
      window.location.hash = 'top';
    }
    window.scrollTo(0, 0);
  }, []);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const toggleFaq = (categoryId: string, faqId: number): void => {
    setOpenFaqs(prev => {
      const key = `${categoryId}-${faqId}`;
      return {
        ...prev,
        [key]: !prev[key]
      };
    });
  };

  return (
    <div className="overflow-hidden" id="top">
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Alpha Phi Omega - Gamma Chapter at Cornell University"
        onToggleMenu={toggleMenu}
      />

      <SidebarMenu 
        isOpen={menuOpen} 
        onClose={toggleMenu} 
        activeLink="faq"
      />

      <div className="container pb-5">
        <div className="faq-intro">
          <p>
            Find answers to common questions about Alpha Phi Omega at Cornell University. 
            If you don't see your question answered here, please feel free to contact any of our officers for more information.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            {faqCategories.map((category) => (
              <div key={category.id} id={category.id} className="mb-5">
                <h2 className="category-title">{category.title}</h2>
                
                {category.faqs.map((faq, faqIndex) => {
                  const faqKey = `${category.id}-${faqIndex}`;
                  const isOpen = openFaqs[faqKey];
                  
                  return (
                    <div key={faqIndex} className="faq-item">
                      <div 
                        className="faq-question"
                        onClick={() => toggleFaq(category.id, faqIndex)}
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
            ))}
          </div>
        </div>
      </div>

      <div className="contact-section py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Still Have Questions?</h2>
          <p className="mb-4">
            Can't find the information you're looking for? Check out our <a href="https://docs.google.com/document/d/1wIYc7F2AxlsrvAj1ZqB0btAuDJ_Kxcd1a5-JErebrlE/edit?usp=sharing" className="text-white fw-bold">comprehensive Gamma Guide</a> or reach out to our team!
          </p>
          <a href="mailto:president@apogamma.org" className="btn btn-light px-4 py-2 fw-bold">
            <Mail className="me-2" size={18} /> Contact Us
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FaqPage;