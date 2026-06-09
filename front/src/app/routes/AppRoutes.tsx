import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OnboardingPage } from '../../features/onboarding/OnboardingPage';
import { HomePage } from '../../features/home/HomePage';
import { BeginnerProfilePage } from '../../features/beginnerProfile/BeginnerProfilePage';
import { ProtectedRoute } from '../../features/auth/components/ProtectedRout';
export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/beginner" element={<BeginnerProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}