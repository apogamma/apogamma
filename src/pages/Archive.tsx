import { useState, useEffect } from 'react';
import { History, Camera, Users, FileBadge, BookOpen, Star, Newspaper } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SidebarMenu from '../components/SidebarMenu';
import Footer from '../components/Footer';
import { getGazetteYears, getGazettesByYear } from '../data/gazettes';
import '../styles/archive.css';

interface HistoricalEvent {
  year: number;
  title: string;
  description: string;
}

interface CompositeImage {
  year: string;
  imageUrl: string;
}

interface PastLeader {
  year: string;
  president: string;
  vp: string;
}

interface GammaSymbol {
  name: string;
  value: string;
}

interface Abbreviation {
  abbr: string;
  meaning: string;
}

interface RelatedChapter {
  symbol: string;
  name: string;
  location: string;
}

type TabType = 'history' | 'symbols' | 'composites' | 'leadership' | 'gazettes' | 'policies';

const Archive = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<TabType>('history');

  useEffect(() => {
    if (window.location.hash !== '#top') {
      window.location.hash = 'top';
    }
    window.scrollTo(0, 0);
  }, []);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const composites: CompositeImage[] = [
    { year: "2024-2025", imageUrl: "/src/assets/composites/2024-2025.jpg" },
    { year: "2023-2024", imageUrl: "/src/assets/composites/2023-2024.jpg" },
    { year: "2022-2023", imageUrl: "/src/assets/composites/2022-2023.jpg" },
    { year: "2021-2022", imageUrl: "/src/assets/composites/2021-2022.jpg" },
    { year: "2020-2021", imageUrl: "/src/assets/composites/2020-2021.jpg" }
  ];

  const historicalEvents: HistoricalEvent[] = [
    { 
      year: 1927, 
      title: "Gamma Chapter Founded", 
      description: "The Gamma Chapter was established at Cornell University on February 25, 1927."
    },
    { 
      year: 1976, 
      title: "50th Anniversary Celebration",
      description: "The chapter celebrated its 50th anniversary with a campus-wide service project."
    },
    { 
      year: 2002, 
      title: "75th Anniversary Celebration",
      description: "Alumni from across the decades returned to Cornell to celebrate the 75th anniversary."
    },
    { 
      year: 2011, 
      title: "Nate Rand Memorial",
      description: "The chapter established the Nathaniel Rand Playroom Program at CHAM in memory of brother Nate Rand."
    },
    { 
      year: 2017, 
      title: "90th Anniversary Celebration",
      description: "The chapter marked 90 years of service at Cornell with a special ceremony."
    }
  ];

  const pastLeadership: PastLeader[] = [
    { year: "2025-2026", president: "Zoe Cantor", vp: "Sabrina Sheridan" },
    { year: "2023-2024", president: "Calista Bordador", vp: "Zoe Cantor" },
    { year: "2022-2023", president: "Kieran Adams", vp: "Calista Bordador" }
  ];

  const gammaSymbols: GammaSymbol[] = [
    { name: "Jewel", value: "Diamond" },
    { name: "Flower", value: "Forget-Me-Not" },
    { name: "Tree", value: "Sturdy Oak Tree" },
    { name: "Bird", value: "Golden Eagle" },
    { name: "Colors", value: "Royal Blue and Old Glory Gold" }
  ];

  const abbreviations: Abbreviation[] = [
    { abbr: "EB", meaning: "Executive Board" },
    { abbr: "GM", meaning: "General Meeting" },
    { abbr: "PPG(L)", meaning: "Pledge Project Group (Leader)" },
    { abbr: "AWL", meaning: "All Who Look/Listen" },
    { abbr: "SSE", meaning: "Spontaneous Social Event" },
    { abbr: "NIB", meaning: "Newly Initiated Brother" },
    { abbr: "LFS", meaning: "Leadership, Friendship, Service" }
  ];

  const relatedChapters: RelatedChapter[] = [
    { symbol: "Φ", name: "Our Brother Chapter", location: "Syracuse University (NY)" },
    { symbol: "ΙΦ", name: "Our Sister Chapter", location: "UC Davis (California)" },
    { symbol: "ΑΖΛ", name: "Little Brother Chapter", location: "SUNY Cortland" }
  ];

  const nationalStructure: string[] = [
    "Alpha Phi Omega is organized into 11 regions across the United States",
    "Each region is led by a Regional Chair and a Regional Director",
    "Regions are further divided into sections, each led by a Section Chair",
    "The Gamma Chapter is part of Section 98, which includes all chapters in Central New York",
    "The National Fraternity is governed by the National Board of Directors"
  ];

  return (
    <div className="overflow-hidden" id="top">
      <PageHeader 
        title="Archives" 
        subtitle="Alpha Phi Omega - Gamma Chapter at Cornell University"
        onToggleMenu={toggleMenu}
      />

      <SidebarMenu 
        isOpen={menuOpen} 
        onClose={toggleMenu} 
        activeLink="archive"
      />

      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="section-title">Chapter Archives</h1>
          <div className="archive-intro">
            <p>
              Welcome to the archives of the Gamma Chapter of Alpha Phi Omega. This section preserves 
              our chapter's rich history and legacy since our founding in 1927. Browse through 
              historical records, composites, newsletters, and more to explore our journey of Leadership, 
              Friendship, and Service.
            </p>
          </div>
        </div>

        <ul className="nav nav-pills justify-content-center mb-5">
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'history' ? 'active' : ''}`}
              onClick={() => setActiveTab('history')}
            >
              <History size={18} className="me-2" />
              Chapter History
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'symbols' ? 'active' : ''}`}
              onClick={() => setActiveTab('symbols')}
            >
              <Star size={18} className="me-2" />
              Chapter Symbols
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'composites' ? 'active' : ''}`}
              onClick={() => setActiveTab('composites')}
            >
              <Camera size={18} className="me-2" />
              Composites
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'leadership' ? 'active' : ''}`}
              onClick={() => setActiveTab('leadership')}
            >
              <Users size={18} className="me-2" />
              Past Leadership
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'gazettes' ? 'active' : ''}`}
              onClick={() => setActiveTab('gazettes')}
            >
              <FileBadge size={18} className="me-2" />
              Gamma Gazettes
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'policies' ? 'active' : ''}`}
              onClick={() => setActiveTab('policies')}
            >
              <BookOpen size={18} className="me-2" />
              APO Policies
            </button>
          </li>
        </ul>

        <div className="tab-content mt-4">
          {activeTab === 'history' && (
            <div className="fade show active">
              <div className="archive-card p-4">
                <h3 className="fw-bold text-primary mb-4">APO & Gamma Chapter History</h3>
                
                <div className="mb-4">
                  <h4 className="mb-3">Gamma Chapter History</h4>
                  <p>
                    While Alpha Phi Omega was founded at Lafayette College in 1925, our Gamma Chapter at Cornell University 
                    was established on February 25, 1927, making it one of the earliest chapters in the fraternity's history. 
                    We proudly continue as one of the longest continuously running chapters of Alpha Phi Omega.
                  </p>
                </div>
                
                <div className="mb-4">
                  <h4 className="mb-3">Related Chapters</h4>
                  <div className="row">
                    {relatedChapters.map((chapter, index) => (
                      <div key={index} className="col-md-4 mb-3">
                        <div className="chapter-card">
                          <h5 className="mb-2">{chapter.symbol}: {chapter.name}</h5>
                          <p className="mb-0 text-muted">{chapter.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="mb-3">National Structure</h4>
                  <ul className="list-group list-group-flush">
                    {nationalStructure.map((item, index) => (
                      <li key={index} className="list-group-item">{item}</li>
                    ))}
                  </ul>
                </div>
                
                <h4 className="mb-3">Gamma Chapter Timeline</h4>
                <div className="timeline">
                  {historicalEvents.map((event, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-year">{event.year}</div>
                      <h4 className="mb-2">{event.title}</h4>
                      <p>{event.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'symbols' && (
            <div className="fade show active">
              <div className="archive-card p-4">
                <h3 className="fw-bold text-primary mb-4">APO Gamma Symbols</h3>
                
                <div className="row mb-4">
                  {gammaSymbols.map((symbol, index) => (
                    <div key={index} className="col-md-4 mb-3">
                      <div className="symbol-card">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="symbol-name">{symbol.name}:</div>
                          <div>{symbol.value}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <h4 className="mb-3">Common Abbreviations</h4>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>Abbreviation</th>
                        <th>Meaning</th>
                      </tr>
                    </thead>
                    <tbody>
                      {abbreviations.map((abbr, index) => (
                        <tr key={index}>
                          <td className="fw-bold">{abbr.abbr}</td>
                          <td>{abbr.meaning}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="toast-song">
                  <h4 className="mb-3">APO Toast Song</h4>
                  <p className="mb-2 fst-italic text-muted">Sung to the tune of H. S. Thompson's Annie Lisle (the same tune as Cornell's alma mater)</p>
                  <div>
                    <p>Here's to Alpha Phi Omega, Loyal Brothers we,<br />
                    True to self and to each other, firm in loyalty.<br />
                    Daily working, daily striving, ever more to be<br />
                    True to Alpha Phi Omega, Our Fraternity.</p>
                    <p>Brothers clasp the hands of Brothers, strong the circle we<br />
                    Ever mindful, ever serving all humanity.<br />
                    Now we raise our grateful voices in our song to thee:<br />
                    True to Alpha Phi Omega, may we always be.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'composites' && (
            <div className="fade show active">
              <div className="row g-4">
                {composites.map((composite, index) => (
                  <div key={index} className="col-md-6 col-lg-4">
                    <div className="archive-card composite-container">
                      <div className="position-relative">
                        <img 
                          src={composite.imageUrl} 
                          alt={`${composite.year} Composite`} 
                          className="img-fluid w-100"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = "https://placehold.co/400x300/e6f2ff/0056b3?text=Composite";
                          }}
                        />
                        <div className="composite-year">
                          {composite.year}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'leadership' && (
            <div className="fade show active">
              <div className="archive-card p-4">
                <h3 className="fw-bold text-primary mb-4">Past Chapter Leadership</h3>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead className="bg-light">
                      <tr>
                        <th>Academic Year</th>
                        <th>President</th>
                        <th>Vice President</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pastLeadership.map((year, index) => (
                        <tr key={index}>
                          <td>{year.year}</td>
                          <td>{year.president}</td>
                          <td>{year.vp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gazettes' && (
            <div className="fade show active">
              <div className="archive-card p-4">
                <h3 className="fw-bold text-primary mb-4">Gamma Gazettes</h3>
                <p className="mb-4">
                  The Gamma Gazette is our chapter's regular newsletter that captures the events, accomplishments, 
                  and memories of our brotherhood each semester. Browse through our archive of past issues below.
                </p>
                
                {getGazetteYears().map(year => (
                  <div key={year} className="mb-4">
                    <h4 className="fw-bold mb-3">{year}</h4>
                    <div className="row g-3">
                      {getGazettesByYear(year)
                        .sort((a) => a.semester === 'Spring' ? -1 : 1)
                        .map((gazette) => (
                          <div key={gazette.id} className="col-md-6">
                            <a 
                              href={gazette.url} 
                              className="newsletter-card text-decoration-none text-dark"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Newspaper size={24} className="newsletter-icon" />
                              <div>
                                <h5 className="mb-0">{gazette.title}</h5>
                                <small className="text-muted">{gazette.period}</small>
                              </div>
                            </a>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'policies' && (
            <div className="fade show active">
              <div className="archive-card p-4">
                <h3 className="fw-bold text-primary mb-4">APO Policies</h3>
                
                <div className="alert alert-info">
                  <p className="mb-0">
                    <strong>Note:</strong> All members are expected to adhere to these policies, which uphold our values of Leadership, Friendship, and Service.
                  </p>
                </div>
                
                <div className="mb-4">
                  <h5 className="fw-bold text-primary">No Hazing Policy</h5>
                  <p>
                    Alpha Phi Omega strictly prohibits hazing in any form. Those in violation of this policy 
                    will be subject to Chapter and National suspension.
                  </p>
                </div>
                
                <div className="mb-4">
                  <h5 className="fw-bold text-primary">Dry Fraternity</h5>
                  <p>
                    We're a dry fraternity. No Member of Gamma Chapter shall possess, consume, or be 
                    under the influence of alcohol/illegal substances at any Gamma Chapter event, or any 
                    event that an observer would associate with Gamma Chapter. No Member shall wear 
                    APO's letters while possessing/consuming alcohol or illegal substances.
                  </p>
                </div>
                
                <div className="mb-4">
                  <h5 className="fw-bold text-primary">Non-Discrimination Policy</h5>
                  <p>
                    The fraternity will not tolerate or condone any form of abusive or discriminatory behavior 
                    on the part of its members, whether physical or verbal, in respect to race, ethnicity, 
                    citizenship, class, gender, sexual orientation, age, or ability status.
                  </p>
                </div>
                
                <div className="mb-4">
                  <h5 className="fw-bold text-primary">Sexual Misconduct Policy</h5>
                  <p>
                    The fraternity will not tolerate or condone any act of sexual harassment, abuse, or assault 
                    perpetrated by any of its members.
                  </p>
                </div>
                
                <div className="mb-4">
                  <h5 className="fw-bold text-primary">Reporting Policy</h5>
                  <p>
                    Any member is welcome to but should not feel compelled to consult the Executive Board 
                    before reporting an incident of hazing, discrimination, or sexual misconduct to an outside 
                    resource. Reporting an incident won't affect your standing in Gamma Chapter.
                  </p>
                </div>
                
                <div className="mb-4">
                  <h5 className="fw-bold text-primary">48-Hour Rule</h5>
                  <p>
                    48 hours before the start of a service event, you can no longer remove yourself from said 
                    event if you have signed up for it on Docubro. If you have not signed up for the event, you 
                    may still sign up within the 48-hour period (you won't be able to remove yourself after signing up).
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Archive;