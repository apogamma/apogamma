import { useState } from 'react';
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

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    
    if (target.src.includes('drive.google.com/open')) {
      const idMatch = target.src.match(/id=([^&]+)/);
      if (idMatch && idMatch[1]) {
        target.src = `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w1000`;
      }
    } else if (target.src.includes('drive.google.com/file/d/')) {
      const idMatch = target.src.match(/d\/([^/]+)/);
      if (idMatch && idMatch[1]) {
        target.src = `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w1000`;
      }
    }
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
                        onError={handleImageError}
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

        {/* Equal Education Section */}
        <div>
          <h2 className="mb-4"
          style={{ textAlign: "center", fontWeight: 500, fontSize: "1.5rem" }}
          >
            This organization is a registered student organization of Cornell University.
          </h2>
          <p className="mb-4"
            style={{ textAlign: "center" }}
          >
            APO supports and upholds Cornell University's commitment to 
            providing equal opportunity to education and employment.<br />
            Learn more at <a href="https://hr.cornell.edu/about/workplace-rights/equal-education-and-employment">
            Equal Education and Employment</a> page.
          </p>
        </div>

        {/* Contact Section */}
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

      </div>

      <Footer />
    </div>
  );
};

export default BoardPage;