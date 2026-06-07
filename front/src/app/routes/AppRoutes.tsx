import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OnboardingPage } from '../../features/onboarding/OnboardingPage';
import { HomePage } from '../../features/home/HomePage';
import { BeginnerProfilePage } from '../../features/beginnerProfile/BeginnerProfilePage';
export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/beginner" element={<BeginnerProfilePage />}/>
      </Routes>
    </BrowserRouter>
  );
}