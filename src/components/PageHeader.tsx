import { ArrowLeft, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/pageheader.css';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  onToggleMenu: () => void;
}

const PageHeader = ({ title, subtitle, onToggleMenu }: PageHeaderProps) => {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="page-header text-center position-relative">
      <div className="header-bg-image"></div>
      
      <div className="header-overlay"></div>
      
      <div className="container position-relative">
        <Link to="/" className="position-absolute start-0 top-50 translate-middle-y text-white text-decoration-none" style={{ left: '5px' }} onClick={handleScrollTop}>
          <ArrowLeft size={42} strokeWidth={2.5} />
        </Link>
        <button 
          className="menu-btn position-absolute end-0 top-50 translate-middle-y" 
          onClick={onToggleMenu}
          aria-label="Open menu"
          style={{ right: '5px' }}
        >
          <Menu size={42} strokeWidth={2.5} />
        </button>
        <h1 className="header-title mb-2">{title}</h1>
        {subtitle && <p className="text-white mb-0">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;