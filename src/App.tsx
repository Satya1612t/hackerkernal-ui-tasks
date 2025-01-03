import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './components/Auth'
import Home from './components/Home'
import { AuthProvider } from './hooks/AuthProvider'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Toaster />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App