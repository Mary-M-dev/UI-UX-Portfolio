import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import CaseStudy from './pages/CaseStudy';
import MyStory from './pages/MyStory';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-study/:id" element={<CaseStudy />} />
            <Route path="/my-story" element={<MyStory />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
