import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import { VStack, Spacer } from '@chakra-ui/react';
import { Nfts } from './views/Nfts';
import { Maarten } from './views/Maarten';
import { Minter } from './views/Minter';





function App() {
  return (
    <VStack minHeight="100vh">
      <Header />
      <Main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="nfts" element={<Nfts />} />
          <Route path="maarten" element={<Maarten />} />
          <Route path="minter" element={<Minter />} />
        </Routes>
      </Main>
      <Spacer />
      <Footer />
    </VStack>
  );
}

export default App;
