import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SectionHeading from './Components/SectionHeading';
import ButtonWithGradient from './Components/ButtonWithGradient';
import PageContainer from './Components/PageContainer';
import NewPge from './Components/NewPage';

import './App.css';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => setSidebarCollapsed(prev => !prev);

  return (
    <Router>

      <PageContainer sidebarCollapsed={sidebarCollapsed}>
        <Routes>
          <Route path="/" element={<NewPge />} />
        </Routes>

      </PageContainer>
    </Router>
  );
}

export default App;
