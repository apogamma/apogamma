import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import BoardPage from "./pages/BoardPage";
import Recruitment from "./pages/Recruitment";
import FaqPage from "./pages/Faqpage";
import PledgePage from "./pages/PledgePage";
import HumansOfApo from "./pages/HumansOfApo";
import Alumni from "./pages/Alumni";
import Archive from "./pages/Archive";
import FamiliesPage from "./pages/Families";
import ServicePage from "./pages/ServicePage";

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollToTop();
    
    const timeoutId = setTimeout(scrollToTop, 100);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <div style={{ 
      width: "100vw", 
      minHeight: "100vh", 
      overflowX: "hidden",
      margin: 0,
      padding: 0
    }}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/faqpage" element={<FaqPage />} />
          <Route path="/pledgepage" element={<PledgePage />} />
          <Route path="/humansofapo" element={<HumansOfApo />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/families" element={<FamiliesPage />} />
          <Route path="/service" element={<ServicePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;