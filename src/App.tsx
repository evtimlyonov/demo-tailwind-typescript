import { Landing } from './pages/Landing';
import { Routes, Route } from 'react-router-dom';
import { Packages } from './pages/Packages';
import { Customers } from './pages/Customers';
import { Hosting } from './pages/Hosting';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { MainContainer } from './components/MainContainer/MainContainer';

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/start-hosting' element={<Hosting />} />
        </Routes>
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
