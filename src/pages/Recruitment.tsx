import { useState, useEffect } from 'react';
import { Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SidebarMenu from '../components/SidebarMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import '../styles/Recruitment.css';

interface CarouselImage {
  src: string;
  title: string;
}

interface PledgeTeamMember {
  name: string;
  position: string;
  email: string;
  imageUrl: string;
  bio?: string;
}

const Recruitment = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  
  const carouselImages: CarouselImage[] = [
    { src: 'src/assets/pledges/rushiesSP25.jpg', title: 'Spring 2025 Pledge Class' },
    { src: 'src/assets/pledges/rushiesFA24.png', title: 'Fall 2024 Pledge Class' }
  ];

  useEffect(() => {
    if (window.location.hash !== '#top') {
      window.location.hash = 'top';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); 
    
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const goToPrevImage = (): void => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = (): void => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const pledgeTeamMembers: PledgeTeamMember[] = [
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
  ];

  return (
    <div className="overflow-hidden" id="top">
      <PageHeader 
        title="Recruitment" 
        subtitle="Alpha Phi Omega - Gamma Chapter at Cornell University"
        onToggleMenu={toggleMenu}
      />

      <SidebarMenu 
        isOpen={menuOpen} 
        onClose={toggleMenu} 
        activeLink="recruitment"
      />

      <div className="container pb-5">
        <div className="board-intro">
          <p>
            Rush is a 2-week period filled with fun events where anyone interested in joining APO can come out 
            and learn more about our brotherhood and our organization as we learn more about you! You will have 
            a chance to meet the active brothers in our chapter at different events.
          </p>
          <p>
            We welcome ALL who wish to serve to join our organization! We DO NOT haze. In order to successfully rush, 
            you must attend <strong>1 Information Session, 1 Leadership workshop, 1 Fellowship event, 2 Service events</strong>, 
            and <strong>submit a Letter of Intent</strong>.
          </p>
        </div>

        <div className="carousel-container">
          <div className="carousel-inner">
            {carouselImages.map((image, index) => (
              <div 
                key={index} 
                className={`carousel-slide ${index === currentImageIndex ? 'active' : ''}`}
              >
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="carousel-img"
                />
                <div className="carousel-overlay">
                  <h2 className="fw-bold fs-2 mb-0">{image.title}</h2>
                  <p className="fs-5 mb-0">Join us and become part of our brotherhood!</p>
                </div>
              </div>
            ))}
          </div>
          
          <div 
            className="carousel-control carousel-control-prev" 
            onClick={goToPrevImage}
          >
            <ChevronLeft size={20} color="#17318C" />
          </div>
          <div 
            className="carousel-control carousel-control-next" 
            onClick={goToNextImage}
          >
            <ChevronRight size={20} color="#17318C" />
          </div>
          
          <div className="carousel-indicators">
            {carouselImages.map((_, index) => (
              <div 
                key={index} 
                className={`carousel-indicator ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <h2 className="category-title">Rush Requirements</h2>
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="rush-card p-4 h-100">
              <h3 className="fw-bold text-primary mb-3">Attendance Requirements</h3>
              <ul className="ps-4">
                <li className="mb-2">1 Information Session</li>
                <li className="mb-2">1 Leadership Workshop</li>
                <li className="mb-2">1 Fellowship Event</li>
                <li className="mb-2">2 Service Events</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="rush-card p-4 h-100">
              <h3 className="fw-bold text-primary mb-3">Additional Requirements</h3>
              <ul className="ps-4">
                <li className="mb-2">Submit a Letter of Intent</li>
                <li className="mb-2">Complete an interview with the Pledge Team</li>
                <li className="mb-2">Meet GPA requirements</li>
                <li className="mb-2">Pay dues upon acceptance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rush-card p-4 mb-5 text-center">
          <h2 className="fw-bold text-primary mb-4">Rush Events Calendar</h2>
          <p className="mb-4">
            For the complete schedule of our Spring 2025 Rush events, including information sessions, 
            service projects, and fellowship activities, please visit our chapter website.
          </p>
          <a 
            href="https://www.apoonline.org/gamma/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary fw-bold px-4 py-2"
          >
            Visit APO Gamma Chapter Website
          </a>
        </div>

        <h2 className="category-title">Meet the Pledge Team</h2>
        <div className="row g-4">
          {pledgeTeamMembers.map((member, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
              <div className={`board-member-card ${member.bio ? 'has-bio' : ''}`}>
                <div className="member-image-container">
                  <img 
                    src={member.imageUrl} 
                    alt={`${member.name} - ${member.position}`} 
                    className="member-image"
                  />
                  {member.bio && (
                    <div className="bio-overlay">
                      <p>{member.bio}</p>
                    </div>
                  )}
                </div>
                <div className="p-2">
                  <div className="position-title">{member.position}</div>
                  <h3 className="member-name">{member.name}</h3>
                  <a href={`mailto:${member.email}`} className="member-email">
                    <Mail size={12} className="me-1" />
                    <span className="text-truncate">{member.email}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-section py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Get in Touch</h2>
          <p className="mb-4">
            Have questions about Rush or want to learn more about Alpha Phi Omega at Cornell?
            We're here to help!
          </p>
          <a href="mailto:pledgeteam@apogamma.org" className="btn btn-light px-4 py-2 fw-bold">
            Contact Us
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Recruitment;