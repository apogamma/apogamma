import { useState } from 'react';
import { X, Award, Info, Users, GraduationCap, Clock, BookOpen, ChevronRight, PersonStanding } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/sidebarmenu.css';

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeLink: string;
}

const SidebarMenu = ({ isOpen, onClose, activeLink }: SidebarMenuProps) => {
  const [brothersPledgesOpen, setBrothersPledgesOpen] = useState(false);

  const toggleBrothersPledges = () => {
    setBrothersPledgesOpen(!brothersPledgesOpen);
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    {
      type: 'link',
      to: '/',
      icon: <Award size={18} className="menu-icon" />,
      text: 'Home',
      active: activeLink === 'home'
    },
    {
      type: 'link',
      to: '/board',
      icon: <BookOpen size={18} className="menu-icon" />,
      text: 'Executive Board',
      active: activeLink === 'board'
    },
    {
      type: 'link',
      to: '/recruitment',
      icon: <Users size={18} className="menu-icon" />,
      text: 'Recruitment',
      active: activeLink === 'recruitment'
    },
    {
      type: 'dropdown-header',
      icon: <Users size={18} className="menu-icon" />,
      text: 'Brothers & Pledges',
      active: activeLink === 'brothers-pledges' || brothersPledgesOpen,
      open: brothersPledgesOpen,
      onClick: toggleBrothersPledges
    },
    {
      type: 'dropdown-item',
      to: '/humansofapo',
      icon: <PersonStanding size={16} className="dropdown-icon" />,
      text: 'Humans Of APO',
      parent: 'brothers-pledges',
      visible: brothersPledgesOpen
    },
    {
      type: 'dropdown-item',
      to: '/families',
      icon: <Users size={16} className="dropdown-icon" />,
      text: 'Families',
      parent: 'brothers-pledges',
      visible: brothersPledgesOpen
    },
    {
      type: 'dropdown-item',
      to: '/pledgepage',
      icon: <Info size={16} className="dropdown-icon" />,
      text: 'Pledge Information',
      parent: 'brothers-pledges',
      visible: brothersPledgesOpen
    },
    {
      type: 'dropdown-item',
      to: '/faqpage',
      icon: <BookOpen size={16} className="dropdown-icon" />,
      text: 'FAQs',
      parent: 'brothers-pledges',
      visible: brothersPledgesOpen
    },
    {
      type: 'link',
      to: '/alumni',
      icon: <GraduationCap size={18} className="menu-icon" />,
      text: 'Alumni',
      active: activeLink === 'alumni'
    },
    {
      type: 'link',
      to: '/archive',
      icon: <Clock size={18} className="menu-icon" />,
      text: 'Archive',
      active: activeLink === 'archive'
    }
  ];

  return (
    <>
      <div 
        className={`sidebar-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      ></div>
      
      <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h5 className="m-0 text-royal-blue fw-bold">Alpha Phi Omega</h5>
          <button className="close-btn" onClick={onClose} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <div className="sidebar-chapter-info">
          <div className="chapter-logo">
            <img src={logo} alt="APO logo" />
          </div>
          <div>
            <div className="chapter-name">Gamma Chapter</div>
            <div className="chapter-location">Cornell University</div>
          </div>
        </div>

        <div className="sidebar-divider">
          <span>Navigation</span>
        </div>
        
        <div className="sidebar-links">
          {navItems.map((item, index) => {
            if (item.type === 'link') {
              return (
                <Link 
                  key={index} 
                  to={item.to || '/'} 
                  className={`sidebar-menu-item ${item.active ? 'active' : ''}`}
                  onClick={() => {
                    scrollToTop();
                    if (onClose) onClose();
                  }}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </Link>
              );
            }
            
            if (item.type === 'dropdown-header') {
              return (
                <div 
                  key={index}
                  className={`sidebar-menu-item dropdown-trigger ${item.active ? 'active' : ''}`} 
                  onClick={item.onClick}
                >
                  {item.icon}
                  <span>{item.text}</span>
                  <ChevronRight size={16} className={`dropdown-arrow ${item.open ? 'open' : ''}`} />
                </div>
              );
            }
            if (item.type === 'dropdown-item' && item.visible) {
              return (
                <Link 
                  key={index} 
                  to={item.to || '/'} 
                  className="dropdown-item"
                  onClick={() => {
                    scrollToTop();
                    if (onClose) onClose();
                  }}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </Link>
              );
            }
            
            return null;
          })}
        </div>
        
        <div className="sidebar-footer">
          <p>No hazing. No alcohol. No discrimination.<br/>We are a dry, inclusive service fraternity.</p>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;