import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './components/HomePage.jsx';


function Main() {

  return (
    <React.StrictMode>
      <ChakraProvider>
        <Flex direction="column" minH="100vh">
          <Navbar />
          <HomePage />
          <App flex="1" />
          <Footer />
        </Flex>
      </ChakraProvider>
    </React.StrictMode>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<Main />);
