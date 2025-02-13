import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Options from './Components/Options/Options.jsx';
import Builds from './Components/Builds/Builds.jsx';

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/options" element={<Options />} />
        <Route path="/builds" element={<Builds />} />
      </Routes>
    </Router>
  );
}

export default App;
