import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Home from '../pages/Home';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
