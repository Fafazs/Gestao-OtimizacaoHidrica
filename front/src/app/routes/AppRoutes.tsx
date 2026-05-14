import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OnboardingPage } from '../../features/onboarding/OnboardingPage';
import { HomePage } from '../../features/home/HomePage';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}