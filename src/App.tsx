import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BoardPage from './pages/BoardPage';
import Recruitment from './pages/Recruitment';
import FaqPage from './pages/Faqpage';
import PledgePage from './pages/PledgePage';
import HumansOfApo from './pages/HumansOfApo';
import Alumni from './pages/Alumni';
import Archive from './pages/Archive';
import FamiliesPage from './pages/Families';

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflowX: "hidden" }}>
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;