import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Users, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarMenu from '../components/SidebarMenu';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import { families } from '../data/families';
import '../styles/families.css';

const FamiliesPage = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [expandedFamily, setExpandedFamily] = useState<string | null>(null);

  useEffect(() => {
    if (window.location.hash !== '#top') {
      window.location.hash = 'top';
    }
    window.scrollTo(0, 0);
  }, []);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const toggleFamily = (familyId: string): void => {
    if (expandedFamily === familyId) {
      setExpandedFamily(null);
    } else {
      setExpandedFamily(familyId);
    }
  };

  return (
    <div className="overflow-hidden" id="top">
      <PageHeader 
        title="Our Families" 
        subtitle="Alpha Phi Omega - Gamma Chapter at Cornell University"
        onToggleMenu={toggleMenu}
      />

      <SidebarMenu 
        isOpen={menuOpen} 
        onClose={toggleMenu} 
        activeLink="families"
      />

      <div className="container pb-5">
        <div className="families-intro">
          <h1 className="section-title text-center">Families</h1>
          <p>
            To promote closer ties and a stronger sense of community in a brotherhood of over 400 members, 
            lineages are divided into families, each with their own unique traditions and quirks. 
            For many pledges, finding out their big's identity and learning which family they belong to 
            is a highlight of the pledging period.
          </p>
        </div>

        <div className="row">
          {families.map((family) => (
            <div key={family.id} className="col-lg-6 col-md-12">
              <div className="family-card">
                <div 
                  className="family-image" 
                  style={{ backgroundColor: family.color, opacity: 0.8 }}
                >
                </div>
                
                <div 
                  className="family-header" 
                  style={{ backgroundColor: family.color }}
                  onClick={() => toggleFamily(family.id)}
                >
                  <div>
                    <h3 className="family-title">{family.name}</h3>
                    <div className="family-mascot">{family.mascot}</div>
                  </div>
                  {expandedFamily === family.id ? 
                    <ChevronUp size={24} color="white" /> : 
                    <ChevronDown size={24} color="white" />
                  }
                </div>
                
                {expandedFamily === family.id && (
                  <div className="family-content">
                    <p>{family.description}</p>
                    <div className="mascot-highlight">
                      <Users size={16} className="me-1" />
                      Mascot: {family.mascot}
                    </div>
                    
                    <div className="heads-highlight mt-3">
                      <div className="heads-title">
                        <User size={16} />
                        Family Head{family.heads.length > 1 ? 's' : ''}
                      </div>
                      <ul className="heads-list">
                        {family.heads.map((head, index) => (
                          <li key={index} className="head-item">
                            {head.name}
                            {head.role && ` (${head.role})`}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-section py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Want to Join Our Family?</h2>
          <p className="mb-4">
            Interested in becoming part of one of our amazing APO families? Learn more about our recruitment process!
          </p>
          {/* Replace anchor tag with React Router's Link component */}
          <Link to="/recruitment" className="btn btn-light px-4 py-2 fw-bold">
            Learn About Recruitment
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FamiliesPage;