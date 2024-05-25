import './App.css';
import './all.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './components/index';
import Navbar from './components/Navbar';
import Footer from './components/footer';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='app-container'>
          <Navbar />
          <div className='content'>

            <Routes>
              <Route exact path='*' element={<Index />} />
              <Route exact path='/index' element={<Index />} />

            </Routes>
          </div>
          <Footer />
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
