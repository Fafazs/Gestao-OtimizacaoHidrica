import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OnboardingPage } from '../../features/onboarding/OnboardingPage';
import { HomePage } from '../../features/home/HomePage';
import { BeginnerProfilePage } from '../../features/beginnerProfile/BeginnerProfilePage';
import { ProtectedRoute } from '../../features/auth/components/ProtectedRout';
import { FieldDetailsPage } from '../../features/field/pages/FieldDetailsPage';
import { CropDetailsPage } from '../../features/library/pages/CropDetailsPage';
import { ProfilePage } from '../../features/profile/pages/profilePage'
import { LibraryPage } from '../../features/library/pages/LibraryPage'
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
        <Route
          path="/fields/:id"
          element={
            <ProtectedRoute>
              <FieldDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/library"
          element={
            <ProtectedRoute>
              <LibraryPage />
            </ProtectedRoute>
          }

        />
        <Route
          path="/library/:id"
          element={
            <ProtectedRoute>
              <CropDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="/beginner" element={<BeginnerProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}