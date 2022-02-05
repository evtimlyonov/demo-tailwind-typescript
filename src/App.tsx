import { Landing } from './pages/Landing';
import { Routes, Route } from 'react-router-dom';
import { Packages } from './pages/Packages';
import { Customers } from './pages/Customers';
import { Hosting } from './pages/Hosting';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/packages' element={<Packages />} />
      <Route path='/customers' element={<Customers />} />
      <Route path='/start-hosting' element={<Hosting />} />
    </Routes>
  );
}

export default App;
