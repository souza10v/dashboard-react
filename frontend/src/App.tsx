import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products'; // Import the new Products page
import Customers from './Pages/Customers';
import Reports from './Pages/Reports';
import Settings from './Pages/Settings';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <Router>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} /> 
            <Route path="/customers" element={<Customers />} /> 
            <Route path="/reports" element={<Reports/>} /> 
            <Route path="/settings" element={<Settings />} /> 
          </Routes>
      </div>
    </Router>
  );
}

export default App;
