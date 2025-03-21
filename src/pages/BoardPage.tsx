import { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { boardCategories } from '../data/boardMembers';
import SidebarMenu from '../components/SidebarMenu';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import '../styles/boardpage.css';

interface BoardMember {
  name: string;
  position: string;
  imageUrl: string;
  email: string;
  bio?: string;
}

interface BoardCategory {
  title: string;
  members: BoardMember[];
}

const BoardPage = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!window.location.hash) {
      const newUrl = window.location.pathname + '#top';
      window.history.replaceState(null, '', newUrl);
    }
    window.scrollTo(0, 0);
  }, []);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="overflow-hidden" id="top">
      <PageHeader 
        title="Executive Board" 
        subtitle="Alpha Phi Omega - Gamma Chapter at Cornell University"
        onToggleMenu={toggleMenu}
      />

      <SidebarMenu 
        isOpen={menuOpen} 
        onClose={toggleMenu} 
        activeLink="board"
      />

      <div className="container pb-5">
        <div className="board-intro">
          <p>
            Consisting of elected and appointed officers in both semester- and year-long positions, 
            the Executive Board handles the behind-the-scenes work that makes the operation of our chapter possible. 
            Check out their bios to learn a little more about them! Please contact any of our officers if you 
            have questions or suggestions.
          </p>
        </div>

        {boardCategories.map((category: BoardCategory, categoryIndex: number) => (
          <div key={categoryIndex} id={category.title.toLowerCase()} className="mb-5">
            <h2 className="category-title">{category.title}</h2>
            <div className="row g-4">
              {category.members.map((member: BoardMember, memberIndex: number) => (
                <div key={memberIndex} className="col-6 col-md-4 col-lg-3 mb-4">
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
        ))}
      </div>

      <div className="contact-section py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Get in Touch</h2>
          <p className="mb-4">
            Have questions about our leadership or want to learn more about Alpha Phi Omega at Cornell?
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

export default BoardPage;