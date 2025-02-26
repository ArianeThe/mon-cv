import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import './styles/App.scss';
import { Helmet } from 'react-helmet';
import backgroundImage from './assets/images/fde.jpg';

function App() {
  return (
    <Router>
      <div className="app" style={{ '--bg-image': `url(${backgroundImage})` }}>
        <Helmet>
          <title>THEBAULT Ariane CV</title>
        </Helmet>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/competences" element={<Skills />} />
            <Route path="/formation" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;