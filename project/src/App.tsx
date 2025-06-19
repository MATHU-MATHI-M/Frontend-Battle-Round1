import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { RippleProvider } from './contexts/RippleContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Progress from './pages/Progress';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Instructors from './pages/Instructors';
import Pricing from './pages/Pricing';
import Loader from './components/Loader';
import { useLoader } from './hooks/useLoader';

function App() {
  const isLoading = useLoader();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ThemeProvider>
      <RippleProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<About />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/instructors" element={<Instructors />} />
                <Route path="/pricing" element={<Pricing />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </RippleProvider>
    </ThemeProvider>
  );
}

export default App;