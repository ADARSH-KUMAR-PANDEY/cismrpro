import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './components/events';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallary from './components/Gallary';
import Home from './components/Home';
import Contactus from './components/contactus';
import React from 'react';
import Awards from './components/awards';
import Publications from './components/publications';
import Projects from './components/project';
import Team from './components/team';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallary" element={<Gallary />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;