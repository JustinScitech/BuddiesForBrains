import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './components/HomePage.jsx';
import TeamPage from './components/TeamPage.jsx';
import Careers from './components/Careers.jsx';
import Donate from './components/Donate.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function Main() {

  return (
    <React.StrictMode>
      <ChakraProvider>
        <Flex direction="column" minH="100vh">
          <Router>
          <Navbar />
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/teampage" element={<TeamPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/Donate" element={<Donate />} />
          </Routes>
          </Router>
          <App flex="1" />
          <Footer />
        </Flex>
      </ChakraProvider>
    </React.StrictMode>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<Main />);
