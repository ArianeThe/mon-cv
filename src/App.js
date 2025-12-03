import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Plus from './components/Plus';
import './styles/App.scss';
import { Helmet } from 'react-helmet';
import backgroundImage from './assets/images/fde.jpg';
import Footer from './components/Footer';
import Mentions from './components/Mentions';
import Confidentialite from './components/Confidentialite';

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
            <Route path="/plus" element={<Plus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions" element={<Mentions />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;