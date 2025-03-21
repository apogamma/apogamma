import { useState, useEffect } from "react";
import {
  ChevronDown,
  Users,
  HandHeart,
  UserCog,
  Clock,
  DollarSign,
  Menu,
  BookOpen,
  Landmark
} from "lucide-react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import background from "../assets/background.jpg";
import SidebarMenu from "../components/SidebarMenu";
import Footer from "../components/Footer";
import "../styles/homepage.css";

interface Statistic {
  value: number;
  label: string;
  icon: React.ReactNode;
}

interface Pillar {
  title: string;
  description: string;
  buttonText: string;
  Icon: React.ComponentType<{ size: number; className: string }>;
}

interface Symbol {
  title: string;
  description: string;
  Icon: React.ComponentType;
}

interface HistoryItem {
  title: string;
  description: string;
  Icon: React.ComponentType<{ size: number; className: string }>;
}

const HomePage = () => {
  const statistics: Statistic[] = [
    {
      value: 9 * 84,
      label: "Service Hours",
      icon: <Clock size={40} className="text-primary" />,
    },
    {
      value: 84,
      label: "Active Brothers",
      icon: <Users size={40} className="text-primary" />,
    },
    {
      value: 1300,
      label: "Dollars Raised",
      icon: <DollarSign size={40} className="text-primary" />,
    },
  ];

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [inView, setInView] = useState<boolean>(false);
  const [countedStats, setCountedStats] = useState<number[]>(statistics.map(() => 0));

  useEffect(() => {
    if (window.location.hash !== '#top') {
      window.location.hash = 'top';
    }
    window.scrollTo(0, 0);
  }, []);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const pillars: Pillar[] = [
    {
      title: "Leadership",
      description:
        "Members can develop their own personal skills and more about chapter operations by hosting events or becoming part of our executive board.",
      buttonText: "EXECUTIVE BOARD",
      Icon: UserCog,
    },
    {
      title: "Friendship",
      description:
        "Alpha Phi Omega fosters friendship and brotherhood through shared experiences and a deep understanding of our fraternal history and community-building goals.",
      buttonText: "FAMILIES",
      Icon: Users,
    },
    {
      title: "Service",
      description:
        "The chapter service program provides opportunities to develop social awareness, friendships and leadership skills.",
      buttonText: "BROTHERS IN ACTION",
      Icon: HandHeart,
    },
  ];

  const symbols: Symbol[] = [
    {
      title: "Jewel",
      description: "Diamond",
      Icon: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>,
    },
    {
      title: "Flower",
      description: "Forget-Me-Not",
      Icon: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3" stroke="#FFD700" strokeWidth="2" fill="none" />
        <path d="M12 5C12 5 14 3 17 5C20 7 19 10 19 10" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M12 5C12 5 10 3 7 5C4 7 5 10 5 10" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M12 19C12 19 14 21 17 19C20 17 19 14 19 14" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M12 19C12 19 10 21 7 19C4 17 5 14 5 14" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>,
    },
    {
      title: "Tree",
      description: "Sturdy Oak Tree",
      Icon: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22V12" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10L12 6L16 10" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 16L12 9L19 16" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 22L12 13L21 22" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
    },
    {
      title: "Bird",
      description: "Golden Eagle",
      Icon: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 9L21 4" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 11L21 8" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 4C12 4 8 4 6 8C4 12 6 14 6 14L9 17C9 17 9 18 8 20" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 4C12 4 16 4 18 8C20 12 18 14 18 14L15 17C15 17 15 18 16 20" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 17H9" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
    },
  ];

  const history: HistoryItem[] = [
    {
      title: "Our Founding",
      description: "Founded by Frank Reed Horton, Alpha Chapter at Lafayette College in Easton, PA was established on December 16, 1925.",
      Icon: Landmark,
    },
    {
      title: "Gamma Chapter",
      description: "Our Gamma Chapter at Cornell University was founded on February 25, 1927, making us one of the oldest continuously running chapters.",
      Icon: BookOpen,
    },
    {
      title: "National Structure",
      description: "Gamma is in Region Q, Section Q-2. The U.S. is broken up into regions and sections that hold regular conferences.",
      Icon: Landmark,
    },
  ];

  const scrollToContent = (): void => {
    const contentSection = document.getElementById("content-section");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollPercentage = Math.min(scrollPosition / windowHeight, 1);

      const overlay = document.getElementById("scroll-overlay");
      if (overlay) {
        overlay.style.opacity = scrollPercentage.toString();
        overlay.style.background = `linear-gradient(45deg, rgba(23, 49, 140, ${
          scrollPercentage * 0.7
        }), rgba(30, 85, 187, ${scrollPercentage * 0.7}))`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animateCountUp = (): void => {
    statistics.forEach((stat, index) => {
      let count = 0;
      const duration = 1500;
      const increment = stat.value / (duration / 30);
      const interval = setInterval(() => {
        count += increment;
        if (count >= stat.value) {
          clearInterval(interval);
          setCountedStats((prev) => {
            const updatedStats = [...prev];
            updatedStats[index] = stat.value;
            return updatedStats;
          });
        } else {
          setCountedStats((prev) => {
            const updatedStats = [...prev];
            updatedStats[index] = Math.floor(count);
            return updatedStats;
          });
        }
      }, 30);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById("statistics-section");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      animateCountUp();
    }
  }, [inView]);

  const StatisticBox: React.FC<{
    label: string;
    count: number;
    icon: React.ReactNode;
  }> = ({ label, count, icon }) => (
    <div className="p-4 bg-light text-center rounded shadow-sm transform-on-hover">
      <div className="mb-3 stat-icon-container">{icon}</div>
      <div className="stat-value fw-bold">
        {label.includes("Dollars") ? `$${count}` : count}
      </div>
      <div className="stat-label text-uppercase">{label}</div>
    </div>
  );

  const PillarBox: React.FC<{
    title: string;
    description: string;
    buttonText: string;
    Icon: React.ComponentType<{ size: number; className: string }>;
  }> = ({ title, description, buttonText, Icon }) => (
    <div className="text-center pillar-card p-4 rounded shadow-sm h-100 transform-on-hover d-flex flex-column">
      <div className="d-flex justify-content-center mb-4 pillar-icon-container">
        <Icon size={64} className="text-primary" />
      </div>
      <h3 className="pillar-title fw-bold mb-3">{title}</h3>
      <p className="pillar-description mb-4">{description}</p>
      <div className="mt-auto">
        {title === "Leadership" ? (
          <Link
            to="/board"
            className="btn btn-primary px-4 py-2 fw-bold letter-spacing"
          >
            {buttonText}
          </Link>
        ) : title === "Friendship" ? (
          <Link
            to="/families"
            className="btn btn-primary px-4 py-2 fw-bold letter-spacing"
          >
            {buttonText}
          </Link>
        ) : title === "Service" ? (
          <Link
            to="/humansofapo"
            className="btn btn-primary px-4 py-2 fw-bold letter-spacing"
          >
            {buttonText}
          </Link>
        ) : (
          <button className="btn btn-primary px-4 py-2 fw-bold letter-spacing">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );

  const SymbolBox: React.FC<{
    title: string;
    description: string;
    Icon: React.ComponentType;
  }> = ({ title, description, Icon }) => (
    <div className="text-center symbol-card p-3 rounded shadow-sm transform-on-hover">
      <div className="d-flex justify-content-center mb-3 symbol-icon-container">
        <Icon />
      </div>
      <h4 className="symbol-title fw-bold mb-2">{title}</h4>
      <p className="symbol-description mb-0">{description}</p>
    </div>
  );

  const HistoryBox: React.FC<{
    title: string;
    description: string;
    Icon: React.ComponentType<{ size: number; className: string }>;
  }> = ({ title, description, Icon }) => (
    <div className="history-card p-4 rounded shadow-sm mb-4 transform-on-hover d-flex">
      <div className="history-icon-container me-4">
        <Icon size={40} className="text-primary" />
      </div>
      <div>
        <h4 className="history-title fw-bold mb-2">{title}</h4>
        <p className="history-description mb-0">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="overflow-hidden" id="top">
      <div
        className="vh-100 d-flex flex-column justify-content-center align-items-center text-white position-relative"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <button
          className="menu-btn"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <Menu size={42} strokeWidth={2.5} />
        </button>

        <div
          className="position-absolute top-0 start-0 w-100 h-100 scroll-overlay"
          id="scroll-overlay"
        ></div>

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
          }}
        ></div>

        <div
          className="container position-relative text-center"
          style={{ zIndex: 2 }}
        >
          <h1
            className="display-2 fw-bold mb-3"
            style={{ fontFamily: "inherit" }}
          >
            Alpha Phi Omega
          </h1>
          <h2
            className="display-6 fw-light mb-5"
            style={{ fontFamily: "inherit" }}
          >
            Gamma Chapter at Cornell University
          </h2>
        </div>

        <button
          onClick={scrollToContent}
          className="btn btn-outline-light rounded-circle position-absolute bottom-0 mb-4 p-3 transform-on-hover"
          aria-label="Scroll down"
          style={{
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          <ChevronDown size={36} />
        </button>
      </div>
      
      <SidebarMenu isOpen={menuOpen} onClose={toggleMenu} activeLink="home" />

      <div id="content-section" className="container-fluid py-5">
        <div className="container" style={{ maxWidth: "80%" }}>
          <h2 className="text-center section-title">
            Welcome to Cornell University's on-campus service fraternity
          </h2>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p className="about-text text-center mb-5">
                Established on December 16, 1925 at Lafayette College by Frank Reed Horton, Alpha Phi Omega is a co-ed service fraternity founded on the principles of{" "}
                <span className="fw-bold text-primary">Leadership</span>,{" "}
                <span className="fw-bold text-primary">Friendship</span> and{" "}
                <span className="fw-bold text-primary">Service</span>. Over the
                years it has become the largest collegiate service organization
                in the world, with more than 400,000 members on over 375
                campuses.
              </p>
              <p className="about-text text-center mb-5">
                The Cornell University chapter of Alpha Phi Omega was chartered
                on February 25, 1927. Our chapter is the longest continually
                running chapter of the Alpha Phi Omega national service
                fraternity, where we strive to exemplify the ideals of
                leadership, friendship, and service far above Cayuga's waters.
                Our original charter lists 17 members; today we have become one
                of Cornell's largest student organizations.
              </p>
            </div>
          </div>

          <div id="statistics-section" className="py-5 mt-4">
            <h2 className="text-center section-title">
              So Far This Year, We Have Proudly Achieved…
            </h2>
            <div className="row g-4 mb-5">
              {statistics.map((stat, index) => (
                <div key={index} className="col-md-4">
                  <StatisticBox {...stat} count={countedStats[index]} />
                </div>
              ))}
            </div>
          </div>

          <div className="py-5 mt-4">
            <h2 className="text-center section-title">Our Pillars</h2>
            <div className="row g-4 justify-content-center">
              {pillars.map((pillar, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <PillarBox {...pillar} />
                </div>
              ))}
            </div>
          </div>

          <div className="py-5 mt-4">
            <h2 className="text-center section-title">Our Rich History</h2>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {history.map((item, index) => (
                  <HistoryBox key={index} {...item} />
                ))}
                <p className="text-center mt-4">
                  Our sister chapters include Φ at Syracuse University and ΙΦ at UC Davis, with ΑΖΛ at SUNY Cortland as our little brother chapter.
                </p>
              </div>
            </div>
          </div>

          <div className="py-5 mt-4">
            <h2 className="text-center section-title">Chapter Symbols</h2>
            <div className="row g-4 justify-content-center">
              {symbols.map((symbol, index) => (
                <div key={index} className="col-6 col-md-3 mb-4">
                  <SymbolBox {...symbol} />
                </div>
              ))}
            </div>
          </div>

          <div className="py-5 mt-4">
            <h2 className="text-center section-title">Our Toast Song</h2>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="toast-song">
                  <h4 className="toast-song-title text-center">Alpha Phi Omega Toast Song</h4>
                  <p className="text-center mb-4 small">(Sung to the tune of H.S. Thompson's Annie Lisle, the same tune as Cornell's alma mater)</p>
                  <p className="toast-song-lyrics text-center">
                    Here's to Alpha Phi Omega, Loyal Brothers we, <br/>
                    True to self and to each other, firm in loyalty. <br/>
                    Daily working, daily striving, ever more to be <br/>
                    True to Alpha Phi Omega, Our Fraternity. <br/><br/>
                    
                    Brothers clasp the hands of Brothers, strong the circle we <br/>
                    Ever mindful, ever serving all humanity. <br/>
                    Now we raise our grateful voices in our song to thee: <br/>
                    True to Alpha Phi Omega, may we always be.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-5"
        style={{
          background: "linear-gradient(45deg, #17318C, #1E55BB)",
          color: "white",
        }}
      >
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-4">Join Our Chapter</h2>
              <p className="lead mb-4">
                Join us in our mission of Leadership, Friendship, and Service.
                We are a co-ed service fraternity dedicated to making a positive
                impact in our community.
              </p>
              <a 
                href="mailto:pledgeteam@apogamma.org" 
                className="btn btn-light btn-lg px-5 fw-bold letter-spacing transform-on-hover"
              >
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;