import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import RideRequest from './pages/ride/RideRequest'
import RideStatus from './pages/ride/Ridestatus'
import Profile from './pages/profile/Profile'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ride/request" element={<RideRequest />} />
        <Route path="/ride/status" element={<RideStatus />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  )
}
