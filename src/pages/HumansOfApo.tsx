import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarMenu from '../components/SidebarMenu';
import PageHeader from '../components/PageHeader';
import humansOfApoData from '../data/humansOfApo';
import Footer from '../components/Footer';
import ProfileCard from '../components/ProfileCard';
import '../styles/humansofapo.css';

interface Member {
  name: string;
  gradYear: string;
  instagram?: string;
  position?: string;
}

interface Profile {
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

type FilterType = 'all' | 'individual' | 'group';

const HumansOfApo = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedProfiles, setExpandedProfiles] = useState<ExpandedProfiles>({});

  const { brothers = [] } = humansOfApoData as { brothers: Profile[] };

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const toggleProfile = (id: string): void => {
    setExpandedProfiles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getFilteredData = (): Profile[] => {
    let dataSource = brothers;
    
    if (filter === 'individual') {
      dataSource = brothers.filter(profile => !profile.isGroup);
    } else if (filter === 'group') {
      dataSource = brothers.filter(profile => profile.isGroup);
    }

    return dataSource.filter(profile => {
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        
        if (profile.name.toLowerCase().includes(searchLower)) return true;
        
        if (profile.bio && profile.bio.toLowerCase().includes(searchLower)) return true;
        
        if (profile.isGroup && profile.members) {
          return profile.members.some(member => 
            member.name.toLowerCase().includes(searchLower) ||
            (member.instagram && member.instagram.toLowerCase().includes(searchLower))
          );
        }
        
        return false;
      }
      
      return true;
    }).sort((a, b) => {
      const getFirstYear = (yearStr: string): number => parseInt(yearStr.split(' ')[0]);
      return getFirstYear(a.gradYear) - getFirstYear(b.gradYear);
    });
  };

  const getGroupedProfiles = () => {
    const filteredData = getFilteredData();
    
    const individualBrothers = filteredData.filter(profile => !profile.isGroup);
    const groupBrothers = filteredData.filter(profile => profile.isGroup);
    
    return {
      individual: individualBrothers,
      group: groupBrothers
    };
  };

  const renderProfilesGrid = (profiles: Profile[]) => {
    if (profiles.length === 0) {
      return (
        <div className="col-12">
          <div className="no-results">
            <h3>No profiles match your search</h3>
            <p>Try adjusting your filters or search term</p>
          </div>
        </div>
      );
    }

    return profiles.map((profile, index) => {
      const profileId = `profile-${profile.name}-${index}`;
      const isExpanded = expandedProfiles[profileId] || false;
      
      return (
        <div key={profileId} className="col-lg-6 mb-4">
          <ProfileCard 
            profile={profile}
            isExpanded={isExpanded}
            toggleProfile={() => toggleProfile(profileId)}
            index={index}
          />
        </div>
      );
    });
  };

  const renderProfiles = () => {
    const groupedProfiles = getGroupedProfiles();
    
    if (filter === 'all') {
      return (
        <>
          {groupedProfiles.individual.length > 0 && (
            <>
              <div className="col-12 mb-4">
                <h2 className="category-title">Individual Brothers</h2>
              </div>
              {renderProfilesGrid(groupedProfiles.individual)}
            </>
          )}
          
          {groupedProfiles.group.length > 0 && (
            <>
              <div className="col-12 mb-4 mt-5">
                <h2 className="category-title">Brother Groups</h2>
              </div>
              {renderProfilesGrid(groupedProfiles.group)}
            </>
          )}
        </>
      );
    } else if (filter === 'individual') {
      return renderProfilesGrid(groupedProfiles.individual);
    } else {
      return renderProfilesGrid(groupedProfiles.group);
    }
  };

  return (
    <div className="overflow-hidden" id="top">
      <PageHeader 
        title="Humans of APO" 
        subtitle="Alpha Phi Omega - Gamma Chapter at Cornell University"
        onToggleMenu={toggleMenu}
      />

      <SidebarMenu 
        isOpen={menuOpen} 
        onClose={toggleMenu} 
        activeLink="humansOfApo"
      />

      <div className="container pb-5">
        <div className="section-intro">
          <h1 className="section-title text-center">Humans of APO</h1>
          <p>
            Get to know the brothers of Alpha Phi Omega at Cornell University through their stories,
            experiences, and contributions to our community. Each profile offers a glimpse into the
            diverse perspectives and meaningful connections that make our chapter special.
          </p>
        </div>

        <div className="filter-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-3 mb-md-0">
                <button 
                  className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                  onClick={() => setFilter('all')}
                >
                  All
                </button>
                <button 
                  className={`filter-btn ${filter === 'individual' ? 'active' : ''}`}
                  onClick={() => setFilter('individual')}
                >
                  Individuals
                </button>
                <button 
                  className={`filter-btn ${filter === 'group' ? 'active' : ''}`}
                  onClick={() => setFilter('group')}
                >
                  Groups
                </button>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search by name or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {renderProfiles()}
        </div>
        
        <div className="text-center mt-5 mb-5">
          <p>Looking for our alumni network?</p>
          <Link to="/alumni" className="alumni-link">
            Visit Alumni Page
          </Link>
        </div>
      </div>

      <div className="submit-section py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Want to be featured?</h2>
          <p className="mb-4">
            Submit your story and photos to be considered for our Humans of APO feature!
          </p>
          <a href="https://forms.gle/utCJMUxP3g71rb43A" className="btn btn-light btn-lg px-4">
            Submit Your Story
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HumansOfApo;