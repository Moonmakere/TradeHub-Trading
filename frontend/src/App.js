import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import Navbar from './landing_page/home/Navbar';
import Footer from './landing_page/Footer';
import HomePage from './landing_page/home/HomePage';
import Products from './pages/Products';
import About from './pages/About';
import Markets from './pages/Markets';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Support from './pages/Support';
import Dashboard from './pages/Dashboard';
import TestDashboard from './pages/TestDashboard';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/support" element={<Support />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/test" element={<TestDashboard />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
