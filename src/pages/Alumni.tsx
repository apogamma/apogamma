import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Instagram, MapPin, FileText } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarMenu from '../components/SidebarMenu';
import PageHeader from '../components/PageHeader';
import humansOfApoData from '../data/humansOfApo';
import Footer from '../components/Footer';
import '../styles/alumni.css';

interface Member {
  name: string;
  gradYear: string;
  instagram?: string;
}

interface AlumniProfile {
  name: string;
  gradYear: string;
  position?: string;
  imageUrl: string;
  bio: string;
  spotlight?: string;
  isGroup?: boolean;
  members?: Member[];
}

interface ExpandedProfiles {
  [key: string]: boolean;
}

const Alumni = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedProfiles, setExpandedProfiles] = useState<ExpandedProfiles>({});

  const { alumni = [] } = humansOfApoData as { alumni: AlumniProfile[] };

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const toggleProfile = (id: string): void => {
    setExpandedProfiles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getFilteredAlumni = (): AlumniProfile[] => {
    if (!searchTerm) return alumni;
    
    const searchLower = searchTerm.toLowerCase();
    
    return alumni.filter(profile => {
      if (profile.name.toLowerCase().includes(searchLower)) return true;
      if (profile.bio && profile.bio.toLowerCase().includes(searchLower)) return true;
      
      if (profile.isGroup && profile.members) {
        return profile.members.some(member => 
          member.name.toLowerCase().includes(searchLower) ||
          (member.instagram && member.instagram.toLowerCase().includes(searchLower))
        );
      }
      
      return false;
    }).sort((a, b) => {
      const getFirstYear = (yearStr: string): number => parseInt(yearStr.split(' ')[0]);
      return getFirstYear(b.gradYear) - getFirstYear(a.gradYear);
    });
  };

  const renderAlumniProfiles = (): React.ReactNode => {
    const filteredAlumni = getFilteredAlumni();
    
    if (filteredAlumni.length === 0) {
      return (
        <div className="col-12">
          <div className="no-results">
            <h3>No alumni profiles match your search</h3>
            <p>Try adjusting your search term</p>
          </div>
        </div>
      );
    }

    return filteredAlumni.map((profile, index) => {
      const profileId = `profile-${profile.name}-${index}`;
      const isExpanded = expandedProfiles[profileId] || false;
      
      return (
        <div key={profileId} className="col-lg-6 mb-4">
          <div className="profile-card">
            <div 
              className="profile-header"
              onClick={() => toggleProfile(profileId)}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h3>{profile.name}</h3>
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              <div className="profile-meta">
                <span>Class of {profile.gradYear}</span>
                {profile.position && <span>{profile.position}</span>}
                {profile.isGroup && <span>Group</span>}
              </div>
            </div>
            
            {isExpanded && (
              <>
                <img 
                  src={profile.imageUrl.startsWith('https://drive.google.com/open?id=') 
                    ? profile.imageUrl.replace('https://drive.google.com/open?id=', 'https://drive.google.com/uc?id=')
                    : profile.imageUrl} 
                  alt={profile.name} 
                  className="profile-image" 
                />
                
                <div className="profile-content">
                  <p>{profile.bio}</p>
                  
                  {profile.isGroup && profile.members && profile.members.length > 0 && (
                    <div className="members-section">
                      <h5>Group Members:</h5>
                      {profile.members.map((member, memberIndex) => (
                        <div key={memberIndex} className="member-item">
                          <span>{member.name} (Class of {member.gradYear})</span>
                          {member.instagram && (
                            <a 
                              href={`https://instagram.com/${member.instagram.replace('@', '')}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="instagram"
                            >
                              <Instagram size={16} />
                              {member.instagram}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {profile.spotlight && profile.spotlight !== 'N/A' && (
                  <div className="profile-spotlight">
                    <strong>Spotlight Nomination:</strong> {profile.spotlight}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="overflow-hidden" id="top">
      <PageHeader 
        title="APO Alumni" 
        subtitle="Alpha Phi Omega - Gamma Chapter at Cornell University"
        onToggleMenu={toggleMenu}
      />

      <SidebarMenu 
        isOpen={menuOpen} 
        onClose={toggleMenu} 
        activeLink="alumni"
      />

      <div className="container pb-5">
        <div className="section-intro">
          <h1 className="section-title text-center">APO Alumni Network</h1>
          <p>
            Connect with our global network of Alpha Phi Omega alumni from Cornell University. 
            Our graduates continue to exemplify our core values of Leadership, Friendship, and Service 
            in their post-Cornell journeys across the world.
          </p>
        </div>

        <div className="alumni-map-section">
          <h2 className="mb-4">Our Alumni Around the World</h2>
          <div className="alumni-map-container">
            <iframe 
              src="https://www.google.com/maps/d/embed?mid=1DzWLpHqhKl3cjH1pyMocClIE31_Y8Ao" 
              title="APO Alumni Map"
              allowFullScreen
            ></iframe>
          </div>
          <div className="d-flex flex-wrap justify-content-center mt-3">
            <a href="https://www.google.com/maps/d/u/4/edit?mid=1DzWLpHqhKl3cjH1pyMocClIE31_Y8Ao" 
              className="map-button"
              target="_blank"
              rel="noopener noreferrer">
              <MapPin size={20} />
              View Full Alumni Map
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiibfF9sUUoWlwdOUdqjVF6sHlJORI2r943mTzmWNYctz7Rg/viewform?usp=sf_link" 
              className="spotlight-button"
              target="_blank"
              rel="noopener noreferrer">
              <FileText size={20} />
              Submit Alumni Spotlight
            </a>
          </div>
        </div>

        <div className="filter-section">
          <div className="container text-center">
            <h3 className="mb-3">Find Alumni</h3>
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search alumni by name or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="alumni-profiles-section">
          <h2 className="category-title">Alumni Profiles</h2>
          <div className="row">
            {renderAlumniProfiles()}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Alumni;