import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivacyPolicy from './components/policy';
import TermsAndConditions from './components/TermsAndConditions';
import CancellationPolicy from './components/Concelpolicy';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsAndConditions />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        <Route path="/" element={<Navigate to="/privacy-policy" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;