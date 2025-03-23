import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarMenu from '../components/SidebarMenu';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import ServiceEventBox from '../components/ServiceEventBox';
import { serviceSections } from '../data/service';
import '../styles/service.css';

const ServicePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="overflow-hidden" id="top">
      <PageHeader 
        title="Service Projects" 
        subtitle="Watch our Brothers in Action making a difference"
        onToggleMenu={toggleMenu}
      />

      <SidebarMenu 
        isOpen={menuOpen} 
        onClose={toggleMenu} 
        activeLink="service"
      />

      <div className="container pb-5">
        {/* Main Section */}
        <div className="service-section">
          <h1 className="section-title">Service</h1>
          <p className="section-description">
            Service is the core principle of Alpha Phi Omega. Our brothers dedicate thousands of hours annually
            to making a positive impact on campus and in the greater Ithaca community.
          </p>
          
          {/* Service Sections (Gallery and Events) */}
          {serviceSections.map((section) => (
            <ServiceEventBox
              key={section.id}
              title={section.title}
              description={section.description}
              mediaItems={section.media}
              type={section.type}
            />
          ))}
          
          {/* Service VP Contact */}
          <div className="service-cta">
            <h3>Want to Make a Difference?</h3>
            <div className="cta-buttons">
              <a href="mailto:vpservice@apogamma.org" className="btn btn-primary px-4 py-2 fw-bold me-3">
                Contact VP of Service
              </a>
              <Link to="/recruitment" className="btn btn-outline-primary px-4 py-2 fw-bold">
                Join Alpha Phi Omega
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicePage;