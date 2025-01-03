import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Auth from './components/Auth'
import Home from './components/Home'
import { AuthProvider, useAuth } from './hooks/AuthProvider'
import { Toaster } from 'react-hot-toast'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={
            <AuthWrapper>
              <Auth />
            </AuthWrapper>
          } />
          <Route path="/" element={
            <ProtectedRoute >
              <Home />
            </ProtectedRoute>
          } />
        </Routes>
        <Toaster />
      </AuthProvider>
    </BrowserRouter>
  )
}

function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/" /> : children;
}


export default App