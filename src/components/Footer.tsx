import { Link } from 'react-router-dom';
import { Award, Users, GraduationCap, BookOpen, PersonStanding, Instagram, Facebook, Linkedin, Clock } from 'lucide-react';
import logo from '../assets/logo.png';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { to: '/', text: 'Home', icon: <Award size={12} /> },
        { to: '/recruitment', text: 'Recruitment', icon: <Users size={12} /> },
        { to: '/board', text: 'Executive Board', icon: <BookOpen size={12} /> },
        { to: '/alumni', text: 'Alumni', icon: <GraduationCap size={12} /> },
        { to: '/archive', text: 'Archive', icon: <Clock size={12} /> }
      ]
    },
    {
      title: 'Brothers & Pledges',
      links: [
        { to: '/humansofapo', text: 'Humans Of APO', icon: <PersonStanding size={12} /> },
        { to: '/families', text: 'Families', icon: <Users size={12} /> },
        { to: '/pledgepage', text: 'Pledge Info', icon: <Users size={12} /> },
        { to: '/faqpage', text: 'FAQs', icon: <BookOpen size={12} /> }
      ]
    }
  ];

  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-2">
              <img src={logo} alt="APO logo" className="footer-logo me-2" />
              <div>
                <h6 className="mb-0 text-gold">Alpha Phi Omega</h6>
                <p className="mb-0 mini-text">Gamma Chapter - Cornell</p>
              </div>
            </div>
            <p className="mini-text opacity-75 mb-1">
              A national co-ed service fraternity founded on Leadership, Friendship, and Service.
            </p>
            <p className="mini-text fw-bold mb-0">No hazing. No alcohol. No discrimination.</p>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className="col-6 col-lg-2 col-md-3">
              <h6 className="text-gold mb-2 fs-7">{section.title}</h6>
              <ul className="list-unstyled mb-0">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-1">
                    <Link to={link.to} className="footer-link d-flex align-items-center">
                      <span className="footer-icon me-1">{link.icon}</span>
                      <span className="mini-text">{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-lg-4 col-md-6">
            <h6 className="text-gold mb-2 fs-7">Contact Us</h6>
            <div className="d-flex align-items-center mb-2">
              <a 
                href="mailto:president@apogamma.org" 
                className="btn btn-outline-light btn-sm py-0 px-2 mini-text"
              >
                Email Us
              </a>
              <div className="social-links ms-2">
                <a href="https://www.instagram.com/apogamma/" target="_blank" rel="noopener noreferrer" className="social-link me-1">
                  <Instagram size={14} />
                </a>
                <a href="https://www.facebook.com/apogamma/" target="_blank" rel="noopener noreferrer" className="social-link me-1">
                  <Facebook size={14} />
                </a>
                <a href="https://www.linkedin.com/groups/8798673/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={14} />
                </a>
              </div>
            </div>
            <p className="mini-text mb-0">
              © {currentYear} Alpha Phi Omega - Gamma Chapter at Cornell University
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;